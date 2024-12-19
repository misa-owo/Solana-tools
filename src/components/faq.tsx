"use client"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

interface QuestionProps {
    title: string,
    paragraph: string
}

const FAQ: React.FC<QuestionProps> = ({ title, paragraph }) => {
    const [open, setOpen] = useState(false)
    return (<div key={title} className=" shadow-xl shadow-[#8952e0]/10 mt-5 block relative text-left text-white w-full  bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-xl p-8 shadow-xl">
        <div className="flex justify-between">
            <p className="text-2xl font-bold">{title}</p>
            {!open ? <ChevronDown onClick={() => setOpen(!open)} className="cursor-pointer" /> :
                <ChevronUp onClick={() => setOpen(!open)} className="cursor-pointer" />}
        </div>
        <p className={`text-[#abadaf] text-xl mt-3 w-8/12 transition:all h-0 overflow-hidden  ${open && "h-full"}`}>{paragraph} </p>
    </div>)
}
export default FAQ;