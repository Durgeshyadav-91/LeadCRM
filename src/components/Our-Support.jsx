import React from "react";

export default function OurSupport() {
    return (
        <section className="relative bg-white z-10">
            <div className="relative w-full py-20 px-4 md:px-12">
                <div className="flex flex-col items-center text-center mb-4 relative">
                    <h2 className="relative text-2xl md:text-3xl font-semibold text-[#0B1C55]">
                        Our Supported LeadCRM
                        <div className="absolute -top-14 -right-14">
                            <img
                                src="/images/thumb.png"
                                alt="Support Icon"
                                className="w-16 h-16"
                            />
                        </div>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mt-4 text-sm md:text-base">
                        LeadCRM provides Native Integrations with popular CRM tools to make the
                        most out of your LinkedIn prospecting. We don’t want you to miss any
                        revenue opportunity on the internet!
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/images/OutSupport-Banner.png"
                        alt="Integrations"
                        className="w-full"
                    />
                </div>

                <div className="flex justify-center mt-8">
                    <button className="bg-[#B3FC6A] text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                        Lets Integrate your CRM Now!
                    </button>
                </div>
            </div>

            <div className="absolute -bottom-7 right-0 z-0 pointer-events-none">
                <img
                    src="/images/thumb1.png"
                    alt="Support Icon"
                    className="relative w-24"
                />
            </div>
        </section>
    );
}
