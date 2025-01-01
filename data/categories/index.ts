import tradingBots from "./trading-bot";
import  { IProject } from "./trading-bot";

export interface ICategory {
    projects: IProject[],
    title: string,
    icon: string,
    slug: string,
    popular?: boolean,
    description: string
}
const categories: ICategory[] = [
    {
        description: "Portfolio trackers on Solana simplify managing your digital assets by providing real-time insights into token balances, transaction history, and asset performance. These tools allow users to track cryptos, memecoins, NFTs, and more, all in one place. With features like multichain support and intuitive dashboards, portfolio trackers make it easy for beginners and experts to stay informed and organized in Solana’s dynamic ecosystem."
        , projects: [...tradingBots], title: 'All', icon: '♾️', slug: 'all'
    },
    {
        description: "Telegram trading bots on Solana provide users with automated trading capabilities directly within Telegram. These bots enable seamless trade execution, market monitoring, and price alerts, offering convenience and real-time updates for traders.",
        projects: tradingBots, title: 'Telegram Trading Bots', icon: '📲', slug: 'telegram-trading-bots', popular: true
    },
    {
        description: "Token sniper bots on Solana specialize in identifying and executing trades on newly launched tokens with lightning speed. Designed for high-frequency trading, these bots help users capitalize on early opportunities in the volatile crypto market.",
        projects: [], title: 'Token Sniper Bots', icon: '🎯', slug: 'token-sniper-bots', popular: true
    },
    {
        description: "Copy trading bots on Solana allow users to replicate the trading strategies of experienced traders. With features like automated trade copying and performance analytics, these bots make it easier for beginners to benefit from expert insights.",
        projects: [], title: 'Copy Trading Bots', icon: '🤝', slug: 'copy-trading-bots', popular: true
    },

];

export default categories;