import categories from "../../../../data/categories"
import Contact from "@/components/contact";


interface Props {
    params: Promise<{ slug: string }>
}

export default async function Category({ params }: Props) {
    const { slug } = await params;
    const category = categories.find(c => c.projects.find(project => project.slug === slug));
    const project = category?.projects.find(project => project.slug === slug);
    return <div className='px-[10%]'>
        <div className="w-full  text-white text-center text-sm flex flex-col items-center md:mb-0 mb-10">
            <p className="mt-[10%] bg-[#ffffff14] w-fit m-auto px-6 text-xs font-semibold  py-1  rounded-xl  border-[2px] border-[#ffffff14] shadow-xl">Support Us and Help Us Grow! Your Backing Means Everything! 🤩</p>
            <h1 className="mt-4 md:mt-10 text-3xl md:text-6xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] w-[50%]"> {project?.name}</h1>
            <div className="flex ml-4">
                <h1 className="mt-2 md:text-xl text-white  bg-[#ffffff14] cursor-pointer w-fit m-auto px-2 text-xs font-semibold  py-1 rounded-xl border-2  mr-2 "> {category?.title}</h1>
                <h1 className="mt-2 md:text-xl text-white bg-[#ffffff14] cursor-pointer w-fit m-auto px-2 text-xs font-semibold  py-1 rounded-xl border-2  "> {project?.paid ? "FREE" : "PAID"} </h1>
            </div>
        </div>
        <div className="content flex flex-wrap gap-4 md:gap-10 mt-[5%] md:mt-[10%] text-white" dangerouslySetInnerHTML={{__html: project?.content || ""}}>
            
        </div>
        <Contact/>
    </div>
}
