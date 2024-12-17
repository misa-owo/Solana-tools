import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const page = () => {
    return (
        <div className='px-[10%]'>
            <div className="relative">
                <div className="min-w-screen min-h-[50vh] spiral block relative -top-[20vh]">
                </div>
                <div className="w-full  text-white text-center text-sm flex flex-col items-center absolute top-0">
                    <p className="mt-[10%] bg-[#ffffff14] w-fit m-auto px-6 text-xs font-semibold  py-1  rounded-xl  border-[2px] border-[#ffffff14] shadow-xl">Support Us and Help Us Grow! Your Backing Means Everything! 🤩</p>
                    <h1 className="mt-10 text-6xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] w-[50%]"> Solana Blog
                    </h1>
                    <h2 className="text-[#abadaf] mt-5 text-xl w-5/12">Exploring the solana ecosystem by uncovering dapps, powerful tools, emerging memecoins, and comprehensive learning resources</h2>
                </div>
            </div>
            <div className="rounded-xl overflow-hidden flex items-center  border-[1px] border-solid border-[#ffffff14] m-auto w-8/12">
                <Input className="border-none py-2 text-[#abadaf] focus-visible:ring-0" >
                </Input>
                <Button className="w-3/12 rounded-xl py-5">Search</Button>
            </div>
        </div>
    )
}

export default page