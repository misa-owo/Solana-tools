import all, { IProject } from "./all";

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
        , projects: [], title: 'All', icon: '♾️', slug: 'all'
    },
    {
        description: "Portfolio trackers on Solana simplify managing your digital assets by providing real-time insights into token balances, transaction history, and asset performance. These tools allow users to track cryptos, memecoins, NFTs, and more, all in one place. With features like multichain support and intuitive dashboards, portfolio trackers make it easy for beginners and experts to stay informed and organized in Solana’s dynamic ecosystem."
        , projects: all, title: 'Bridge', icon: '🌉', slug: 'bridge', popular: true
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
        , projects: all, title: 'Contract scanners', icon: '🕵️', slug: 'contract-scanners'
    },
    {
        description: "Portfolio trackers on Solana simplify managing your digital assets by providing real-time insights into token balances, transaction history, and asset performance. These tools allow users to track cryptos, memecoins, NFTs, and more, all in one place. With features like multichain support and intuitive dashboards, portfolio trackers make it easy for beginners and experts to stay informed and organized in Solana’s dynamic ecosystem."
        , projects: all, title: 'DePIN', icon: '🌐', slug: 'depin'
    },
    {
        description: "Portfolio trackers on Solana simplify managing your digital assets by providing real-time insights into token balances, transaction history, and asset performance. These tools allow users to track cryptos, memecoins, NFTs, and more, all in one place. With features like multichain support and intuitive dashboards, portfolio trackers make it easy for beginners and experts to stay informed and organized in Solana’s dynamic ecosystem."
        , projects: all, title: 'Derivs/Perps', icon: '♾️', slug: 'derivs-perps', popular: true
    },
    {
        description: "Portfolio trackers on Solana simplify managing your digital assets by providing real-time insights into token balances, transaction history, and asset performance. These tools allow users to track cryptos, memecoins, NFTs, and more, all in one place. With features like multichain support and intuitive dashboards, portfolio trackers make it easy for beginners and experts to stay informed and organized in Solana’s dynamic ecosystem."
        , projects: all, title: 'DEXs', icon: '💱', slug: 'dexs'
    },
    // { projects: all, title: 'Events', icon: '📅', slug: 'events' },
    // { projects: all, title: 'Explorer', icon: '🔎', slug: 'explorer' },
    // { projects: all, title: 'Hardware Wallets', icon: '📱', slug: 'hardware-wallets' },
    // { projects: all, title: 'Lending/Borrowing', icon: '🏦', slug: 'lending-borrowing' },
    // { projects: all, title: 'News', icon: '📰', slug: 'news' },
    // { projects: all, title: 'NFT Marketplaces', icon: '🖼️', slug: 'nft-marketplaces' },
    // { projects: all, title: 'NFT Tools', icon: '⛏️', slug: 'nft-tools' },
    // { projects: all, title: 'Podcasts', icon: '🎙️', slug: 'podcasts' },
    // { projects: all, title: 'Portfolio Tracker', icon: '💼', slug: 'portfolio-tracker' },
    // { projects: all, title: 'Proxy Providers', icon: '🗺️', slug: 'proxy-providers' },
    // { projects: all, title: 'RPC Node Providers', icon: '🌐', slug: 'rpc-node-providers' },
    // { projects: all, title: 'Rug Checker', icon: '🕵️', slug: 'rug-checker' },
    // { projects: all, title: 'Software Wallets', icon: '💰', slug: 'software-wallets' },
    // { projects: all, title: 'Solana Airdrops', icon: '🪂', slug: 'solana-airdrops' },
    // { projects: all, title: 'Staking', icon: '🪙', slug: 'staking' },
    // { projects: all, title: 'Swap', icon: '🔄', slug: 'swap' },
    // { projects: all, title: 'Telegram Trading Bots', icon: '💬', slug: 'telegram-trading-bots' },
    // { projects: all, title: 'Tokens Analytics', icon: '📈', slug: 'tokens-analytics' },
    // { projects: all, title: 'Token Sniper Bots', icon: '🔫', slug: 'token-sniper-bots' },
    // { projects: all, title: 'Trading Bots', icon: '🤖', slug: 'trading-bots' },
    // { projects: all, title: 'Utilities', icon: '🛠️', slug: 'utilities' },
    // { projects: all, title: 'VPS', icon: '🗄️', slug: 'vps' },
    // { projects: all, title: 'Wallet Analyzer', icon: '👛', slug: 'wallet-analyzer' }
];

export default categories;