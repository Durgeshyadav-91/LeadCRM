import React, { useState } from "react";

const TABS = [
    {
        id: "enrichment",
        tabLabel: "CRM Data Enrichment",
        icon: "/images/database.png",
        badge: "It’s hard to find the accurate contact data for every prospects by",
        badgeText: "Incomplete Data",
        sections: [
            {
                title: "Here is how LeadCRM tackles that situation.",
                cta: "Try LeadCRM Data Enrichment",
                image: "/images/sales1.png",
            },
            {
                title: "If it does not work for you! try our",
                cta: "Advanced Waterfall Enrichment",
                image: "/images/sales2.png",
            },
        ],
    },
    {
        id: "sync",
        tabLabel: "CRM Data Sync",
        icon: "/images/recyle1.png",
        badge: "It’s hard to find the accurate contact data for every prospects by",
        badgeText: "Incomplete Data",
        sections: [
            {
                title: "Keep your CRM always in sync.",
                cta: "Try CRM Data Sync",
                image: "/images/sales1.png",
            },
            {
                title: "If it does not work for you! try our",
                cta: "Advanced Waterfall Enrichment",
                image: "/images/sales2.png",
            },
        ],
    },
    {
        id: "bulk",
        tabLabel: "Bulk Export & Enrichment",
        icon: "/images/direction.png",
        badge: "It’s hard to find the accurate contact data by",
        badgeText: "Incomplete Data",
        sections: [
            {
                title: "Keep your CRM always in sync.",
                cta: "Bulk Export & Enrichment",
                image: "/images/sales1.png",
            },
            {
                title: "If it does not work for you! try our",
                cta: "Advanced Waterfall Enrichment",
                image: "/images/sales2.png",
            },
        ],
    },
    {
        id: "ai",
        tabLabel: "AI Productivity",
        icon: "/images/human-brain.png",
        sections: [
            {
                title: "Keep your CRM always in sync.",
                cta: "Try CRM Data Sync",
                image: "/images/sales1.png",
            },
            {
                title: "If it does not work for you! try our",
                cta: "Advanced Waterfall Enrichment",
                image: "/images/sales2.png",
            },
        ],
    },
];

export default function LinkedInSalesSection() {
    const [activeTab, setActiveTab] = useState(TABS[0]);

    return (
        <section className="relative w-full bg-white py-12 md:py-20">
            <div className="hidden md:block absolute top-0 left-0 z-0 pointer-events-none">
                <img
                    src="/images/thumb2.png"
                    alt="Support Icon"
                    className="relative w-24"
                />
            </div>
            <div className="relative px-4 md:px-12">
                <div className="relative text-center mb-16">
                    <h2 className="mb-2 text-2xl md:text-4xl font-bold text-[#0B1C55]">
                        Complete LinkedIn Sales Solutions
                    </h2>
                    <p className="text-gray-500 mt-3">
                        Everything you need for professional LinkedIn prospecting
                    </p>
                </div>

                {/* TABS */}
                <div className="w-full flex justify-between gap-6 border-b mb-8 overflow-x-auto whitespace-nowrap md:overflow-visible scrollbar-hide">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab)}
                            className={`flex text-lg items-center gap-2 pb-3 px-2 font-semibold transition ${activeTab.id === tab.id
                                ? "text-[#0B1C55] border-b-4 border-[#0B1C55]"
                                : "text-[#4C4C4C]"
                                }`}
                        >
                            {<img src={tab.icon} alt="image" className="w-6 md:h-8 h-6 md:w-8" />} {tab.tabLabel}
                        </button>
                    ))}
                </div>

                {activeTab.badge && (
                    <p className="text-base text-start text-gray-600 mb-6">
                        {activeTab?.badge} {" "}
                        {activeTab.badgeText && (<span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-base">
                            {activeTab?.badgeText}
                        </span>)}
                    </p>
                )}

                {/* TAB CONTENT */}
                <div
                    className={`grid gap-6 grid-cols-1 lg:grid-cols-2`}
                >
                    {activeTab.sections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-[#F3F7FF] rounded-xl p-6 shadow-sm"
                        >
                            <h3 className="font-semibold text-xl mb-2">
                                {section.title}
                            </h3>

                            <a className="text-green-600 font-semibold cursor-pointer">
                                {section.cta} →
                            </a>

                            <div className="mt-6">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
