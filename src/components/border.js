import React from "react";

function Border(props) {
    return (
        <div className="relative transition-all duration-300 flex items-center justify-center border-[7px] w-fit h-full">
            <div className="w-full bg-white flex justify-between h-6 absolute right-0 left-0 top-0 border-b-[7px]">
                <div className="flex flex-row gap-1">
                    <div className="w-4 h-4 bg-black rounded-full "></div>
                    <div className="w-4 h-4 bg-black rounded-full "></div>
                    <div className="w-4 h-4 bg-black rounded-full "></div>
                </div>
                <div className="w-10 h-full border-l-8"></div>
            </div>
            {props.children}
        </div>
    );
}

export default Border;
