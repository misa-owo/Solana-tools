import { bullxDescription, bullXQuestionList } from "../details/bullx";
import { photonDescription } from "../details/photon";
import { trojanDescription, trojanFaqsQuestionsList } from "../details/trojan";
import { bullxGuide } from "../guides/bullx";
import { trojanGuide } from "../guides/trojan";
import { photonGuide } from "../guides/photon";
import { photonQuestionList } from "../details/photon";
import { bloombotGuide } from "../guides/bloombot";
import { bloombotDescription } from "../details/bloombot";
import { bloombotQuestionList } from "../details/bloombot";
import { Guide } from "../types";
import { novaclickGuide } from "../guides/novaclick";

interface Question {
    question: string;
    answer: string;
}
export interface IProject {
    name: string,
    logo: string,
    paid: boolean,
    category: string,
    description: string,
    summary: string,
    link: string,
    slug: string,
    popular?: boolean,
    content: string
    guide?: Guide,
    metaTitle: string,
    metaDescription: string,
    faqs: Question[]
}
const tradingBots: IProject[] = [
    {
        content: bullxDescription,
        name: "BullX NEO",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "TRADING BOTS",
        popular: true,
        guide: bullxGuide,
        description: "Get early access to BullX NEO, the fastest Solana Telegram trading bot. Trade with recommended trading bots to take advantage of low fees, faster transactions, and advanced tools.",
        summary: "BullX NEO is a multi-chain terminal, telegram bot, and tool. The platform gives user the ability to access Solana, Ethereum, Base, Arbitrum, Tron, and more. Click here to register!",
        link: "https://t.me/BullxNeoBot?start=access_O8WUWM126ZA",
        slug: "bullxneo",
        metaTitle: "BullX NEO - Fastest Solana Telegram Bot | Claim Early Access",
        metaDescription: "Get early access to BullX NEO, the fastest Solana Telegram trading bot. Trade with recommended trading bots to take advantage of low fees, faster transactions, and advanced tools.",
        faqs: bullXQuestionList
    },
    {
        content: trojanDescription,
        name: "Trojan On Solana",
        logo: "/tools/trojan.jpeg",
        paid: false,
        popular: true,
        guide: trojanGuide,
        category: "TELEGRAM TRADING BOTS",
        description: "Start trading with Trojan Bot, the fastest trading bot for ETH and Solana. Enjoy advanced tools, low fees, and seamless trading directly from Telegram.",
        summary: "Trojan Bot is the leading-edge Telegram trading bot that streamlines crypto trading with instant transactions, low fees, and advanced features like limit orders, DCA, and PnL tracking. Click here to register!",
        link: "https://t.me/solana_trojanbot?start=r-tbfl156z",
        slug: "trojan-on-solana",
        metaTitle: "Trojan Telegram Bot - Fastest Solana Trading Bot",
        metaDescription: "Start trading with Trojan Bot, the fastest trading bot for ETH and Solana. Enjoy advanced tools, low fees, and seamless trading directly from Telegram.",
        faqs: trojanFaqsQuestionsList
    },
    {
        content: photonDescription,
        name: "Photon",
        logo: "/tools/photon.jpg",
        paid: false,
        popular: true,
        guide: photonGuide,
        category: "TRADING BOTS",
        description: "Photon: The fastest Solana trading platform and bot. Experience the best Solana bot for seamless, lightning-fast trades with Photon Trading Bot!",
        summary: "One of the fastest web interfaces on Solana, Ethereum, and Base. Another alternative to BullX NEO with rapid fast speeds & smooth interfaces.",
        link: "none",
        slug: "photon",
        metaTitle: "Photon - Fastest Solana Trading Platform & Bot",
        metaDescription: "Photon: The fastest Solana trading platform and bot. Experience the best Solana bot for seamless, lightning-fast trades with Photon Trading Bot!",
        faqs: photonQuestionList
    },
    {
        content: bloombotDescription,
        name: "Nova Click",
        logo: "/tools/novaclick.png",
        paid: false,
        popular: true,
        guide: novaclickGuide,
        category: "TRADING BOTS",
        description: "Get started with Bloom Bot: Your ultimate crypto advantage. BloomBot, the fastest Telegram trading bot, lets you trade smarter and faster on Solana & Ethereum.",
        summary: "Solana extension and bot to amplify your trading experience. Snipe, copy trade, and instant execution of trades. Integration with BullX and Photon supported.",
        link: "https://www.novaclick.io/",
        slug: "novaclick",
        metaTitle: "Nova Click - The Fastest Trading Bot on Solana (Extension)",
        metaDescription: "Novaclick Solana extension delivers the fastest and most efficient trading in the form of a Telegram bot. Compatible with BullX and Photon.",
        faqs: bloombotQuestionList
    },
    {
        content: bloombotDescription,
        name: "Bloom Bot",
        logo: "/tools/bloombot.svg",
        paid: false,
        popular: true,
        guide: bloombotGuide,
        category: "TELEGRRAM TRADING BOTS",
        description: "Get started with Bloom Bot: Your ultimate crypto advantage. BloomBot, the fastest Telegram trading bot, lets you trade smarter and faster on Solana & Ethereum.",
        summary: "Meet Bloom Bot: Your unfair crypto advantage. The fastest Telegram trading bot for smarter, faster trades on Solana and Ethereum. Try it now!",
        link: "https://www.bloombot.xyz/",
        slug: "bloombot",
        metaTitle: "Bloom Bot - Fastest on Solana | BullX & Photon Trading Extension",
        metaDescription: "Get started with Bloom Bot: Your ultimate crypto advantage. BloomBot, the fastest Telegram trading bot, lets you trade smarter and faster on Solana & Ethereum.",
        faqs: bloombotQuestionList
    },
    
];

export default tradingBots;
