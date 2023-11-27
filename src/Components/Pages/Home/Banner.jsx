
const Banner = () => {
    return (
        <div>
            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJ1c2luZXNzfGVufDB8fDB8fHww)] bg-cover bg-center bg-no-repeat "
            >
                <div
                    className="absolute inset-0 md:bg-black/75 md:bg-transparent bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Charting Courses of Opinion

                            <strong className="block font-extrabold text-rose-700">
                                Elevate Your Voice with PollPilot!
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            Navigate Your Voice with PollPilot! 🚀 Engage, Decide, and Transform with our cutting-edge polling platform. Your opinions matter, and PollPilot empowers you to steer the conversation. Fast, intuitive, and impactful—let your voice soar with PollPilot! 🗳️✨ #PollPilot #VoiceYourOpinion
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>

                            <a
                                href="#"
                                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                            >
                                Explore More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;