import React from "react";
import { ArrowRight } from "lucide-react";

export default function JoinThousands() {
    return (
        <section className="relative bg-[#EEF3FB] py-16 px-4 md:px-12 z-30">
            <div className="relative w-full">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1C55] mb-8">
                    Join Thousands of Professionals Using LeadCRM
                </h2>

                <div className="relative rounded-2xl overflow-hidden px-4 py-10 bg-cover bg-center bg-no-repeat min-h-125 md:min-h-100"
                    style={{ backgroundImage: "url('/images/Join-background.png')" }}
                >
                    <div className="relative z-10 flex flex-col justify-center items-center h-full">
                        <h3 className="text-white text-center text-2xl md:text-4xl font-semibold leading-snug mb-6">
                            Your LinkedIn Powerhouse for Smarter Lead Management
                        </h3>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <img src="/images/pic1.png" alt="Salesforce" className="h-8 md:h-10" />
                            <img src="/images/pic2.png" alt="HubSpot" className="h-8 md:h-10" />
                            <img src="/images/pic3.png" alt="Pipedrive" className="h-8 md:h-10" />
                            <div className="h-7 w-[1.8px] bg-white/40 mx-2 hidden sm:block" />
                            <img src="/images/pic4.png" alt="Capterra" className="h-8 md:h-10" />
                            <img src="/images/pic5.png" alt="Top Rated" className="h-8 md:h-10" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button className="bg-[#B3FC6A] text-black px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition">
                        Get Started Today
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
