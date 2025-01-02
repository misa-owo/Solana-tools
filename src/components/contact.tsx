import React from 'react'
import { Button } from './ui/button'

const Contact = () => {
    return (
        <div className="mt-[15%] block flex relative text-white w-full flex flex-col md:flex-row md:items-center  justify-between bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-xl p-6 md:p-12 shadow-xl">
            <div>
                <p className="text-xl md:text-4xl font-bold">Stay in touch</p>
                <p className="text-[#abadaf] text-xs md:text-sm md:mt-2 "> Get  updates regarding tools and platforms</p>
            </div>
            <Button className="mt-4 md:mt-0 rounded-xl text-white shadow-xl md:ml-20 bg-[#8952e0] w-full md:w-fit">Subscribe</Button>
        </div>
    )
}

export default Contact