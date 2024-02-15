import Image from 'next/image'
import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const LegendFooter = () => {
    return (
        <div className='bg-[url("/footer-bg.svg")] bg-cover w-full md:h-[236px] h-[102px] flex-col md:p-8 p-4  text-[#FFF0C5] flex justify-between gap-y-2'>
            <div className='flex justify-center items-center md:gap-x-20 gap-x-10 self-start'>
                <div className='flex flex-col items-center md:gap-y-6 gap-y-2'>
                    <div className='text-[10.3px] md:text-[24px]'>社交媒体</div>
                    <div className='md:flex hidden justify-between items-center w-full '>
                        <FaTelegram size={25} />
                        <FaXTwitter size={25} />
                    </div>
                    <div className='flex md:hidden justify-between items-center w-full '>
                        <FaTelegram size={17} />
                        <FaXTwitter size={17} />
                    </div>
                </div>
                <div className='flex flex-col items-center md:gap-y-6 gap-y-2'>
                    <div className='text-[10.3px] md:text-[24px]'>关于</div>
                    <div className='text-[10.3px] md:text-[24px]'>Docs</div>
                </div>
            </div>
            <div className='flex justify-between items-center text-gray-500 w-full md:text-base text-xs'>
                <div>
                    @2024-2025版权所有
                </div>
                <div className='flex justify-center items-center gap-x-3'>
                    <div>服务条款</div>
                    <div>隐私政策</div>
                </div>
            </div>
        </div>
    )
}

export default LegendFooter