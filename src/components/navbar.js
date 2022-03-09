import React from "react";

function Navbar() {
    return (
        <div className="w-full container font-bold mx-[100px] my-9 h-[58px] justify-between flex items-center content-center">
            <div className="flex items-center gap-5">
                <img
                    className="w-[80px] h-[80px]"
                    src="https://i.postimg.cc/JzwsPqw1/mfr-logo.png"
                    alt=""
                />
                <h1 className="text-3xl">
                    M.Faqih <span className="text-main">Ridho</span>
                </h1>
            </div>
            <div className="flex items-center gap-8 text-2xl font-bold">
                <button className="font-bold">Home</button>
                <button className="font-bold">About</button>
                <button className="font-bold">Projects</button>
                <button className="font-bold text-main">Contact</button>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-light"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                    </svg>
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
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
