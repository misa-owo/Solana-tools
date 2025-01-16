import { bullxDescription, bullXQuestionList } from "../details/bullx";
import { trojanDescription, trojanFaqsQuestionsList } from "../details/trojan";
import { bullxGuide } from "../guides/bullx";
import { trojanGuide } from "../guides/trojan";
import { Guide } from "../types";

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
        link: "#",
        slug: "bullxneo",
        metaTitle: "BullX NEO - Fastest Solana Telegram Bot | Claim Early Access",
        metaDescription: "Get early access to BullX NEO, the fastest Solana Telegram trading bot. Trade with recommended trading bots to take advantage of low fees, faster transactions, and advanced tools.",
        faqs: bullXQuestionList
    },
    {
        content: trojanDescription,
        name: "Trojan On Solana",
        logo: "/tools/trojan.jpg",
        paid: false,
        popular: true,
        guide: trojanGuide,
        category: "TELEGRAM TRADING BOTS",
        description: "Start trading with Trojan Bot, the fastest trading bot for ETH and Solana. Enjoy advanced tools, low fees, and seamless trading directly from Telegram.",
        link: "https://t.me/solana_trojanbot?start=r-tbfl156z",
        slug: "trojan-on-solana",
        metaTitle: "Trojan Telegram Bot - Fastest Solana Trading Bot",
        metaDescription: "Start trading with Trojan Bot, the fastest trading bot for ETH and Solana. Enjoy advanced tools, low fees, and seamless trading directly from Telegram.",
        faqs: trojanFaqsQuestionsList
    },
];

export default tradingBots;
