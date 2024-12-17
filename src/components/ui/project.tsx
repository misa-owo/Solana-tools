import { SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"

interface Props {
    name: string,
    logo:string,
    paid: boolean, 
    category: string,
    description: string,
    link: string,
    popular?: boolean
}

const Project: React.FC<Props> = ({name, paid, description, logo}) => {
  return (
    <div  className="relative w-[32%] bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-md p-6 shadow-xl">
      <p style={{ borderColor: paid ? "#8852e0" : "#0ea371", backgroundColor: paid ? "#8852e0" : "#0ea371" }} className="absolute right-5 top-5 font-bold uppercase text-white text-xs p-1 px-3 rounded-xl text-white border-[1px] border-solid">{paid ? "Paid" : "Free"}</p>
      <div className="flex items-center ">
        <Image src={logo} className="rounded-[50%] mr-3" width={50} height={50} alt={name} />
        <h3 className="text-white font-bold text-2xl">{name}</h3>
      </div>
      <p className="mt-4 text-sm text-[#abadaf]">{description}</p>
      <div className="flex justify-end mt-4">
        <SquareArrowOutUpRight color="#abadaf" />
      </div>
    </div>)
}
export default Project