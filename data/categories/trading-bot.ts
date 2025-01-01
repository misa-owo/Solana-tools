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
const tradingBots: IProject[] = [
    {
        content: bullx,
        name: "BullX NEO",
        logo: "/tools/bullx.jpg",
        paid: false,
        category: "TRADING BOTS",
        popular: true,
        description: "BullX NEO is the ultimate Solana trading bot for memecoin traders. Fast, low fees, multi-chain support, and advanced tools to trade smarter with BullX NEO.",
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
        description: "Trojan on Solana is a fast, user-friendly Telegram trading bot with low fees, instant transactions, and advanced features for all traders.",
        link: "https://example.com/trojan-on-solana",
        slug: "trojan-on-solana"
    },
];

export default tradingBots;
