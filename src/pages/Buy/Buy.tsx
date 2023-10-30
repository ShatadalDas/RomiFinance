import { RomiSrc, ZlpSrc } from "../../assets"
import { TokenCard } from "../../components"
import "./Buy.scss"

function Buy() {
    return (
        <>
            <title>Buy | Decentralized Perpetual Exchange</title>
            <main className="buy">
                <h2>Buy $ROMI and $ZLP</h2>
                <div>
                    <TokenCard
                        src={ RomiSrc }
                        alt="Romi Logo"
                        heading="$ROMI"
                        des1="$ROMI is the utility and governance token. Accrues 30% of the platform's generated fees."
                        des2="Ethereum APR: 0.00%"
                    />

                    <TokenCard
                        src={ ZlpSrc }
                        alt="ZLP Logo"
                        heading="$ZLP"
                        des1="$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees."
                        des2="Ethereum APR: 1,651,178,713.51%"
                    />
                </div>
            </main>
        </>
    )
}

export default Buy