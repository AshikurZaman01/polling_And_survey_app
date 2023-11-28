import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    return (
        <div className='mt-[100px] mb-[100px]'>


            <div>
                <div className="hero h-[600px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyb3VwcyUyMG9mJTIwcGVvcGxlfGVufDB8fDB8fHww)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>

                    <div>
                        <div className='my-[50px] text-red-500'>
                            <h1 className='text-center text-5xl font-bold'>How it Works</h1>
                        </div>
                        <div className='w-[80%] mx-auto flex'>
                            <div>
                                <h1 className='text-3xl text-white font-bold'>Explore Surveys and Polls</h1>
                                <p className='text-xl p-3 text-gray-400'>Browse through a diverse range of surveys and polls covering various topics. Discover interesting questions and contribute your opinions to make your voice heard.</p>
                            </div>

                            <div>
                                <h1 className='text-3xl text-white font-bold'>Vote and Share Your Thoughts</h1>
                                <p className='text-xl p-3 text-gray-400'>Express your views by participating in surveys. Cast your votes and share your thoughts on different topics. Your input adds valuable perspectives to the ongoing discussions.</p>
                            </div>
                        </div>

                        <div className='my-[50px] text-center'>
                            <Link to={'/learnMore'}><button className='bg-amber-950 w-[200px] text-3xl text-white py-3 rounded-md btn btn-lg'>Learn More</button></Link>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
};

export default HowItWorks;