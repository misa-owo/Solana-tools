import { Guide } from "../types";

export const bloombotGuide: Guide = {
    title: "How to Use Bloom Bot | Guide to the Fastest Solana Trading Bot",
    logo: "tools/bloom.svg",
    accesscode: "",
    link: "https://bloombot.xyz",
    description: 
        "Bloom Bot is a revolutionary Telegram-based trading tool that brings efficiency and simplicity to Solana trading. " +
        "Designed for traders of all levels, Bloom Bot offers lightning-fast transaction speeds, real-time analytics, and a user-friendly interface. " +
        "This guide will help you harness the full power of Bloom Bot and make the most of its powerful features.",
    question: {
        title: "What is Bloom Bot?",
        paragraph: 
            "Bloom Bot is a Telegram trading bot optimized for Solana blockchain transactions. " +
            "Its intuitive design eliminates the complexity of trading by offering features like automated trading, multi-wallet management, and real-time insights. " +
            "With support for additional blockchains like Ethereum and Binance, Bloom Bot ensures fast, secure, and versatile trading." 
    },
    steps: [
        {
            image: "/tools/bloom_step1.jpeg",
            details: {
                title: "Activate Bloom Bot",
                paragraph: [
                    "To get started with Bloom Bot, follow these steps:",
                    "1. Join the Bloom Bot Telegram channel by clicking the provided link above..",
                    "2. Type or click the \"/start\" command in the Telegram chat to initialize the bot.",
                    "3. Explore the menu to access wallet management tools, trading features, and in-depth guides."
                ]
            }
        },
        {
            image: "/tools/bloom_step2.jpeg",
            details: {
                title: "Fund Your Wallet",
                paragraph: [
                    "To begin trading, fund your Bloom Bot wallet with SOL by following these steps:",
                    "1. Navigate to the wallet section of the bot to find your unique Solana wallet address.",
                    "2. Copy the address and transfer SOL tokens from your personal wallet or exchange. Ensure accuracy to avoid errors.",
                    "3. Wait for the bot to confirm the transaction and display your updated wallet balance.",
                    "💡 Tip: To withdraw funds, access the \"Withdraw\" tab in the bot menu, select Solana, and follow the bot’s instructions."
                ]
            }
        },
        {
            image: "/tools/bloom_step3.jpeg",
            details: {
                title: "Start Trading",
                paragraph: [
                    "Bloom Bot makes trading intuitive and efficient. Follow these steps to execute your first trade:",
                    "1. Obtain the contract address of the token you want to trade from trusted platforms like CoinGecko or the token’s official website.",
                    "2. Paste the contract address into the Telegram chat with Bloom Bot. The bot will display real-time details, including price, market cap, and liquidity.",
                    "3. Set the trade parameters, such as slippage or limit orders, and specify the amount of SOL you wish to trade.",
                    "4. Confirm the transaction and let the bot handle the rest using Solana’s high-speed blockchain technology.",
                    "5. Receive a confirmation message summarizing the transaction details."
                ]
            }
        },
        {
            image: "/tools/bloom_step4.jpeg",
            details: {
                title: "Monitor Your Positions",
                paragraph: [
                    "Stay updated on your portfolio performance with Bloom Bot:",
                    "1. Use the \"/positions\" command to access a detailed overview of your holdings.",
                    "2. Review your current token balances and their market value.",
                    "3. Analyze profit and loss (PnL) statements for each trade to evaluate your strategies.",
                    "4. Check your overall portfolio value and adjust your trades based on market conditions."
                ]
            }
        },
        {
            image: "/tools/bloom_step5.jpeg",
            details: {
                title: "Advanced Features",
                paragraph: [
                    "Bloom Bot offers advanced tools to optimize your trading experience:",
                    "- Set up automation tools like limit orders, stop-loss, and take-profit targets.",
                    "- Manage multiple wallets seamlessly to diversify your portfolio.",
                    "- Receive real-time alerts on trending tokens to stay ahead of the market.",
                    "- Access detailed charts and analytics to make data-driven decisions."
                ]
            }
        }
    ]
};
