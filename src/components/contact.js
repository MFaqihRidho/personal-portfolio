import React from "react";
import Border from "./border";

function Contact() {
    return (
        <div
            id="contact"
            className="container flex flex-col items-center justify-center w-full px-5 mx-auto mt-10 text-black"
        >
            <h1 className="self-start ml-5 text-3xl font-bold pb-7 text-main md:text-5xl">
                Contact Me
            </h1>
            <div className="grid w-full gap-5 md:grid-cols-2">
                <div class="bg-main w-full p-8 sm:p-12 shadow-lg">
                    <form>
                        <div class="mb-6">
                            <input
                                type="text"
                                placeholder="Nama Kamu"
                                class="
                        w-full
                        py-3
                        px-[14px]
                        bg-white
                        
                          border-4 border-black 
                        outline-none
                        focus-visible:shadow-none
                        focus:border-dark
                        "
                            />
                        </div>
                        <div class="mb-6">
                            <input
                                type="email"
                                placeholder="Email Kamu"
                                class="
                        w-full
                        py-3
                        px-[14px]
                        bg-white
                        
                          border-4 border-black 
    
                        outline-none
                        focus-visible:shadow-none
                        focus:border-dark
                        "
                            />
                        </div>

                        <div class="mb-6">
                            <textarea
                                rows="6"
                                placeholder="Pesan Kamu"
                                class="
                        w-full
                        py-3
                        px-[14px]
                        bg-white
                        
                          border-4 border-black 
    
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-dark
                        "
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="
                        w-full
                        bg-white
                        font-bold text-xl
                          border-4 border-black 
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                            >
                                Kirim
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full p-8 shadow-lg bg-main sm:p-12">
                    <p>My Email</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
