import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

function MobileNav(props) {
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

    return (
        <div
            className={`${
                props.open ? "bottom-0" : "-bottom-72"
            } left-0 right-0 flex flex-col items-center justify-center gap-4 py-5 text-3xl bg-white shadow-2xl dark:shadow-white shadow-black dark:bg-black transition-all duration-300 md:-bottom-72 fixed z-50`}
        >
            <button className="w-1/2 py-1 font-bold border-2 border-black dark:border-white bg-main">
                Home
            </button>
            <button
                onClick={() => handleClickTo("about", false)}
                className="w-1/2 py-1 font-bold border-2 border-black dark:border-white bg-main"
            >
                About
            </button>
            <button
                onClick={() => handleClickTo("projects", false)}
                className="w-1/2 py-1 font-bold border-2 border-black dark:border-white bg-main"
            >
                Projects
            </button>
            <button
                onClick={() => handleClickTo("contact", false)}
                className="w-1/2 py-1 font-bold border-2 border-black dark:border-white bg-main"
            >
                Contact
            </button>
        </div>
    );
}

export default MobileNav;
