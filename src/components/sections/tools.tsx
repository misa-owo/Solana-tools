import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
const ToolsSection = () => {
    return (
        <>
            <div className="w-full text-white text-sm mt-[10%] md:mt-[5%] text-white">
                <p className="border-[1px] border-solid text-xs w-fit px-4 py-1 text-[#d3bef4] border-[#8952e0] rounded-xl">Tools</p>
                <p className="mt-2 text-xl md:text-3xl font-bold mt-4">Find Solana tools for your needs</p>
                <p className="mt-1 text-xl md:text-3xl font-bold">Popular tools categories</p>
                <Button className="mt-3 bg-[#8952e0] text-sm md:text-md">Explore our tools <span><ArrowRight /></span></Button>
            </div>
            <div className="flex mt-10 pb-[5%] gap-2 flex-wrap">
                <a href="" className="relative text-white w-full md:w-[24%] flex items-center bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-md p-6 shadow-xl">
                    <Image src="/tools/bullx.jpg" className="rounded-[50%]" alt="" width={50} height={50} />
                    <p className="ml-4 font-bold">How to get started with Birdeye?</p>
                </a>
                <a href="" className="relative text-white w-full md:w-[24%] flex items-center bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-md p-6 shadow-xl">
                    <Image src="/tools/bullx.jpg" className="rounded-[50%]" alt="" width={50} height={50} />
                    <p className="ml-4 font-bold">How to get started with Birdeye?</p>
                </a>
                <a href="" className="relative text-white w-full md:w-[24%] flex items-center bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-md p-6 shadow-xl">
                    <Image src="/tools/bullx.jpg" className="rounded-[50%]" alt="" width={50} height={50} />
                    <p className="ml-4 font-bold">How to get started with Birdeye?</p>
                </a>
                <a href="" className="relative text-white w-full md:w-[24%] flex items-center bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-md p-6 shadow-xl">
                    <Image src="/tools/bullx.jpg" className="rounded-[50%]" alt="" width={50} height={50} />
                    <p className="ml-4 font-bold">How to get started with Birdeye?</p>
                </a>

            </div>
        </>

    )
}

export default ToolsSection