import React from "react";
import { Star } from "lucide-react";
import Work1 from "./icons/Work1";
import Work2 from "./icons/Work2";
import Work3 from "./icons/Work3";

export default function Banner() {
    return (
        <section className="bg-white py-12 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('/images/banner-bg.png')" }}>
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="inline-flex items-center gap-2 border border-[#9ACCFF] text-black px-5 py-3 rounded-full text-sm font-medium mb-6">
                    🚀 Thousands of Professional using LeadCRM
                </div>

                <h1 className="font-exo text-2xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    LinkedIn CRM Integration <br />
                    Capture, Sync and Enrich in{" "}
                    <span className="relative inline-block">
                        <span className="relative z-10 text-[#2D96BC]">Both Ways</span>
                        <img
                            src="/images/text-below.png"
                            alt="Text underline"
                            className="absolute left-2 right-0 rotate-x-180 bottom-[-1] w-full h-3 md:h-4 max-w-full pointer-events-none"
                        />
                    </span>
                </h1>

                <p className="text-lg text-[#363636] font-semibold max-w-4xl mx-auto mb-8">
                    Automatically sync LinkedIn prospects to your CRM and overlay
                    existing CRM contacts on LinkedIn profiles. Complete
                    bi-directional integration with HubSpot, Salesforce, and
                    Pipedrive.
                </p>

                <div className="inline-flex items-center gap-6 bg-gradient-to-r from-blue-400 to-purple-400 px-6 py-3 rounded-2xl mb-8">
                    <span className="text-white font-medium">Works with</span>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Work1 className="w-6" />
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Work2 className="w-6" />
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Work3 className="w-6" />
                    </div>
                </div>

                <div className="flex justify-center gap-10 mb-8">
                    <div className="flex items-center gap-2">
                        <img src="/images/chrome.png" alt="Chrome" className="w-10" />
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">5/5</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/images/fly.png" alt="PH" className="w-10" />
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">5/5</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
                    <button className="w-full md:w-auto bg-[#373737] text-white px-4 py-2 rounded-xl flex items-center justify-between gap-6 hover:bg-gray-900">
                        <div className="flex flex-col items-start">
                            <p className="text-sm">Available in</p>
                            <p className="font-medium">Chrome Web Store</p>
                        </div>
                        <div className="bg-white p-2 rounded-full">
                            <img src="/images/full-chrome.png" alt="Chrome" className="w-6" />
                        </div>
                    </button>
                    <button className="w-full md:w-auto bg-[#B3FC6A] text-black px-6 py-4 rounded-xl font-medium text-center">
                        Get a Free Trial Now!
                    </button>
                </div>
            </div>
        </section>
    );
}
