import React from "react";
import Facebook from "./icons/facebook";
import Twitter from "./icons/twitter";
import Linkdin from "./icons/linkdin";
import Insta from "./icons/insta";
import Help from "./icons/help";
import Phone from "./icons/phone";
import Mail from "./icons/mail";

export default function Footer() {
    return (
        <footer className="bg-[#E8FAFF] py-6">
            <div className="px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10">
                <div className="md:col-span-3">
                    <div className="flex items-center gap-2">
                        <img src="/images/LeadCRM-Logo.png" alt="LeadCRM" className="object-contain h-20" />
                    </div>
                    <p className="mt-4 text-base text-[#000000] max-w-xs">
                        LeadCRM is LinkedIn integration tool for your CRM.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <div className="flex w-10 h-10 rounded-full bg-[#00AEEF] items-center justify-center text-white hover:scale-110 transition">
                            <Facebook />
                        </div>
                        <div className="flex w-10 h-10 rounded-full bg-[#00AEEF] items-center justify-center text-white hover:scale-110 transition">
                            <Twitter />
                        </div>
                        <div className="flex w-10 h-10 rounded-full bg-[#00AEEF] items-center justify-center text-white hover:scale-110 transition">
                            <Linkdin />
                        </div>
                        <div className="flex w-10 h-10 rounded-full bg-[#00AEEF] items-center justify-center text-white hover:scale-110 transition">
                            <Insta />
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h4 className="font-bold text-xl text-[#090F4E] mb-4">Integrations</h4>
                    <ul className="space-y-4 text-sm text-[#000000]">
                        <li>HubSpot</li>
                        <li>Salesforce</li>
                        <li>Pipedrive</li>
                        <li className="flex items-center gap-2">
                            Close.io
                            <span className="bg-[#BDFFC6] text-[#002A06] font-medium text-[10px] px-2 py-1 rounded-full">
                                Coming Soon
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            Insightly
                            <span className="bg-[#BDFFC6] text-[#002A06] font-medium text-[10px] px-2 py-1 rounded-full">
                                Coming Soon
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h4 className="font-bold text-xl text-[#090F4E] mb-4">Alternative</h4>
                    <ul className="space-y-3 text-sm text-[#000000]">
                        <li>Surfe VS LeadCRM</li>
                        <li>Linkmatch Alternative</li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h4 className="font-bold text-xl text-[#090F4E] mb-4">Legal</h4>
                    <ul className="space-y-3 text-sm text-[#000000]">
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h4 className="font-bold text-xl text-[#090F4E] mb-4">Contact Us</h4>
                    <ul className="space-y-4 text-sm text-[#000000]">
                        <li className="flex items-center gap-2">
                            <Mail className="text-[#00AEEF]" />
                            support@leadcrm.io
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="text-[#00AEEF]" />
                            +1 231-538-7466
                        </li>
                        <li className="flex items-center gap-2">
                            <Help className="text-[#00AEEF]" />
                            Help Center
                        </li>
                    </ul>

                    <div className="mt-6 w-full flex justify-start md:justify-end">
                        <div className="bg-black text-white inline-flex items-center gap-2 px-4 py-2 rounded-xl">
                            <span className="font-normal text-sm leading-tight">
                                Available in <br />
                                <span className="font-semibold">Chrome</span>
                            </span>

                            <div className="p-2 bg-white rounded-full">
                                <img
                                    src="/images/full-chrome.png"
                                    alt="Chrome"
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center text-xs text-[#6B7280] pt-8 px-6">
                <p className="">
                    Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
                    LinkedIn™ logos and trademarks displayed on this tool are property of
                    LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your
                    own risk.
                </p>
                <p className="text-sm border border-gray-500/40 my-2"></p>
                <p>Copyright © 2025 LeadCRM. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
