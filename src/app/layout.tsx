import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import Link from "next/link";
import Image from "next/image";
const inter = Inter({
  subsets: ['latin'], // Ensure language support
  variable: '--font-inter', // Custom variable to use with Tailwind
  display: 'swap', // Optimize font loading
});


export const metadata: Metadata = {
  title: "Trading Tools",
  description: "A hub to learn about all trading tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased min-w-screen min-h-screen bg-[#0e1012]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const navLinks = [
  { link: "/categories" ,name: "Categories" ,},
  { link: "/guides" ,name: "Guides" },
]


const Header = () => {
  return (
    <nav className="flex items-center px-10 md:px-[10%] fixed
      relative
      text-white
      before:inset-0
      before:bottom-[-20px]
      before:backdrop-blur-[16px]
      before:mask-gradient-to-b
      before:mask-black
      before:mask-to-transparent
      before:transform
      border-b-[1px]
      border-[#ffffff14]
      backdrop-blur-md
      w-full 
      shadow-xl
      py-2
      justify-between
      z-2
      before:pointer-events-none">
      <div className="w-fit md:w-3/12 flex justify-start ">
       <Link href="/"><p className="font-bold">TradingBots</p></Link>
      </div>
      <div className="flex justify-center gap-8 items-center md:w-6/12">
        {navLinks.map(navLink => <a key={navLink.name} href={navLink.link} className="text-xs cursor-pointer">{navLink.name}</a>)}
      </div>
      <div className="hidden md:block md:w-3/12">

      </div>
    </nav>)
}

const Footer = () => {
  return (
    <footer className=" flex  px-[10%] pt-[10%] pb-10 text-xs text-[#abadaf] bg-[#0e1012]">
      <div className="w-1/2 ]">
        <Image src={"/blast.avif"} width={35} height={35} alt="logo" />
        <p className=" mt-3">Your Complete Guide to Solana Tools and Dapps</p>
        <div className="flex gap-3 mt-4">
          <a href="" target="_blank">
            <Image src={"socials/x.svg"} width={30} height={30} alt="x" />
          </a>
        </div>
      </div>
      <div className="w-1/4">
        <p className="text-sm font-bold text-white">Popular</p>
        <p className="mt-3">Telegram trading bots</p>
        <p className="mt-2">Airdrops</p>
        <p className="mt-2">VPS</p>
        <p className="mt-2">Trading Bots</p>
        <p className="mt-2">Token Analysis</p>
      </div>
      <div className="w-1/4">
        <p className="font-bold text-sm text-white">Popular</p>
        <p className="mt-3">How to trade solana meme coings</p>
        <p className="mt-2">How to get started with BonkBot?</p>
        <p className="mt-2">How to get started with Photon</p>
        <p className="mt-2">How to get started with Trojan on Solana</p>
      </div>
    </footer>
  )
}