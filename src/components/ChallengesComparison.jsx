import React from "react";
import Cross from "./icons/cross";

export default function ChallengesComparison() {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#090F4E] mb-12">
                    Every LinkedIn Prospector faces these daily challenges
                </h2>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-center h-full">
                    <div className="bg-[#FFF7F8] rounded-2xl p-4 md:p-8 shadow-sm hover:border border-[#D24B68]">
                        <img
                            src="/images/withoutCRM.png"
                            alt="Without LeadCRM"
                            className="w-full rounded-lg mb-6"
                        />

                        <h3 className="text-[#D24B68] text-2xl font-semibold mb-4">
                            Without LeadCRM
                        </h3>

                        <ul className="space-y-5">
                            <li className="flex gap-1 md:gap-4 items-center">
                                <span className="text-[#D24B68] font-bold text-xl"><Cross /></span>
                                <div>
                                    <p className="font-semibold text-base md:text-xl">
                                        Manual Data Entry
                                        <span className="ml-2 text-xs md:text-sm bg-red-100 text-[#FF4C51] font-medium p-1 md:px-2 md:py-2 rounded-full">
                                            3+ Hours wasted daily
                                        </span>
                                    </p>
                                    <p className="text-[#4C4C4C] text-sm md:text-base mt-2">
                                        Copying LinkedIn contacts to CRM manually plus losing conversation history
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-1 md:gap-4 items-center">
                                <span className="text-[#D24B68] font-bold text-xl"><Cross /></span>
                                <div>
                                    <p className="font-semibold text-base md:text-xl">
                                        Incomplete Data
                                        <span className="ml-2 text-xs md:text-sm bg-red-100 text-[#FF4C51] font-medium p-1 md:px-2 md:py-2 rounded-full">
                                            60% Data Incomplete
                                        </span>
                                    </p>
                                    <p className="text-[#4C4C4C] text-sm md:text-base mt-2">
                                        LinkedIn profiles missing email and phones from 700M+ database
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-1 md:gap-4 items-center">
                                <span className="text-[#D24B68] font-bold text-xl"><Cross /></span>
                                <div>
                                    <p className="font-semibold text-base md:text-xl">
                                        No CRM Visibility
                                        <span className="ml-2 text-xs md:text-sm bg-red-100 text-[#FF4C51] font-medium p-1 md:px-2 md:py-2 rounded-full">
                                            Zero context available
                                        </span>
                                    </p>
                                    <p className="text-[#4C4C4C] text-sm md:text-base mt-2">
                                        Can’t see existing CRM contacts while browsing LinkedIn profiles
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-1 md:gap-4 items-center">
                                <span className="text-[#D24B68] font-bold text-xl"><Cross /></span>
                                <div>
                                    <p className="font-semibold text-base md:text-xl">
                                        Limited Productivity
                                        <span className="ml-2 text-xs md:text-sm bg-red-100 text-[#FF4C51] font-medium p-1 md:px-2 md:py-2 rounded-full">
                                            No smart assistance
                                        </span>
                                    </p>
                                    <p className="text-[#4C4C4C] text-sm md:text-base mt-2">
                                        Writing messages manually plus no AI assistant for reply, Invite or comments.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* VS Divider */}
                    <div className="hidden md:flex flex-col items-center justify-center">
                        <span className="w-px h-72 bg-gray-300 mb-2"></span>
                        <span className="text-[#0B1C55] font-semibold">VS</span>
                        <span className="w-px h-72 bg-gray-300 mt-2"></span>
                    </div>

                    {/* WITH LeadCRM */}
                    <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:border border-[#097737]">
                        <img
                            src="/images/withCRM.png"
                            alt="With LeadCRM"
                            className="w-full rounded-lg mb-6"
                        />

                        <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-[#097737] text-xl md:text-2xl font-semibold">
                                With LeadCRM
                            </h3>
                            <img src="/images/logo.png" alt="with LeadCRM" className="w-8 h-8" />
                            <span className="text-sm bg-[#E6FFF1] text-[#097737] px-3 py-2 rounded-full">
                                4+ Hours/day Saved
                            </span>
                        </div>

                        <ul className="space-y-4 text-sm text-gray-700">
                            <li className="flex gap-3 items-center">
                                <img src="/images/recycle.png" alt="Recycle" className="w-12 h-12" />
                                <div>
                                    <p className="font-semibold text-base md:text-xl">Complete Bi-Directional Sync</p>
                                    <p className="text-[#4C4C4C] text-sm md:text-base">
                                        Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-3 items-center">
                                <img src="/images/stat1.png" alt="image2" className="w-12 h-12" />
                                <div>
                                    <p className="font-semibold text-base md:text-xl">700M+ Contacts + Enrichment</p>
                                    <p className="text-[#4C4C4C] text-sm md:text-base">
                                        Get verified emails and phone numbers from a vast global database.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-3 items-center">
                                <img src="/images/stack.png" alt="image2" className="w-12 h-12" />
                                <div>
                                    <p className="font-semibold text-base md:text-xl">CRM Overlay on LinkedIn</p>
                                    <p className="text-[#4C4C4C] text-sm md:text-base">
                                        See full CRM insights directly on LinkedIn profiles without switching tabs.
                                    </p>
                                </div>
                            </li>

                            <li className="flex gap-3 items-center">
                                <img src="/images/human-brain.png" alt="Human Brain" className="w-12 h-12" />
                                <div>
                                    <p className="font-semibold text-base md:text-xl">
                                        AI Response + Templates + Bulk Exports
                                    </p>
                                    <p className="text-[#4C4C4C] text-sm md:text-base">
                                        Save time with AI-crafted replies, pre-built templates, and one-click data exports.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative mt-8 md:mt-14 flex items-center justify-center">
                    <button className="bg-[#B3FC6A] text-black px-2 md:px-8 py-4 rounded-xl font-semibold hover:scale-105 transition cursor-pointer">
                        Start Using LeadCRM Now
                    </button>
                    <img
                        src="/images/save-text.png"
                        alt="Save note"
                        className="w-32 md:w-60"
                    />
                </div>

            </div>
        </section>
    );
}
