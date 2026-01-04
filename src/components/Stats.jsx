import React from 'react'

export default function Stats() {
    return (
        <div className="relative bg-white md:py-12">
            <div className="flex flex-wrap px-4 md:justify-around gap-4 md:gap-8 text-lg text-[#6C6C6C]">
                <div className="flex items-center gap-2 text-lg">
                    <img src="/images/stat1.png" alt="stat 1" className='h-12' />
                    <span>Access to <span className='font-semibold text-[#161616]'>700M+ contacts</span></span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                    <img src="/images/stat2.png" alt="stat 2" className='h-12' />
                    <span><span className='font-semibold text-[#161616]'>One click push </span> to CRM</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                    <img src="/images/stat3.png" alt="stat 3" className='h-12' />
                    <span><span className='font-semibold text-[#161616]'>Custom Field </span> Mapping</span>
                </div>
                <div className="flex items-center gap-2 text-lg">
                    <img src="/images/stat4.png" alt="stat 4" className='h-12' />
                    <span><span className='font-semibold text-[#161616]'>Advanced </span> Waterfall Enrichment</span>
                </div>
            </div>
        </div>
    )
}