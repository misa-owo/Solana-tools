export interface IProject {
    name: string,
    logo:string,
    paid: boolean, 
    category: string,
    description: string,
    link: string,
    popular?: boolean
}
const all: IProject[] = [
    {
        name: "BullX NEO",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "TRADING BOTS",
        popular: true,
        description: "BullX is a trading bot platform that operates on the Solana blockchain. It is designed to assist...",
        link: "https://example.com/bullx-neo" // Replace with actual link
    },
    {
        name: "Trojan On Solana",
        logo:"/tools/trojan.jpg",
        paid: false, // FREE
        popular: true,
        category: "TELEGRAM TRADING BOTS",
        description: "Trojan on Solana is a Telegram Trading Bot that stands out from its competitors by providing bot...",
        link: "https://example.com/trojan-on-solana" // Replace with actual link
    },
    {
        name: "TradeWiz",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "TELEGRAM TRADING BOTS",
        description: "TradeWiz is the fastest trading bot and copy trading bot in the market, with transactions made i...",
        link: "https://example.com/tradewiz" // Replace with actual link
    },
    {
        name: "DEFI SOLANA BOT",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "TELEGRAM TRADING BOTS",
        description: "DEFI SOLANA BOT is a Telegram bot designed for manual, sniping, and AUTOMATED trading within the...",
        link: "https://example.com/defi-solana-bot" // Replace with actual link
    },
    {
        name: "Pepe Boost",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "TELEGRAM TRADING BOTS",
        description: "Pepe boost is a specialized trading tool hosted on Telegram, tailored specifically for the Solan...",
        link: "https://example.com/pepe-boost" // Replace with actual link
    },
    {
        name: "Maestro",
        logo:"/tools/bullx.jpg",
        paid: true, // PAID
        category: "TELEGRAM TRADING BOTS",
        description: "Maestro is a leading trading bot that operates on various blockchain networks, including Solana...",
        link: "https://example.com/maestro" // Replace with actual link
    },
    {
        name: "Bloom Bot",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "TELEGRAM TRADING BOTS",
        description: "Bloom Bot is an advanced trading bot specifically designed for the Solana blockchain. It empower...",
        link: "https://example.com/bloom-bot" // Replace with actual link
    },
    {
        name: "Ape Pro",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "TRADING BOTS",
        description: "Ape Pro is a dedicated meme coin trading platform built on the Solana blockchain. Developed by J...",
        link: "https://example.com/ape-pro" // Replace with actual link
    },
    {
        name: "Moon Roll",
        logo:"/tools/bullx.jpg",
        paid: true, // PAID
        category: "CASINOS & GAMBLING",
        description: "Moon Roll is an innovative online casino built on the Solana blockchain, offering a variety of g...",
        link: "https://example.com/moon-roll" // Replace with actual link
    },
    {
        name: "Moonshot (App)",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "SOFTWARE WALLETS",
        description: "Moonshot is the first iOS app that allows users to buy and sell memecoins on the Solana blockcha...",
        link: "https://example.com/moonshot" // Replace with actual link
    },
    {
        name: "Solana Wallet Analyzer",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "WALLET ANALYZER",
        description: "Solana Wallet Analyzer is a tool that enhances copytrading. Created by traders for traders....",
        link: "https://example.com/solana-wallet-analyzer" // Replace with actual link
    },
    {
        name: "Claim Your Sol",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "UTILITIES",
        description: "Claim Your Sol is a platform designed to help Solana users reclaim their SOL tokens from forgott...",
        link: "https://example.com/claim-your-sol" // Replace with actual link
    },
    {
        name: "SOL Sniper Bot",
        logo:"/tools/bullx.jpg",
        paid: true, // PAID
        category: "TOKEN SNIPER BOTS",
        description: "SOL Sniper Bot is an easy-to-use, web-based application designed to snipe newly launched tokens ...",
        link: "https://example.com/sol-sniper-bot" // Replace with actual link
    },
    {
        name: "Solana RayBot",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "UTILITIES",
        description: "Solana RayBot is a wallet tracker on Telegram for Solana. Solana RayBot helps you monitor Solana...",
        link: "https://example.com/solana-raybot" // Replace with actual link
    },
    {
        name: "Banana Gun Bot",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "TELEGRAM TRADING BOTS",
        description: "Banana Gun Bot is a Telegram bot that allows you to snipe and purchase upcoming launches or alre...",
        link: "https://example.com/banana-gun-bot" // Replace with actual link
    },
    {
        name: "Photon SOL",
        logo:"/tools/photon.jpg",
        paid: false, // FREE
        popular: true,
        category: "TRADING BOTS",
        description: "Photon SOL is a fast and user-friendly trading platform that enables easy token analytics, snipi...",
        link: "https://example.com/photon-sol" // Replace with actual link
    },
    {
        name: "BONKbot",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "TELEGRAM TRADING BOTS",
        description: "BONKbot is a Telegram trading bot on Solana, operates through Jupiter,letting you trade in the s...",
        link: "https://example.com/bonkbot" // Replace with actual link
    },
    {
        name: "SolTradingBot",
        logo:"/tools/bullx.jpg",
        paid: false, // FREE
        category: "TELEGRAM TRADING BOTS",
        description: "SolTradingBot is a Telegram trading bot integrated with Solana's top DEX platforms - Jupiter, Or...",
        link: "https://example.com/soltradingbot" // Replace with actual link
    }
];
export default all;  