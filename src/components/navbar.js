import React, { useEffect, useState, useRef } from "react";
import MobileNav from "./mobile/mobilenav";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

function Navbar() {
    const menuRef = useRef(null);
    const [dark, setDark] = useState(true);
    const [open, setOpen] = useState(false);
    const [listening, setListening] = useState(false);
    gsap.registerPlugin(ScrollToPlugin);

    const handleClickTo = (id, wave) => {
        if (wave === true) {
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: `#${id}`, offsetY: -150 },
            });
        } else {
            gsap.to(window, {
                duration: 1,
                scrollTo: `#${id}`,
            });
        }
    };

    const handleDarkMode = () => {
        setDark(!dark);
        if (dark) {
            localStorage.setItem("dark", false);
        } else {
            localStorage.setItem("dark", true);
        }
    };

    const handleOpen = () => {
        setOpen(!open);
        console.log(!open);
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
    }, []);

    useEffect(() => {
        if (listening) return;
        if (!menuRef.current) return;
        setListening(true);
        [`click`, `touchstart`].forEach((type) => {
            document.addEventListener(`click`, (evt) => {
                const cur = menuRef.current;
                const node = evt.target;
                if (cur.contains(node)) return;
                setOpen(false);
            });
        });
    }, [listening]);

    return (
        <nav className="w-full font-bold px-5 my-5 md:my-7 h-[58px]">
            <div
                ref={menuRef}
                className="container flex items-center content-center justify-between mx-auto "
            >
                <div className="flex items-center gap-5">
                    <img
                        className="w-[80px] md:mb-3 h-[80px]"
                        src="https://i.postimg.cc/JzwsPqw1/mfr-logo.png"
                        alt=""
                        n
                    />
                    <h1 className="hidden text-3xl lg:block">
                        M.Faqih <span className="text-main">Ridho</span>
                    </h1>
                </div>
                <div className="flex items-center gap-8 text-2xl font-bold">
                    <button className="hidden font-bold md:block">Home</button>
                    <button
                        onClick={() => handleClickTo("about", true)}
                        className="hidden font-bold md:block"
                    >
                        About
                    </button>
                    <button
                        onClick={() => handleClickTo("projects", false)}
                        className="hidden font-bold md:block"
                    >
                        Projects
                    </button>
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
                    <button
                        onClick={() => handleOpen()}
                        className="p-1 rounded md:hidden focus:ring-2 focus:ring-main"
                    >
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
            <MobileNav open={open}></MobileNav>
            <div
                className={`w-full right-0 left-0 h-screen top-0 ${
                    open ? "inline-block" : "hidden"
                } absolute md:hidden bg-black opacity-50 z-40`}
            ></div>
        </nav>
    );
}

export default Navbar;
