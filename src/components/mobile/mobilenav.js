import React from "react";

function MobileNav(props) {
    return (
        <div
            className={`${
                props.open ? "bottom-0" : "-bottom-72"
            } left-0 right-0 flex flex-col items-center justify-center gap-4 py-5 text-3xl bg-white shadow-2xl dark:shadow-white shadow-black dark:bg-black transition-all duration-300 md:-bottom-72 fixed z-50`}
        >
            <button className="w-1/2 py-1 font-bold border-2 border-black dark:border-white bg-main">
                Home
            </button>
            <button className="w-1/2 py-1 font-bold border-2 border-black dark:border-white bg-main">
                About
            </button>
            <button className="w-1/2 py-1 font-bold border-2 border-black dark:border-white bg-main">
                Projects
            </button>
            <button className="w-1/2 py-1 font-bold border-2 border-black dark:border-white bg-main">
                Contact
            </button>
        </div>
    );
}

export default MobileNav;
