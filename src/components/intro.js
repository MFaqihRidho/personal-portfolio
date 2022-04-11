import React, { useEffect, useState } from "react";
import gsap from "gsap";

function Intro() {
    const [candaan, setCandaan] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let height = -window.innerHeight;
        console.log(height);
        gsap.fromTo(
            ".logo",
            { scale: 0, rotate: 0 },
            { duration: 1, scale: 1, ease: "elastic", rotate: 360 }
        );
        const getCandaan = async () =>
            await fetch("https://candaan-api.vercel.app/api/text/random")
                .then((res) => res.json())
                .then((result) => {
                    setCandaan(result);
                    setLoading(false);
                    gsap.fromTo(
                        ".bg-intro",
                        { top: 0 },
                        {
                            duration: 3,
                            top: height - 100,
                            ease: "expo",
                            delay: 4,
                        }
                    );
                    gsap.fromTo(
                        ".candaan",
                        { scale: 0 },
                        { duration: 1, scale: 1, ease: "elastic" }
                    );
                });
        getCandaan();
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen bg-white opacity-100 dark:bg-black bg-intro">
            <img
                className="w-24 h-24 md:w-36 md:h-36 logo"
                src="https://i.postimg.cc/vZhrRypz/mfr-logo-1.png"
                alt=""
                n
            />
            <div className="flex flex-col items-center justify-center candaan">
                <h1 className="w-2/3 text-xl font-bold text-center md:w-1/2 md:text-2xl">
                    {candaan.status === 200 &&
                        loading === false &&
                        candaan.data}
                </h1>
            </div>
        </div>
    );
}

export default Intro;
