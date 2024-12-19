"use client"
import React, { useMemo } from 'react'
import categories, { ICategory } from '../../../data/categories'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Contact from '@/components/contact'

const Categories = () => {
    const popular = useMemo(() => {
        return categories.filter(category => !category.popular)
    }, [])
    return (
        <div className='px-[10%]'>
            <div className="relative">
                <div className="min-w-screen min-h-[30vh] md:min-h-[50vh] spiral block relative -top-[20vh]">
                </div>
                <div className="w-full  text-white text-center text-sm flex flex-col items-center absolute top-0">
                    <p className="mt-[10%] bg-[#ffffff14] w-fit m-auto px-2 md:px-6 text-xs font-semibold  py-1  rounded-xl  border-[2px] border-[#ffffff14] shadow-xl">Support Us and Help Us Grow! Your Backing Means Everything! 🤩</p>
                    <h1 className="mt-10 text-2xl md:text-6xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] md:w-[50%]"> Solana Tools Categories
                    </h1>
                    <h2 className="text-[#abadaf] mt-2 md:mt-5 text-sm md:text-xl md:w-5/12">Explore Solana tools in the different categories below and find alternatives to your avorite tools. Discover new tools to enhance your Solana trading experience</h2>
                </div>
            </div>
            <Category categories={popular} title="Popular Categories" />
            <Category title="All Categories" categories={categories} />
            <Contact/>
        </div>
    )
}

export default Categories

interface Props {
    categories: ICategory[],
    title: string
}
const Category: React.FC<Props> = ({ categories, title }) => {
    return (
        <div className='mt-[5%] md:mt-[10%]'>
            <p className='text-white text-xl md:text-3xl font-bold'>{title}</p>
            <div className='flex mt-10 gap-4 justify-center flex-wrap'>
                {categories.map(category =>
                    <a key={category.slug} href={`/categories/${category.slug}`} className="relative text-white w-full md:w-[23%] shadow-[#8952e0]/10  flex flex-col items-center bg-[linear-gradient(to_bottom_left,_rgba(255,_255,_255,_0.04),_transparent)] border-[#00000014] rounded-md p-6  shadow-xl">
                        <div className='text-2xl'>{category.icon}</div>
                        <p className="mt-2 text-xl font-bold">{category.title}</p>
                        <div className='mt-4 flex  w-fit items-center'>
                            {category.projects.slice(0, 1).map((category) =>
                                <Image
                                    key={category.name}
                                    src={category.logo}
                                    className="rounded-[50%] relative -right-[10%]"
                                    alt=""
                                    width={50}
                                    height={50}
                                />
                            )}
                            {category.projects.slice(1, 2).map((category) =>
                                <Image
                                    key={category.name}
                                    src={category.logo}
                                    className="rounded-[50%] relative right-[5%]"
                                    alt=""
                                    width={50}
                                    height={50}
                                />
                            )}
                            <div className='w-[45px] border-box bg-[#ffffff1f]  border-2  border-[#ffffff14]  rounded-[50%] h-[45px] relative flex items-center justify-center right-[10%]'>
                                {categories.length}
                            </div>
                        </div>
                    </a>
                )}
            </div>
        </div>
    )
}