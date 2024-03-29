import moment from "moment";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UpdateSurveys = () => {
    const surveyData = useLoaderData();
    const axiosSec = useAxiosSecure();

    const { _id, title, shortdescription, description, category, userName, userEmail, userPhoto } = surveyData || {};

    const categories = [
        'Entertainment',
        'Technology',
        'Health And Wellness',
        'Environment',
        'Workplace',
        'Travel',
        'Hobbies',
    ];

    const handleUpdateSurvey = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);

            const newSurvey = {
                userName,
                userEmail,
                userPhoto,
                title: formData.get('title'),
                shortdescription: formData.get('shortdescription'),
                description: formData.get('description'),
                category: formData.get('HeadlineAct'),
                date: moment().format().split('T')[0],
            };

            const res = await axiosSec.patch(`/surveys/${_id}`, newSurvey)
            if (res.data.modifiedCount > 0) {
                toast.success('Survey updated successfully');
                e.target.reset();
            }
        } catch (error) {
            console.error(error);
            toast.error('Error updating survey');
        }
    };

    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center pt-10">Update Survey</h1>
                <div className="divider pb-5"></div>
            </div>

            <div>
                <form onSubmit={handleUpdateSurvey}>
                    <div className='w-[60%] mx-auto'>
                        <div className="flex flex-col">
                            <label className="leading-loose">Title</label>
                            <input defaultValue={title} name="title" type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Title" />
                        </div><br />

                        <div className="flex flex-col">
                            <label className="leading-loose">Short Description</label>
                            <textarea defaultValue={shortdescription} name="shortdescription" type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Short Description..." />
                        </div>
                        <br />

                        <div className="flex flex-col">
                            <label className="leading-loose">Description</label>
                            <textarea defaultValue={description} name="description" type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Write Description..." />
                        </div>
                        <br />

                        <div className="flex flex-col">
                            <label className="leading-loose">Category</label>
                            <select
                                defaultValue={category}
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
                            >
                                <option value="" disabled defaultValue>Please select</option>
                                {categories.map((cate) => (
                                    <option key={cate}>{cate}</option>
                                ))}
                            </select>
                        </div><br />
                        <button type='submit' className='btn btn-sm btn-accent  w-full'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSurveys;
