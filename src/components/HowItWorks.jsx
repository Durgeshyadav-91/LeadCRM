import { ArrowRight } from "lucide-react";
import React from "react";

const STEPS = [
    {
        step: "1",
        title: "Install the Extension",
        desc: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
        image: "/images/task3.png",
    },
    {
        step: "2",
        title: "Browse LinkedIn",
        desc: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
        image: "/images/task1.png",
    },
    {
        step: "3",
        title: "Get Enriched Data",
        desc: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
        image: "/images/task2.png",
    },
    {
        step: "4",
        title: "Sync to CRM Instantly",
        desc: "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights.",
        image: "/images/task4.png",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative">
            <div className="relative bg-[#F2F6FF] py-12 px-4 md:px-12">
                <div className="hidden md:block absolute -bottom-12 right-0 z-20 pointer-events-none">
                    <img
                        src="/images/Ball.png"
                        alt="Support Icon"
                        className="w-28"
                    />
                </div>

                <div className="relative bg-[#F2F6FF]">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C55]">
                            How it Works
                        </h2>
                        <p className="text-gray-500 mt-2">
                            From setup to success in <b>4 simple steps</b>
                        </p>
                    </div>

                    <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {STEPS.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col justify-between bg-white rounded-2xl shadow-sm"
                            >
                                <div className="font-Sriracha text-center text-[80px] font-bold text-[#1E9AD6] opacity-90">
                                    {item.step}
                                </div>
                                <h3 className="px-4 text-lg text-center font-semibold text-[#0B1C55]">
                                    {item.title}
                                </h3>
                                <p className="px-4 text-gray-500 text-center text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    width={1900}
                                    height={1800}
                                    className="w-full object-cover"
                                />
                                {index < 3 && (
                                    <div className="hidden xl:block absolute top-20 -right-6 w-6 h-2 bg-[#1E9AD6]" />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <button className="bg-[#B3FC6A] text-black px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition">
                            Try LeadCRM Now
                            <span className="text-xl"><ArrowRight /></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
