import Head from "next/head";
import categories from "../../../../data/categories"
import Contact from "@/components/contact";
import { Metadata } from "next";
import Link from "next/link";
import { Send } from "lucide-react";


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
                <Link href={project?.link || "/"} target="_blank"><h1 className="mt-2 md:text-m text-white bg-[#ffffff14] cursor-pointer w-fit m-auto text-xs   "> {project?.summary} </h1></Link>
            </div>
            <p className="flex items-center mt-[3%] bg-[#26513a] hover:bg-[#26513a] text-white border-[#459c6e] border-[1px] rounded-xl px-6 py-1 shadow-xl">
  <Send className="mr-2 text-white" />
  <Link href={project?.link || "/"} target="_blank" className="text-white">Join {project?.name} with Telegram!</Link>
</p>


        </div>
        <div className="content flex flex-wrap gap-4 md:gap-10 mt-[5%] md:mt-[5%] justify-center text-white" dangerouslySetInnerHTML={{ __html: project?.content || "" }}>
        </div>
        <div className="w-full  text-white text-center text-sm flex flex-col items-center md:mb-0 mb-5 mt-[8%]">
        <p className="flex items-center mt-[3%] bg-[#26513a] hover:bg-[#26513a] text-white border-[#459c6e] border-[1px] rounded-xl px-6 py-1 shadow-xl">
  <Send className="mr-2 text-white" />
  <Link href={project?.link || "/"} target="_blank" className="text-white">Join {project?.name} with Telegram!</Link>
</p>
</div>

        <Contact />
    </div>
}
