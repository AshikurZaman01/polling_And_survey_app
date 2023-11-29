import moment from 'moment';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const AddSurvey = () => {

    const { user } = useAuth();
    const axiosSec = useAxiosSecure();

    const handleAddSurvey = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);

            const newSurvey = {
                userName: user?.displayName,
                userEmail: user?.email,
                userPhoto: user?.photoURL,
                title: formData.get('title'),
                shortdescription: formData.get('shortdescription'),
                description: formData.get('description'),
                category: formData.get('HeadlineAct'),
                date: moment().format().split('T')[0],
            };

            const res = await axiosSec.post('/surveys', newSurvey);

            if (res.data.insertedId) {
                toast.success('Survey added successfully');
            }
        } catch (error) {
            console.error(error);
            toast.error('Error adding survey');
        }

        e.target.reset();
    };


    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center pt-10">Add Survey</h1>
                <div className="divider pb-5"></div>
            </div>

            <div>
                <form onSubmit={handleAddSurvey}>

                    <div className='w-[60%] mx-auto'>

                        <div className="flex flex-col">
                            <label className="leading-loose">Title</label>
                            <input name="title" type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Title" />
                        </div><br />

                        <div className="flex flex-col">
                            <label className="leading-loose">Short Description</label>
                            <textarea name="shortdescription" type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Short Description..." />
                        </div>
                        <br />

                        <div className="flex flex-col">
                            <label className="leading-loose">Description</label>
                            <textarea name="description" type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Write Description..." />
                        </div>
                        <br />

                        <div className="flex flex-col">
                            <label className="leading-loose">Category</label>
                            <select
                                name="HeadlineAct"
                                id="HeadlineAct"
                                className="mt-1.5 w-full rounded-lg border p-2 border-gray-300 text-gray-700 sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Technology">Technology</option>
                                <option value="Health And Wellness">Health And Wellness</option>
                                <option value="Environment">Environment</option>
                                <option value="Workplace">Workplace</option>
                                <option value="Travel">Travel</option>
                                <option value="Hobbies">Hobbies</option>
                            </select>
                        </div><br />
                        <button type='submit' className='btn btn-sm btn-accent  w-full'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSurvey;
