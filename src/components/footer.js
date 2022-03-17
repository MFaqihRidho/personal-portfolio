import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

function Footer() {
    gsap.registerPlugin(ScrollToPlugin);
    const handleClickToTop = () => {
        gsap.to(window, { duration: 2, scrollTo: 0 });
    };

    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <button
                onClick={handleClickToTop}
                className="flex flex-col items-center justify-center mt-10 w-36 animate-bounce md:-mb-20"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 11l7-7 7 7M5 19l7-7 7 7"
                    />
                </svg>
                <p>Back To Top?</p>
            </button>
            <svg
                className="-mb-2 sm:-mb-1 md:-mb-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#fca311"
                    fill-opacity="1"
                    d="M0,256L80,245.3C160,235,320,213,480,208C640,203,800,213,960,197.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
            <footer className="w-full h-48 text-black transition-all duration-300 bg-main">
                <div className="container flex flex-col items-center justify-center h-full mx-auto text-gray-700 transition-all duration-300 dark:text-gray-200 bg-light_primary dark:bg-dark_primary">
                    <div className="flex gap-3 py-3">
                        <a href="">
                            <svg
                                className="fill-black "
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="40"
                                height="40"
                                viewBox="0 0 30 30"
                            >
                                {" "}
                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                            </svg>
                        </a>
                        <a href="">
                            <svg
                                className="fill-black "
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="40"
                                height="40"
                                viewBox="0 0 30 30"
                            >
                                {" "}
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                        </a>
                        <a href="">
                            <svg
                                className="fill-black "
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="40"
                                height="40"
                                viewBox="0 0 30 30"
                            >
                                {" "}
                                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                            </svg>
                        </a>
                    </div>
                    <h5 className="mb-3 text-xl font-semibold md:mb-3">
                        MFaqihRidho © 2022
                    </h5>
                    <div className="w-full h-0.5 bg-black dark:bg-black mb-2"></div>
                    <p className="mb-2 font-medium">
                        Cool Design By{" "}
                        <a
                            href="https://ui8.net/users/amerta-media"
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                        >
                            Amerta Media
                        </a>
                    </p>
                    <p className="mb-2 font-medium">
                        Candaan API By{" "}
                        <a
                            href="https://github.com/ardhptr21/candaan-api"
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                        >
                            ardhptr21
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
