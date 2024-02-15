'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';

const LegendHeader = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='w-full'>

            <div className='h-[70px]  bg-[url("/headerbg.svg")] px-20 md:flex hidden justify-between items-center'>
                <div className='flex justify-center items-center gap-x-2'>
                    <Image src='/logo.svg' width={60} height={60} alt='logo' />
                    {/* <Image src='/logotext.svg' width={89} height={24} alt='logo' /> */}
                    <div className=' text-2xl bg-gradient-to-b from-[#FFD770] via-[#FFBD7A] to-[#AF4A00] bg-clip-text text-transparent'>全链传奇</div>
                </div>
                <div className='flex justify-center items-center'>
                    {/* <div className='bg-[url("/nav-btn-bg.svg)] '>Token</div> */}

                    <Image src='/token.svg' width={89} height={24} alt='logo' />
                    <Image src='/download.svg' width={89} height={24} alt='logo' />
                    <Image src='/info.svg' width={89} height={24} alt='logo' />
                    <Image src='/community.svg' width={89} height={24} alt='logo' />
                    <Image src='/gonghui.svg' width={89} height={24} alt='logo' />
                </div>
            </div>
            <div className='h-[37px]  bg-[url("/headerbg.svg")] px-10 flex md:hidden justify-between items-center text-[12px]'>
                {!show ? (
                    <Image src='/menu.svg' width={24} height={24} alt='logo' onClick={() => {
                        setShow(!show);
                    }} />
                ) : (
                    <Image src='/menu2.svg' width={24} height={24} alt='logo' onClick={() => {
                        setShow(!show);
                    }} />
                )}

                {/* <Image src='/logotext.svg' width={89} height={24} alt='logo' /> */}
                <div className='flex justify-center items-center'>
                    <Image src='/logo.svg' width={30} height={30} alt='logo' />
                    <div className=' text-[12px] bg-gradient-to-b from-[#FFD770] via-[#FFBD7A] to-[#AF4A00] bg-clip-text text-transparent'>Blast传奇</div>
                </div>
                <div className='bg-gradient-to-b from-[#FFD600] to-[#FFFFFF] bg-clip-text text-transparent'>
                    语言选择
                </div>
            </div>
            {/* <Drawer direction='top' open={show} >
                <DrawerTrigger asChild>
                    <div>
                    </div>
                </DrawerTrigger>
                <DrawerContent>
                    <div>Menu1</div>
                    <div>Menu2</div>
                    <div>Menu3</div>
                </DrawerContent>
            </Drawer> */}
        </div >
    )
}

export default LegendHeader