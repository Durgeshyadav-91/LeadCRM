import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import Star from "./icons/Star";

const data = {
    Title: "What people are saying about LeadCRM",
    Testimonials: [
        {
            message: "“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“",
            name: "David Fincher",
            source: "On Capterra",
            rating: 5,
            avatar: "/images/user1.png"
        },
        {
            message: "“My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!”",
            name: "Lillian Williams",
            source: "On Capterra",
            rating: 5,
            avatar: "/images/user2.png"
        },
        {
            message: "“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“",
            name: "Michael",
            source: "On Capterra",
            rating: 5,
            avatar: "/images/user3.png"
        },
        {
            message: "“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“",
            name: "David",
            source: "On Capterra",
            rating: 5,
            avatar: "/images/user1.png"
        }
    ]
}

export default function SwiperSection() {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <section className="py-20 bg-white z-10">
            <div className="relative px-4 md:px-12">
                <div className="flex items-center justify-between my-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1C55]">
                        {data?.Title}
                    </h2>

                    <div className="flex gap-3">
                        <button disabled={isBeginning}
                            className={`swiper-button-prev-custom w-10 h-10 rounded-full border flex items-center justify-center
                                ${isBeginning ? "border-gray-300 text-gray-300" : "bg-[#090F4E] text-white"}`}
                        >
                            ‹
                        </button>
                        <button disabled={isEnd}
                            className={`swiper-button-next-custom w-10 h-10 rounded-full border flex items-center justify-center
                                ${isEnd ? "border-gray-300 text-gray-300" : "bg-[#090F4E] text-white"}`}
                        >
                            ›
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    spaceBetween={24}
                    slidesPerView={3}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onInit={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {data?.Testimonials?.map((item, i) => (
                        <SwiperSlide key={i} className="h-auto">
                            <div className="h-100 bg-[#F9F0F8] rounded-2xl p-6 flex flex-col justify-between">
                                <div>
                                    <p className="text-base font-semibold text-gray-700 leading-relaxed mb-4">
                                        {item.message}
                                    </p>
                                    <div className="flex items-center gap-1 mt-3">
                                        <div className="bg-white p-2 rounded-xl"><img src="/images/fly.png" alt="" className="w-6 h-6" /></div>
                                        {Array.from({ length: 5 }).map((_, idx) => (
                                            <span key={idx} className="text-[#0B1C55]"><Star /></span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t flex items-center gap-3">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        width={36}
                                        height={36}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold text-[#0B1C55]">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {item.source}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
