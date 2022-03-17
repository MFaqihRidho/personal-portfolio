import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Skill() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const scaleIn = gsap.fromTo(
            ".skill",
            { scale: 0 },
            { duration: 1.5, scale: 1, ease: "elastic", delay: 0.5 }
        );

        ScrollTrigger.create({
            trigger: ".skill",
            animation: scaleIn,
        });
    }, []);

    return (
        <div id="skills" className="container px-5 mx-auto pb-7 min-h-fit">
            <h1 className="ml-5 text-3xl font-bold pb-7 text-main md:text-5xl">
                My Skills
            </h1>
            <div className="grid grid-cols-3 text-center md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-30 lg:gap-x-32 gap-y-10">
                <div className="flex flex-col items-center justify-center skill">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#E65100"
                            d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                        ></path>
                        <path
                            fill="#FF6D00"
                            d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                        ></path>
                        <path
                            fill="#FFF"
                            d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                        ></path>
                        <path
                            fill="#EEE"
                            d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                        ></path>
                    </svg>
                    <p className="font-medium">HTML</p>
                </div>
                <div className="flex flex-col items-center justify-center skill">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#0277BD"
                            d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                        ></path>
                        <path
                            fill="#039BE5"
                            d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                        ></path>
                        <path
                            fill="#FFF"
                            d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                        ></path>
                        <path
                            fill="#EEE"
                            d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                        ></path>
                    </svg>
                    <p className="font-medium">CSS</p>
                </div>
                <div className="flex flex-col items-center justify-center skill">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        viewBox="0 0 48 48"
                    >
                        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                        <path
                            fill="none"
                            stroke="#000001"
                            stroke-miterlimit="10"
                            stroke-width="3.3"
                            d="M23.783,22.352v9.819 c0,3.764-4.38,4.022-6.283,0.802"
                        ></path>
                        <path
                            fill="none"
                            stroke="#000001"
                            stroke-miterlimit="10"
                            stroke-width="3.3"
                            d="M34.69,25.343 c-1.739-2.727-5.674-2.345-5.84,0.558c-0.214,3.757,6.768,2.938,6.247,7.107c-0.365,2.92-4.874,3.858-7.193-0.065"
                        ></path>
                    </svg>
                    <p className="font-medium">Javascript</p>
                </div>
                <div className="flex flex-col items-center justify-center skill">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill="#4e7ab5"
                            d="M8,11.568c-4.561,0-8-1.534-8-3.568s3.439-3.568,8-3.568S16,5.966,16,8S12.561,11.568,8,11.568z M8,5.432C3.875,5.432,1,6.785,1,8s2.875,2.568,7,2.568S15,9.215,15,8S12.125,5.432,8,5.432z"
                        ></path>
                        <path
                            fill="#4e7ab5"
                            d="M5.027,15L5.027,15c-0.35,0-0.668-0.081-0.947-0.242c-0.455-0.262-0.783-0.726-0.948-1.343 c-0.445-1.663,0.274-4.474,1.833-7.161C6.792,3.111,9.206,1,10.974,1c0.35,0,0.668,0.081,0.947,0.242 c0.454,0.261,0.782,0.725,0.947,1.341c0.445,1.664-0.274,4.475-1.834,7.162C9.21,12.888,6.796,15,5.027,15z M10.974,2 C9.82,2,7.625,3.667,5.83,6.757c-1.41,2.43-2.106,5.002-1.732,6.4c0.097,0.359,0.258,0.606,0.48,0.734 c0.971,0.558,3.526-1.09,5.591-4.649c1.411-2.431,2.107-5.003,1.733-6.401c-0.097-0.358-0.258-0.605-0.479-0.732 C11.295,2.036,11.148,2,10.974,2z"
                        ></path>
                        <path
                            fill="#4e7ab5"
                            d="M10.974,15L10.974,15c-1.769,0-4.183-2.112-6.008-5.254C3.406,7.06,2.687,4.249,3.132,2.585 C3.297,1.968,3.625,1.503,4.08,1.242C4.359,1.081,4.678,1,5.027,1c1.768,0,4.182,2.112,6.007,5.256 c1.56,2.687,2.279,5.497,1.833,7.161c-0.165,0.617-0.492,1.081-0.946,1.341C11.642,14.919,11.323,15,10.974,15z M5.027,2 C4.853,2,4.706,2.036,4.578,2.109c-0.223,0.128-0.384,0.375-0.48,0.735c-0.374,1.398,0.322,3.97,1.733,6.4 C7.624,12.333,9.819,14,10.974,14l0,0c0.175,0,0.321-0.036,0.449-0.109c0.222-0.127,0.383-0.374,0.479-0.733 c0.375-1.398-0.321-3.97-1.732-6.4C8.376,3.667,6.181,2,5.027,2z"
                        ></path>
                        <path
                            fill="#8bb7f0"
                            d="M9,8c0,0.553-0.447,1-1,1S7,8.553,7,8s0.447-1,1-1S9,7.447,9,8z"
                        ></path>
                        <path
                            fill="#4e7ab5"
                            d="M8,9.5C7.173,9.5,6.5,8.827,6.5,8S7.173,6.5,8,6.5S9.5,7.173,9.5,8S8.827,9.5,8,9.5z M8,7.5 C7.725,7.5,7.5,7.724,7.5,8S7.725,8.5,8,8.5S8.5,8.276,8.5,8S8.275,7.5,8,7.5z"
                        ></path>
                    </svg>
                    <p className="font-medium">React Js</p>
                </div>
                <div className="flex flex-col items-center justify-center skill">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#7e57c2"
                            d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"
                        ></path>
                        <path
                            fill="#7e57c2"
                            d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"
                        ></path>
                        <path
                            fill="#7e57c2"
                            d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"
                        ></path>
                    </svg>
                    <p className="font-medium">Redux</p>
                </div>
                <div className="flex flex-col items-center justify-center skill">
                    <svg
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        viewBox="0 0 256 154"
                        version="1.1"
                        preserveAspectRatio="xMidYMid"
                    >
                        <defs>
                            <linearGradient
                                x1="-2.77777778%"
                                y1="32%"
                                x2="100%"
                                y2="67.5555556%"
                                id="linearGradient-1"
                            >
                                <stop stop-color="#2298BD" offset="0%"></stop>
                                <stop stop-color="#0ED7B5" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g>
                            <path
                                d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
                                fill="url(#linearGradient-1)"
                            ></path>
                        </g>
                    </svg>

                    <p className="font-medium">Tailwind</p>
                </div>
                <div className="flex flex-col items-center justify-center skill">
                    <svg
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        x="0px"
                        y="0px"
                        viewBox="0 0 48 48"
                    >
                        <polygon
                            fill="#29b6f6"
                            points="1,5 7,9 7,29 1,25"
                        ></polygon>
                        <polygon
                            fill="#0288d1"
                            points="47,20 41,24 41,37 47,33"
                        ></polygon>
                        <polygon
                            fill="#0288d1"
                            points="47,6 41,10 41,17 47,13"
                        ></polygon>
                        <polygon
                            fill="#0288d1"
                            points="35,5 29,9 29,29 35,25"
                        ></polygon>
                        <polygon
                            fill="#29b6f6"
                            points="1,12 18,23 18,16 1,5"
                        ></polygon>
                        <polygon
                            fill="#0288d1"
                            points="35,12 18,23 18,16 35,5"
                        ></polygon>
                        <polygon
                            fill="#0288d1"
                            points="35,26 18,37 18,30 35,19"
                        ></polygon>
                        <polygon
                            fill="#0288d1"
                            points="47,34 30,45 30,38 47,27"
                        ></polygon>
                        <polygon
                            fill="#29b6f6"
                            points="30,37.765 18,30 18,37 30,44.765"
                        ></polygon>
                    </svg>
                    <p className="font-medium">Material Ui</p>
                </div>
                <div className="flex flex-col items-center justify-center skill">
                    <svg
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        x="0px"
                        y="0px"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#673ab7"
                            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M33.03,25.6c-0.65-0.9-1.59-1.52-2.8-1.85c0,0,1.02-0.37,1.94-1.75c0.55-0.88,0.83-1.94,0.83-3.18 c0-2.15-0.78-3.8-2.34-4.93C29.1,12.76,27.34,12,24.35,12H15v24h10.43c2.83-0.02,4.96-0.63,6.41-1.8c1.44-1.19,2.16-2.95,2.16-5.3 C34,27.6,33.68,26.5,33.03,25.6z M21,16c0,0,4.17,0,4.25,0c1.52,0,2.75,1.23,2.75,2.75c0,1.52-1.23,2.75-2.75,2.75 c-0.08,0-4.25,0-4.25,0V16z M26,32h-5v-6h5c1.66,0,3,1.34,3,3C29,30.66,27.66,32,26,32z"
                        ></path>
                    </svg>
                    <p className="font-medium">Bootstrap</p>
                </div>
                <div className="flex flex-col items-center justify-center skill">
                    <svg
                        x="0px"
                        y="0px"
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#ff8f00"
                            d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
                        ></path>
                        <path
                            fill="#ffa000"
                            d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
                        ></path>
                        <path
                            fill="#ff6f00"
                            d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
                        ></path>
                        <path
                            fill="#ffc400"
                            d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
                        ></path>
                    </svg>
                    <p className="font-medium">Firebase</p>
                </div>
                <div className="flex flex-col items-center justify-center skill">
                    <svg
                        x="0px"
                        y="0px"
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#F4511E"
                            d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                        ></path>
                    </svg>
                    <p className="font-medium">Git</p>
                </div>
            </div>
            <h1 className="mt-10 ml-5 text-3xl font-bold pb-7 dark:text-light text-dark md:text-5xl">
                Coming soon
            </h1>
            <div className="grid grid-cols-3 text-center md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-30 lg:gap-x-32 gap-y-10">
                <div className="flex flex-col items-center justify-center skill grayscale">
                    <svg
                        x="0px"
                        y="0px"
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#5d4037"
                            d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"
                        ></path>
                        <path
                            fill="#4caf50"
                            d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"
                        ></path>
                        <path fill="#dcedc8" d="M23 28H25V36H23z"></path>
                        <path
                            fill="#4caf50"
                            d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"
                        ></path>
                        <path
                            fill="#81c784"
                            d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"
                        ></path>
                    </svg>
                    <p className="font-medium">MongoDB</p>
                </div>
                <div className="flex flex-col items-center justify-center skill grayscale">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px] dark:fill-white"
                    >
                        <path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
                    </svg>
                    <p className="font-medium">Express JS</p>
                </div>
                <div className="flex flex-col items-center justify-center skill grayscale">
                    <svg
                        x="0px"
                        y="0px"
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#21a366"
                            d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"
                        ></path>
                        <path
                            fill="#21a366"
                            d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"
                        ></path>
                    </svg>
                    <p className="font-medium">Node JS</p>
                </div>
                <div className="flex flex-col items-center justify-center skill grayscale">
                    <svg
                        x="0px"
                        y="0px"
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#80deea"
                            d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                        ></path>
                        <path
                            fill="#80deea"
                            d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                        ></path>
                        <path
                            fill="#80deea"
                            d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                        ></path>
                        <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                    </svg>
                    <p className="font-medium">React Native</p>
                </div>
                <div className="flex flex-col items-center justify-center skill grayscale">
                    <svg
                        x="0px"
                        y="0px"
                        className="md:w-[130px] w-[100px] h-[100px] md:h-[130px]"
                        viewBox="0 0 48 48"
                    >
                        <rect
                            width="36"
                            height="36"
                            x="6"
                            y="6"
                            fill="#1976d2"
                        ></rect>
                        <polygon
                            fill="#fff"
                            points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                        ></polygon>
                        <path
                            fill="#fff"
                            d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                        ></path>
                    </svg>
                    <p className="font-medium">Typescript</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
