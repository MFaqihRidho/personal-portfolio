import React, { useEffect, useState } from "react";

function Navbar() {
    const [dark, setDark] = useState(true);

    const handleDarkMode = () => {
        setDark(!dark);
        if (dark) {
            localStorage.setItem("dark", false);
        } else {
            localStorage.setItem("dark", true);
        }
    };

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    useEffect(() => {
        if (localStorage.getItem("dark") === "true") {
            document.documentElement.classList.add("dark");
            setDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDark(false);
        }
    });

    return (
        <div className="w-full container font-bold mx-auto px-5 my-9 h-[58px] justify-between flex items-center content-center">
            <div className="flex items-center gap-5">
                <img
                    className="w-[80px] md:mb-3 h-[80px]"
                    src="https://i.postimg.cc/JzwsPqw1/mfr-logo.png"
                    alt=""
                />
                <h1 className="hidden text-3xl lg:block">
                    M.Faqih <span className="text-main">Ridho</span>
                </h1>
            </div>
            <div className="flex items-center gap-8 text-2xl font-bold">
                <button className="hidden font-bold md:block">Home</button>
                <button className="hidden font-bold md:block">About</button>
                <button className="hidden font-bold md:block">Projects</button>
                <button className="hidden font-bold md:block text-main">
                    Contact
                </button>
                <button
                    className="p-1 rounded focus:ring-2 focus:ring-main"
                    onClick={handleDarkMode}
                >
                    {dark ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 md:w-6 md:h-6"
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
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 md:w-6 md:h-6"
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
                    )}
                </button>
                <button className="md:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
