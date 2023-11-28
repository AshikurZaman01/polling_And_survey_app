import FAQs from "../FAQs/FAQs";
import HowItWorks from "../HowItWorks/HowItWorks";
import MakeYourAudience from "../MakeYourAudience/MakeYourAudience";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner";
import FeaturedSurvey from "./FeaturedSurvey/FeaturedSurvey";
import LatestSurveys from "./FeaturedSurvey/LatestSurveys";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>

            <div>
                <FeaturedSurvey></FeaturedSurvey>
            </div>

            <div>
                <LatestSurveys></LatestSurveys>
            </div>

            <div>
                <HowItWorks></HowItWorks>
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