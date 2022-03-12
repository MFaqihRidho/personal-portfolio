import React from "react";

function Certificate() {
    return (
        <div>
            <svg
                className="-mb-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#FCA311"
                    fill-opacity="1"
                    d="M0,128L80,128C160,128,320,128,480,149.3C640,171,800,213,960,213.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
            </svg>
            <div className="w-full py-10 text-black min-h-fit bg-main">
                <div className="container px-5 mx-auto ">
                    <h1 className="mt-10 ml-5 text-3xl font-bold pb-7 md:text-5xl">
                        My Certificate
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Certificate;
