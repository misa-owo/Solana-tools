import Head from "next/head";
import categories from "../../../../data/categories"
import Contact from "@/components/contact";
import { Metadata } from "next";
import Link from "next/link";


interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    // read route params
    const { slug } = (await params)
    const category = categories.find(c => c.projects.find(project => project.slug === slug));
    const project = category?.projects.find(project => project.slug === slug);
 
    return {
        title: project?.metaTitle,
        description: project?.metaDescription,
    }
}


export default async function Category({ params }: Props) {
    const { slug } = await params;
    const category = categories.find(c => c.projects.find(project => project.slug === slug));
    const project = category?.projects.find(project => project.slug === slug);
    return <div className='px-[10%]'>
        <Head>
            <title>{project?.metaTitle}</title>
            <meta name="description" content={project?.metaDescription} />
        </Head>
        <div className="w-full  text-white text-center text-sm flex flex-col items-center md:mb-0 mb-5 mt-[8%]">
          <h1 className="mt-4 md:mt-10 text-3xl md:text-6xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] w-[50%]"> {project?.name}</h1>
            <div className="flex ml-4">
                <h1 className="mt-2 md:text-xl text-white  bg-[#ffffff14] cursor-pointer w-fit m-auto px-2 text-xs font-semibold  py-1 rounded-xl border-2  mr-2 "> {category?.title}</h1>
                <h1 className="mt-2 md:text-xl text-white bg-[#ffffff14] cursor-pointer w-fit m-auto px-2 text-xs font-semibold  py-1 rounded-xl border-2  "> {project?.paid ? "FREE" : "PAID"} </h1>
            </div>
            <p className="mt-[3%] bg-[#ffffff14] w-fit m-auto px-6 text-xs font-semibold  py-1  rounded-xl  border-[2px] border-[#ffffff14] shadow-xl"><Link href={project?.link || "/"}>✅ Tap here to register for {project?.name}</Link></p>

        </div>
        <div className="content flex flex-wrap gap-4 md:gap-10 mt-[5%] md:mt-[5%] justify-center text-white" dangerouslySetInnerHTML={{ __html: project?.content || "" }}>
        </div>
        <Contact />
    </div>
}
