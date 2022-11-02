import Head from "next/head"
import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/header"
import "../styles.css"
import { WagmiConfig, createClient, chain } from "wagmi"
import { ConnectKitProvider, getDefaultClient } from "connectkit"
import { NotificationProvider } from "web3uikit"

function MyApp({ Component, pageProps }) {
    const chains = [
        chain.hardhat,
        chain.localhost,
        chain.mainnet,
        chain.polygon,
        chain.arbitrum,
        chain.rinkeby,
    ]
    const alchemyId = process.env.ALCHEMYID
    const client = createClient(
        getDefaultClient({
            appName: "simple storage",
            alchemyId,
            chains,
        })
    )
    return (
        <div>
            <Head>
                <title>NFT MARKETPLACE</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider
                appId={process.env.NEXT_PUBLIC_APIKEY}
                serverUrl={process.env.NEXT_PUBLIC_SERVERUrl}
            >
                <NotificationProvider>
                    <WagmiConfig client={client}>
                        <ConnectKitProvider
                            customTheme={{
                                __ck_accent_color: "#F07DEA",
                                __ck_accent_text_color: "#ffffff",
                            }}
                        >
                            <Header />
                            <Component {...pageProps} />
                        </ConnectKitProvider>
                    </WagmiConfig>
                </NotificationProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp
