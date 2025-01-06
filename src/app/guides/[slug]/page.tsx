import categories from "../../../../data/categories"
import Image from "next/image";
import FAQ from "@/components/faq";


interface Props {
    params: Promise<{ slug: string }>
}

export default async function Category({ params }: Props) {
    const { slug } = await params;
    const category = categories.find(c => c.projects.find(project => project.slug === slug));
    const project = category?.projects.find(project => project.slug === slug);
    const guide = project?.guide  
    const faqs = project?.faqs
    if (!guide) {
        return null
    }
    return <div className='px-[10%]'>
        <div className="w-full  text-white text-center text-sm flex flex-col items-center relative">
            <p className="mt-[10%] bg-[#ffffff14] w-fit m-auto px-6 text-xs font-semibold  py-1  rounded-xl  border-[2px] border-[#ffffff14] shadow-xl">Support Us and Help Us Grow! Your Backing Means Everything! 🤩</p>
            <Image src={project.logo} width={100} height={100} alt={project.name} className=" mt-10 rounded-[50%]" />
            <h1 className="mt-4 md:mt-10 text-2xl w-full md:text-6xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] w-9/12 md:w-[50%]"> {guide.title}</h1>
            <p className="text-[#abadaf]  text-sm md:text-xl mt-2 md:mt-10  w-full md:w-8/12">{guide.description} </p>
        </div>
        <div className="w-full  text-white text-center text-sm flex flex-col items-center my-[5%]">
            <h1 className="mt-5 md:mt-10 text-2xl md:text-6xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] w-full md:w-[50%]"> {guide.question.title}</h1>
            <p className="text-[#abadaf] text-sm md:text-xl mt-2 md:mt-10 w-full md:w-8/12">{guide.question.paragraph} </p>
        </div>
        {guide.steps.map((step, index) =>
            <div key={step.details.title} className="flex justify-between mb-[5%] items-center flex-wrap" style={{ flexDirection: index % 2 === 0 ? "row-reverse" : "row" }}>
                <div className="w-full md:w-6/12 mb-10 md:mb-0">
                    <h1 className="mt-10 mb-2 text-md md:text-3xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] "> Step {index + 1}: {step.details.title}</h1>
                    {step.details.paragraph.map(paragraph =>
                        <p className="text-[#abadaf] text-xs md:text-xl mt-2" key={paragraph}>
                            {paragraph}
                        </p>
                    )}
                </div>
                <div className="w-full md:w-5/12">
                    <div className="shadow-xl shadow-[#8952e0]/10 flex flex-col justify-center items-center w-full ">
                        <Image
                            alt="Mountains"
                            layout="responsive"
                            width={1920}
                            height={1080}
                            src={step.image}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                </div>
            </div>)
        }
        <div className="w-full  text-white text-center text-sm flex flex-col items-center my-[5%]">
            <h1 className="mt-10 text-2xl md:text-4xl font-bold w-[50%]"> ❓</h1>
            <h1 className="mt-5 md:mb-10 text-2xl md:text-6xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] w-[50%]">{project.name} FAQ</h1>
            {faqs?.map(faq => <FAQ {...faq} key={guide.title}/>)}
        </div>
    </div >
}

