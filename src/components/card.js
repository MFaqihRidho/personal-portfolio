import React from "react";

function Card(props) {
    return (
        <div className="flex flex-col text-white rounded-xl">
            <img src={props.img} alt="" />
            <div className="absolute flex items-center justify-center gap-1 p-2">
                <div className="flex">
                    <div className="absolute w-3 h-3 rounded-full animate-ping bg-main"></div>
                    <div className="w-3 h-3 rounded-full bg-main"></div>
                </div>
                <p className="font-bold">Live</p>
            </div>
            <div className="w-full px-5 py-3 -mt-1 h-fit bg-dark">
                <div className="pb-3">
                    <h6 className="text-xl font-bold">{props.title}</h6>
                    <p>{props.desc}</p>
                    {props.tech}
                </div>
                <div className="flex justify-between gap-2 text-lg">
                    <a
                        className="w-full"
                        href={props.website}
                        target={"_blank"}
                    >
                        <button className="px-8 py-1.5 w-full shadow-lg font-bold border-4 border-black bg-main">
                            Visit
                        </button>
                    </a>
                    <a className="w-full" href={props.code} target={"_blank"}>
                        <button className="px-8 py-1.5 w-full shadow-lg font-bold border-4 border-black bg-main">
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
