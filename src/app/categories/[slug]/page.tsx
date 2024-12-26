import categories from "../../../../data/categories"
import { IProject } from "../../../../data/categories/exchange";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import Contact from "@/components/contact";

interface Props {
    params: Promise<{ slug: string }>
}

export default async function Category({ params }: Props) {
    const { slug } = await params;
    const category = categories.find(c => c.slug === slug)
    return <div className='px-[10%]'>
        <div className="relative">
            <div className="min-w-screen min-h-[30vh] md:min-h-[50vh] spiral block relative -top-[20vh]">
            </div>
            <div className="w-full  text-white text-center text-sm flex flex-col items-center absolute top-0">
                <p className="mt-[10%] bg-[#ffffff14] w-fit m-auto px-2 md:px-6 text-xs font-semibold  py-1  rounded-xl  border-[2px] border-[#ffffff14] shadow-xl">Support Us and Help Us Grow! Your Backing Means Everything! 🤩</p>
                <h1 className="mt-5 md:mt-10 text-2xl md:text-6xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] md:w-[50%]"> {category?.title}</h1>
                <h2 className="text-[#abadaf] mt-5 text-sm md:text-xl md:w-7/12">{category?.description}</h2>
            </div>
        </div>
        <div className="flex flex-wrap gap-5 md:gap-10 mt-[25%] md:mt-[10%]">
            {category?.projects.map(project => <Project {...project} key={project.name} category={category.title} />)}
        </div>
        <Contact/>
    </div>
}

interface ProjectProps extends IProject {
    category: string
}

const Project: React.FC<ProjectProps> = ({ name, paid, logo, description, category }) => {
    return (
        <div className="relative w-full md:w-[31%] md:mb-5 bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-md p-6 shadow-xl">
            <p style={{ borderColor: paid ? "#8852e0" : "#0ea371", backgroundColor: paid ? "#8852e0" : "#0ea371" }} className="absolute right-5 top-5 font-bold uppercase text-white text-xs p-1 px-3 rounded-xl text-white border-[1px] border-solid">{paid ? "Paid" : "Free"}</p>
            <div className="flex items-center ">
                <Image src={logo} className="rounded-[50%] mr-3" width={50} height={50} alt={name} />
                <div className="ml-2">
                    <h3 className="text-white font-bold text-xl">{name}</h3>
                    <h3 className="text-white text-xs mt-1 uppercase">{category}</h3>
                </div>
            </div>
            <p className="mt-4 text-xs md:text-sm text-[#abadaf]">{description}</p>
            <div className="flex justify-end mt-4">
                <SquareArrowOutUpRight color="#abadaf" />
            </div>
        </div>
    )
}