import React, { useState } from "react";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full max-w-full overflow-x-clip border-b border-gray-200 bg-white px-4 md:px-12 md:overflow-x-visible">
            <div className="w-full max-w-full">
                <div className="flex h-20 min-w-0 items-center justify-between">
                    <div className="flex min-w-0 items-center">
                        <img
                            src="/images/LeadCRM-Logo.png"
                            alt="LeadCRM Logo"
                            className="h-10 w-auto max-w-full object-contain md:h-12"
                        />
                    </div>

                    <div className="hidden md:flex items-center gap-10 font-semibold text-[#222222]">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-[#2D96BC]">
                            <span>Product</span>
                            <ChevronDown absoluteStrokeWidth={true} size={16} />
                        </div>
                        <a href="#" className="hover:text-[#2D96BC] text-[#222222]">
                            Pricing
                        </a>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-[#2D96BC] text-[#222222]">
                            <span>Resources</span>
                            <ChevronDown absoluteStrokeWidth={true} size={16} />
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer hover:text-[#2D96BC] text-[#222222]">
                            <span>Company</span>
                            <ChevronDown absoluteStrokeWidth={true} size={16} />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="bg-[#2D96BC] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-sky-600 transition">
                            Get Your Free Account
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#2D96BC] border border-[#2D96BC] rounded-lg transition">
                            <LogIn absoluteStrokeWidth={true} size={16} />
                            Login
                        </button>
                    </div>

                    <button
                        className="shrink-0 text-gray-700 md:hidden"
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="w-full max-w-full border-t py-6 md:hidden">
                        <div className="flex flex-col gap-5 font-medium text-gray-700">
                            <a href="#">Product</a>
                            <a href="#pricing">Pricing</a>
                            <a href="#">Resources</a>
                            <a href="#">Company</a>

                            <div className="flex flex-col gap-3 pt-4 border-t">
                                <button className="w-full rounded-lg bg-sky-500 py-2.5 font-semibold text-white">
                                    Get Your Free Account
                                </button>
                                <button className="w-full rounded-lg border border-sky-500 py-2.5 font-semibold text-sky-500">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
