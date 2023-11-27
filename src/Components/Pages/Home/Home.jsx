import FAQs from "../FAQs/FAQs";
import MakeYourAudience from "../MakeYourAudience/MakeYourAudience";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <Testimonials></Testimonials>
            </div>

            <div>
                <MakeYourAudience></MakeYourAudience>
            </div>

            <div>
                <FAQs></FAQs>
            </div>
        </div>
    );
};

export default Home;