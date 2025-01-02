import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

const GuideSection = () => {
    return (
        <>
            <div className="mt-[5%] block  relative text-white w-full   bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-xl p-6 md:p-12 shadow-xl">
                <div>
                    <p className="border-[1px] border-solid text-xs w-fit px-4 py-1 text-[#d3bef4] border-[#8952e0] rounded-xl">Guides</p>
                    <p className="text-xl md:text-4xl font-bold mt-4">Everything you need to trade on Solana</p>
                    <p className="text-[#abadaf] text-xs md:text-sm mt-2 "> Step-by-step guide for beginners</p>
                </div>
                <Button className="mt-3 bg-[#8952e0] mt-6 text-xs md:text-md">Explore our guides <span><ArrowRight /></span></Button>
            </div>
            <div className="flex mt-10 pb-[5%] gap-5 flex-wrap justify-center">
                <a href="" className="relative text-white w-full md:w-[32%] flex items-center bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-md p-6 shadow-xl">
                    <Image src="/tools/bullx.jpg" className="rounded-[50%]" alt="" width={50} height={50} />
                    <p className="ml-4 font-bold">How to get started with Birdeye?</p>
                </a>
                <a href="" className="relative text-white w-full md:w-[32%] flex items-center bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-md p-6 shadow-xl">
                    <Image src="/tools/bullx.jpg" className="rounded-[50%]" alt="" width={50} height={50} />
                    <p className="ml-4 font-bold">How to get started with Birdeye?</p>
                </a>
                <a href="" className="relative text-white w-full md:w-[32%] flex items-center bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-md p-6 shadow-xl">
                    <Image src="/tools/bullx.jpg" className="rounded-[50%]" alt="" width={50} height={50} />
                    <p className="ml-4 font-bold">How to get started with Birdeye?</p>
                </a>
                <a href="" className="relative text-white w-full md:w-[32%] flex items-center bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-md p-6 shadow-xl">
                    <Image src="/tools/bullx.jpg" className="rounded-[50%]" alt="" width={50} height={50} />
                    <p className="ml-4 font-bold">How to get started with Birdeye?</p>
                </a>
            </div>
        </>

    )
}



export default GuideSection;