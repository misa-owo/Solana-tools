import { Guide } from "../types";
export const bullxGuide: Guide = {
    title: "How to Get Started with Trojan on Solana",
    logo: "https://example.com/trojan-logo.png",
    description: "Trojan on Solana is a Telegram-based trading bot specifically designed for trading Solana tokens. This guide will walk you through the steps to start trading on Solana using Trojan. Designed for simplicity and efficiency, Trojan aims to make on-chain trading accessible for all.",
    question: {
        title: "What is Trojan on Solana?",
        paragraph: "Trojan on Solana is a user-friendly Telegram bot that enables easy trading of Solana tokens. Unlike other bots, it provides an intuitive experience with unique features tailored for beginners. It’s simple to use and eliminates many of the complexities associated with crypto trading."
    },
    steps: [
        {
            image: "/tools/meteora.jpeg",
            details: {
                title: "Join Trojan on Solana Telegram",
                paragraph: [
                    "To use Trojan on Solana, you need to have Telegram. First, download the Telegram app and create an account.",
                    "Click on the button below to join the Trojan on Solana channel, where you’ll find access to the bot."
                ]
            }
        },
        {
            image: "/tools/meteora.jpeg",
            details: {
                title: "Click on '/start' to initiate Trojan on Solana",
                paragraph: [
                    "Once you’ve joined the channel, type or click on '/start' to activate Trojan on Solana.",
                    "This command will bring up the bot’s main menu, displaying various options and information about your wallet balance and trading tools.",
                    "The bot is now ready to guide you through your trading journey on Solana."
                ]
            },
        },
        {
            image: "/tools/meteora.jpeg",
            details: {
                title: "Fund your wallet",
                paragraph: [
                    "To start trading, you need to add funds to your wallet.",
                    "Send SOL directly to the wallet address displayed on the bot's start page. This address is unique to your Telegram account, ensuring secure transactions.",
                    "To withdraw SOL, click on the 'Withdraw' tab in the bot’s menu, select 'Solana,' and follow the instructions provided."
                ]
            }
        },
        {
            image: "/tools/meteora.jpeg",
            details: {
                title: "Trade by pasting a token address into Telegram",
                paragraph: [
                    "When you’re ready to trade, copy and paste the token’s address into the chat.",
                    "The bot will display detailed information about the token, including current price, liquidity, and market cap.",
                    "Choose the amount you want to buy or set a custom amount, then confirm by clicking 'BUY.'",
                    "After completing a purchase, the bot will confirm if the transaction was successful."
                ]
            }
        },
        {
            image: "/tools/meteora.jpeg",
            details: {
                title: "See your positions",
                paragraph: [
                    "To check your token holdings, use the '/positions' command.",
                    "This will show your active positions, including current value, profit or loss, and other relevant details.",
                    "You can buy or sell directly from this screen by following the on-screen instructions."
                ]
            }
        }
    ],
    faqs: [
        {
            title: "What are the fees for using Trojan On Solana?",
            paragraph: " Trojan On Solana fees are collected in SOL and it is 1% of the initial token used for every buy and sell transaction.",
        },
        {
            title: "Does Trojan On Solana have Anti-MEV feature?",
            paragraph: "Yes"
        }
    ]
};

