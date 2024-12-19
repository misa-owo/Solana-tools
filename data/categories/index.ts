import exchange from "./exchange";
import all, { IProject } from "./exchange";

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
        , projects: [...exchange], title: 'All', icon: '♾️', slug: 'all'
    },
    {
        description: "Portfolio trackers on Solana simplify managing your digital assets by providing real-time insights into token balances, transaction history, and asset performance. These tools allow users to track cryptos, memecoins, NFTs, and more, all in one place. With features like multichain support and intuitive dashboards, portfolio trackers make it easy for beginners and experts to stay informed and organized in Solana’s dynamic ecosystem."
        , projects: exchange, title: 'Bridge', icon: '🌉', slug: 'bridge', popular: true
    },
    {
        description: "Portfolio trackers on Solana simplify managing your digital assets by providing real-time insights into token balances, transaction history, and asset performance. These tools allow users to track cryptos, memecoins, NFTs, and more, all in one place. With features like multichain support and intuitive dashboards, portfolio trackers make it easy for beginners and experts to stay informed and organized in Solana’s dynamic ecosystem."
        , projects: [], title: 'Caller bots (AI)', icon: '🚨', slug: 'caller-bots-ai', popular: true
    },
    {
        description: "Portfolio trackers on Solana simplify managing your digital assets by providing real-time insights into token balances, transaction history, and asset performance. These tools allow users to track cryptos, memecoins, NFTs, and more, all in one place. With features like multichain support and intuitive dashboards, portfolio trackers make it easy for beginners and experts to stay informed and organized in Solana’s dynamic ecosystem."
        , projects: [], title: 'Casinos & Gambling', icon: '🎰', slug: 'casinos-gambling', popular: true
    },
    {
        description: "Portfolio trackers on Solana simplify managing your digital assets by providing real-time insights into token balances, transaction history, and asset performance. These tools allow users to track cryptos, memecoins, NFTs, and more, all in one place. With features like multichain support and intuitive dashboards, portfolio trackers make it easy for beginners and experts to stay informed and organized in Solana’s dynamic ecosystem."
        , projects: [], title: 'Contract scanners', icon: '🕵️', slug: 'contract-scanners'
    },
    {
        description: "Portfolio trackers on Solana simplify managing your digital assets by providing real-time insights into token balances, transaction history, and asset performance. These tools allow users to track cryptos, memecoins, NFTs, and more, all in one place. With features like multichain support and intuitive dashboards, portfolio trackers make it easy for beginners and experts to stay informed and organized in Solana’s dynamic ecosystem."
        , projects: [], title: 'DePIN', icon: '🌐', slug: 'depin'
    },
    {
        description: "Portfolio trackers on Solana simplify managing your digital assets by providing real-time insights into token balances, transaction history, and asset performance. These tools allow users to track cryptos, memecoins, NFTs, and more, all in one place. With features like multichain support and intuitive dashboards, portfolio trackers make it easy for beginners and experts to stay informed and organized in Solana’s dynamic ecosystem."
        , projects: [], title: 'Derivs/Perps', icon: '♾️', slug: 'derivs-perps', popular: true
    },
    {
        description: "Portfolio trackers on Solana simplify managing your digital assets by providing real-time insights into token balances, transaction history, and asset performance. These tools allow users to track cryptos, memecoins, NFTs, and more, all in one place. With features like multichain support and intuitive dashboards, portfolio trackers make it easy for beginners and experts to stay informed and organized in Solana’s dynamic ecosystem."
        , projects: [], title: 'DEXs', icon: '💱', slug: 'dexs'
    },
];

export default categories;