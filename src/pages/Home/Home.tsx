import "./Home.scss"
import { TradingSrc, LiquidSrc, RomiSrc, CostSrc, StatsSrc, SwapSrc, UserSrc, ZlpSrc } from "../../assets"
import { AccentBtn, TokenCard } from "../../components"

function Home() {
  return (
    <>
      <title>ROMI | Decentralized Perpetual Exchange</title>
      <main className="home">
        <section className="title-section">
          <h1>Decentralized Perpetual Exchange</h1>
          <p>Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet</p>
          <AccentBtn text="Launch Exchange" />
        </section>

        <section className="info-section">
          <section>
            <img src={ TradingSrc } alt="Trading Image" />
            <div>
              <h1>Total Trading Volume</h1>
              <p>$0</p>
            </div>
          </section>

          <section>
            <img src={ StatsSrc } alt="Stats Image" />
            <div>
              <h1>Open Interest</h1>
              <p>$0</p>
            </div>
          </section>

          <section>
            <img src={ UserSrc } alt="User Image" />
            <div>
              <h1>Total Users</h1>
              <p>0</p>
            </div>
          </section>
        </section>

        <section className="benifits-section">
          <section>
            <div>
              <img src={ LiquidSrc } alt="Liquid Image" />
              <h1>Reduce Liquidation Risks</h1>
            </div>
            <p>An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe
              from temporary wicks.</p>
          </section>

          <section>
            <div>
              <img src={ CostSrc } alt="Cost Image" />
              <h1>Save on Costs</h1>
            </div>
            <p>Enter and exit positions with minimal spread and zero price impact. Get the optimal price without
              incurring additional costs.</p>
          </section>

          <section>
            <div>
              <img src={ SwapSrc } alt="Swap Image" />
              <h1>Simple Swaps</h1>
            </div>
            <p>Open positions through a simple swap interface. Conveniently swap from any supported asset into the
              position of your choice.</p>
          </section>
        </section>

        <section className="token-card-section">
          <h1>Two tokens create our ecosystem</h1>

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
        </section>
      </main>
    </>
  )
}

export default Home