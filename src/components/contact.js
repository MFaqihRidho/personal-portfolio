import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Contact() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const fadeRight = gsap.fromTo(
            ".contact_form",
            { x: -100 },
            { duration: 2, x: 0, ease: "expo" }
        );
        const fadeleft = gsap.fromTo(
            ".contact_info",
            { x: 100 },
            { duration: 2, x: 0, ease: "expo" }
        );

        ScrollTrigger.create({
            trigger: ".contact_form",
            animation: fadeRight,
        });
        ScrollTrigger.create({
            trigger: ".contact_form",
            animation: fadeleft,
        });
    }, []);

    return (
        <section
            id="contact"
            className="container flex flex-col items-center justify-center w-full px-5 mx-auto mt-10 text-black"
        >
            <h1 className="self-start ml-5 text-3xl font-bold pb-7 text-main md:text-5xl">
                Contact Me
            </h1>
            <div className="flex flex-col w-full gap-10 md:gap-5 lg:flex-row">
                <div class="bg-main contact_form w-full p-8 sm:p-12 shadow-lg">
                    <form
                        target="_blank"
                        action="https://formsubmit.co/mfaqihridhoo@gmail.com"
                        method="POST"
                    >
                        <div class="mb-6">
                            <input
                                type="name"
                                name="name"
                                required
                                placeholder="Your Name"
                                class="
                        w-full
                        py-3
                        px-[14px]
                        bg-white
                        
                          border-4 border-black 
                        outline-none
                        focus-visible:shadow-none
                        focus:border-dark
                        "
                            />
                        </div>
                        <div class="mb-6">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                class="
                        w-full
                        py-3
                        px-[14px]
                        bg-white
                        
                          border-4 border-black 
    
                        outline-none
                        focus-visible:shadow-none
                        focus:border-dark
                        "
                            />
                        </div>

                        <div class="mb-6">
                            <textarea
                                required
                                rows="6"
                                name="message"
                                placeholder="Your Message"
                                class="
                        w-full
                        py-3
                        px-[14px]
                        bg-white
                        
                          border-4 border-black 
    
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-dark
                        "
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="
                        w-full
                        bg-white
                        font-bold text-xl
                          border-4 border-black 
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full p-8 shadow-lg contact_info bg-main sm:p-12">
                    <p className="mb-2 text-2xl font-bold">
                        {" "}
                        Contact Information
                    </p>
                    <p className="mb-5 text-lg font-medium">
                        Saya terbuka untuk saran apapun atau hanya untuk
                        mengobrol
                    </p>
                    <div className="flex flex-col gap-7">
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="hidden p-1 bg-white rounded-full sm:block w-9 h-9"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <p className="text-lg font-bold sm:text-xl">
                                WhatsApp :{" "}
                                <span className="font-medium">
                                    +62 851 5622 4620
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="hidden p-1 bg-white rounded-full sm:block w-9 h-9"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                />
                            </svg>
                            <p className="text-lg font-bold sm:text-xl">
                                Email :{" "}
                                <span className="font-medium">
                                    mfaqihridhoo@gmail.com
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 30 30"
                                className="hidden p-1 bg-white rounded-full sm:block w-9 h-9"
                            >
                                {" "}
                                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                            </svg>
                            <p className="text-lg font-bold sm:text-xl">
                                Instagram :{" "}
                                <span className="font-medium">
                                    @mfaqihridho
                                </span>
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="hidden p-1 bg-white rounded-full sm:block w-9 h-9"
                                viewBox="0 0 30 30"
                            >
                                {" "}
                                <path d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z"></path>
                            </svg>
                            <p className="text-lg font-bold sm:text-xl">
                                Discord :{" "}
                                <span className="font-medium">
                                    mfaqihridho#3421
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
