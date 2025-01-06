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
        description: "BullX NEO is the ultimate Solana trading bot for memecoin traders. Fast, low fees, multi-chain support, and advanced tools to trade smarter with BullX NEO.",
        link: "https://example.com/bullx-neo",
        slug: "bullx-neo",
        metaTitle: "What is BullX NEO?",
        metaDescription: " BullX NEO is the ultimate Solana trading bot for memecoin traders. Fast, low fees, multi-chain support, and advanced tools to trade smarter with BullX NEO.",
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
        description: "Trojan on Solana is a fast, user-friendly Telegram trading bot with low fees, instant transactions, and advanced features for all traders.",
        link: "https://example.com/trojan-on-solana",
        slug: "trojan-on-solana",
        metaTitle: "What is Trojan on Solana?",
        metaDescription: "Trojan on Solana is a fast, user-friendly Telegram trading bot with low fees, instant transactions, and advanced features for all traders.",
        faqs: trojanFaqsQuestionsList
    },
];

export default tradingBots;
