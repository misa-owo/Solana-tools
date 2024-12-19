import { bullx } from "../details/bullx";
import { bullxGuide } from "../guides/bullx";
import { Guide, IContent } from "../types";

export interface IProject {
    name: string,
    logo: string,
    paid: boolean,
    category: string,
    description: string,
    link: string,
    slug: string,
    popular?: boolean,
    content: IContent[]
    guide?: Guide
}
const all: IProject[] = [
    {
        content: bullx,
        name: "BullX NEO",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "TRADING BOTS",
        popular: true,
        description: "BullX is a trading bot platform that operates on the Solana blockchain. It is designed to assist...",
        link: "https://example.com/bullx-neo",
        slug: "bullx-neo",
        guide: bullxGuide
    },
    {
        content: [],
        name: "Trojan On Solana",
        logo: "/tools/trojan.jpg",
        paid: false,
        popular: true,
        category: "TELEGRAM TRADING BOTS",
        description: "Trojan on Solana is a Telegram Trading Bot that stands out from its competitors by providing bot...",
        link: "https://example.com/trojan-on-solana",
        slug: "trojan-on-solana"
    },
    {
        content: [],
        name: "TradeWiz",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "TELEGRAM TRADING BOTS",
        description: "TradeWiz is the fastest trading bot and copy trading bot in the market, with transactions made i...",
        link: "https://example.com/tradewiz",
        slug: "tradewiz"
    },
    {
        content: [],
        name: "DEFI SOLANA BOT",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "TELEGRAM TRADING BOTS",
        description: "DEFI SOLANA BOT is a Telegram bot designed for manual, sniping, and AUTOMATED trading within the...",
        link: "https://example.com/defi-solana-bot",
        slug: "defi-solana-bot"
    },
    {
        content: [],
        name: "Pepe Boost",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "TELEGRAM TRADING BOTS",
        description: "Pepe boost is a specialized trading tool hosted on Telegram, tailored specifically for the Solan...",
        link: "https://example.com/pepe-boost",
        slug: "pepe-boost"
    },
    {
        content: [],
        name: "Maestro",
        logo: "/tools/bullx.jpg",
        paid: true,
        category: "TELEGRAM TRADING BOTS",
        description: "Maestro is a leading trading bot that operates on various blockchain networks, including Solana...",
        link: "https://example.com/maestro",
        slug: "maestro"
    },
    {
        content: [],
        name: "Bloom Bot",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "TELEGRAM TRADING BOTS",
        description: "Bloom Bot is an advanced trading bot specifically designed for the Solana blockchain. It empower...",
        link: "https://example.com/bloom-bot",
        slug: "bloom-bot"
    },
    {
        content: [],
        name: "Ape Pro",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "TRADING BOTS",
        description: "Ape Pro is a dedicated meme coin trading platform built on the Solana blockchain. Developed by J...",
        link: "https://example.com/ape-pro",
        slug: "ape-pro"
    },
    {
        content: [],
        name: "Moon Roll",
        logo: "/tools/bullx.jpg",
        paid: true,
        category: "CASINOS & GAMBLING",
        description: "Moon Roll is an innovative online casino built on the Solana blockchain, offering a variety of g...",
        link: "https://example.com/moon-roll",
        slug: "moon-roll"
    },
    {
        content: [],
        name: "Moonshot (App)",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "SOFTWARE WALLETS",
        description: "Moonshot is the first iOS app that allows users to buy and sell memecoins on the Solana blockcha...",
        link: "https://example.com/moonshot",
        slug: "moonshot-app"
    },
    {
        content: [],
        name: "Solana Wallet Analyzer",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "WALLET ANALYZER",
        description: "Solana Wallet Analyzer is a tool that enhances copytrading. Created by traders for traders....",
        link: "https://example.com/solana-wallet-analyzer",
        slug: "solana-wallet-analyzer"
    },
    {
        content: [],
        name: "Claim Your Sol",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "UTILITIES",
        description: "Claim Your Sol is a platform designed to help Solana users reclaim their SOL tokens from forgott...",
        link: "https://example.com/claim-your-sol",
        slug: "claim-your-sol"
    },
    {
        content: [],
        name: "SOL Sniper Bot",
        logo: "/tools/bullx.jpg",
        paid: true,
        category: "TOKEN SNIPER BOTS",
        description: "SOL Sniper Bot is an easy-to-use, web-based application designed to snipe newly launched tokens ...",
        link: "https://example.com/sol-sniper-bot",
        slug: "sol-sniper-bot"
    },
    {
        content: [],
        name: "Solana RayBot",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "UTILITIES",
        description: "Solana RayBot is a wallet tracker on Telegram for Solana. Solana RayBot helps you monitor Solana...",
        link: "https://example.com/solana-raybot",
        slug: "solana-raybot"
    },
    {
        content: [],
        name: "Banana Gun Bot",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "TELEGRAM TRADING BOTS",
        description: "Banana Gun Bot is a Telegram bot that allows you to snipe and purchase upcoming launches or alre...",
        link: "https://example.com/banana-gun-bot",
        slug: "banana-gun-bot"
    },
    {
        content: [],
        name: "Photon SOL",
        logo: "/tools/photon.jpg",
        paid: false,
        popular: true,
        category: "TRADING BOTS",
        description: "Photon SOL is a fast and user-friendly trading platform that enables easy token analytics, snipi...",
        link: "https://example.com/photon-sol",
        slug: "photon-sol"
    },
    {
        content: [],
        name: "BONKbot",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "TELEGRAM TRADING BOTS",
        description: "BONKbot is a Telegram trading bot on Solana, operates through Jupiter,letting you trade in the s...",
        link: "https://example.com/bonkbot",
        slug: "bonkbot"
    },
    {
        content: [],
        name: "SolTradingBot",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "TELEGRAM TRADING BOTS",
        description: "SolTradingBot is a Telegram trading bot integrated with Solana's top DEX platforms - Jupiter, Or...",
        link: "https://example.com/soltradingbot",
        slug: "soltradingbot"
    }
];

export default all;
