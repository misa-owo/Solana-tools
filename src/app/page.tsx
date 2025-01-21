"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import categories from "../../data/categories";
import Project from "@/components/ui/project";
import Contact from "@/components/contact";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProjects = useMemo(() => {
    const filteredProjects = categories.find(category => category.title === selectedCategory)?.projects || [];
    return filteredProjects.filter(project => project.name.toLocaleLowerCase().includes(search.toLowerCase()))
  }, [selectedCategory, search])

  return (
    <div >
      <div className="relative">
        <div className="min-w-screen min-h-[50vh] spiral block relative -top-[20vh]">
        </div>
        <div className="w-full  text-white text-center text-sm flex flex-col items-center absolute top-0">
          <p className="mt-[10%] bg-[#ffffff14] w-9/12 md:w-fit m-auto px-6 text-xs font-semibold  py-1  rounded-xl  border-[2px] border-[#ffffff14] shadow-xl">Support Us and Help Us Grow! Your Backing Means Everything! 🤩</p>
          <h1 className="mt-10 text-xl md:text-6xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] w-[50%]"> TradingBots 
          </h1>
          <h1 className="mt-5 text-xl md:text-6xl text-transparent bg-clip-text font-bold bg-[linear-gradient(to_right_bottom,_rgb(255,255,255)_30%,_rgba(255,255,255,0.6))] w-[50%]"> Best Telegram Bots for Solana & Ethereum Meme Coin
          </h1>
          <h2 className="text-[#abadaf] mt-5  text-sm  w-9/12 md:text-xl md:w-5/12">Discover the best Telegram trading bots for Ethereum and Solana Meme Coins. Dominate memecoin trading with the best trading platforms and trading bots today</h2>
        </div>
      </div>
      <div className="w-10/12 md:w-7/12 m-auto mt-[10%]">
        <div className="rounded-xl overflow-hidden flex items-center  border-[1px] border-solid border-[#ffffff14]">
          <Input className="border-none py-2 text-[#abadaf] focus-visible:ring-0" onChange={e => setSearch(e.target.value)} value={search}>
          </Input>
          <Button className="w-3/12 rounded-xl py-5">Search</Button>
        </div>
        <div className="text-white mt-5 flex flex-wrap justify-center gap-x-2 gap-y-2 ">
          {categories.map(category => <p
            key={category.title}
            onClick={() => setSelectedCategory(category.title)}
            className={`bg-[#ffffff14] cursor-pointer w-fit  px-2 text-xs font-semibold  py-1  rounded-xl  
            border-2 
            border-[${selectedCategory === category.title ? "#8952e0" : "#ffffff14"}] `}>
            <span className="mr-2">{category.icon}</span>{category.title}
          </p>)}
        </div>
      </div>

      {filteredProjects.length ? <div className="flex justify-center mt-10 flex-wrap gap-2 gap-4 pb-[10%] px-[10%]">
        {filteredProjects.map(project => {
          return (
            <Project key={project.name} {...project} />
          )
        })}
      </div>: <p className="text-white text-4xl font-bold text-center my-10">Coming Soon...</p>}
      <div className="relative overflow-hidden block fit-content px-[10%]">
        <div className="w-screen min-h-screen spiral block absolute -top-[50vh]">
        </div>
        <div className="pb-40">
          <Contact/>
        </div>
      </div>
    </div>
  );
}
