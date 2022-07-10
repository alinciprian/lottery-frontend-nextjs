import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"

const APP_ID = "jMiN9HERRgNSrziDKoF9nbKGlHv76zXUhmquFnoi"
const SERVER_URL = "https://ig1la5qm2jmw.usemoralis.com:2053/server"
function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount="false" appId={APP_ID} serverUrl={SERVER_URL}>
            <NotificationProvider>
                <Component {...pageProps} />
            </NotificationProvider>
        </MoralisProvider>
    )
}

export default MyApp
