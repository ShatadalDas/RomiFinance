import "./Dashboard.scss"
import { ApeSrc, AvalancheSrc, BtcSrc, DownArrowSrc, EthSrc, RomiSrc, UsdcSrc, ZlpSrc } from "../../assets"
import { SpecialCoinsSection, Table } from "../../components"

function Dashboard() {
  return (
    <>
      <title>Dashboard | Decentralized Perpetual Exchange</title>
      <main className="dashboard">
        <section className="stats-section">
          <div className="heading-wrapper">
            <h1>Stats</h1>
            <img src={ AvalancheSrc } alt="" />
          </div>
          <p>Ethereun Total Stats satrt from 06 Jan 2022.</p>
          <p>For detailes stats:</p>
          <div className="table-wrapper">
            <Table
              TableHeader={
                <th>Overview</th>
              }
              tables={ [{
                col1: ["AUM", "$ZLP Pool", "24h Volume", "Long Positions", "Short Positions"],
                col2: ["$34", "$34", "$0", "$0", "$0"],
              }] }
            />

            <Table
              TableHeader={
                <th>Total Stats</th>
              }
              tables={ [{
                col1: ["Total Fees", "Total Volume", "Floor Price Fund"],
                col2: ["$0", "$0", "$628,351"],
              }
              ] }
            />

          </div>
        </section>

        <section className="tokens-section">
          <div className="heading-wrapper">
            <h1>Tokens</h1>
            <img src={ AvalancheSrc } alt="" />
          </div>
          <p>PLatform and $ZLP index tokens.</p>

          <div className="table-wrapper">
            <Table TableHeader={
              <th>
                <img src={ RomiSrc } alt="" />
                <div>
                  <p>$ROMI</p>
                  <p>$ROMI</p>
                </div>
                <img src={ DownArrowSrc } alt="Down Arrow" className="down-arrow" />
              </th>
            }
              tables={ [{
                col1: ["Price", "Supply", "Total Staked", "Market Cap"],
                col2: ["$0.00", "10,000 $ROMI", "$0", "$10"]
              }] }
            />

            <Table TableHeader={
              <th>
                <img src={ ZlpSrc } alt="" />
                <div>
                  <p>$ZLP</p>
                  <p>$ZLP</p>
                </div>
                <img src={ DownArrowSrc } alt="Down Arrow" className="down-arrow" />
              </th>
            }
              tables={ [{
                col1: ["Price", "Supply", "Total Staked", "Market Cap", "Stablecoin Percentage"],
                col2: ["$1.136", "29 $ZLP", "$34", "$34", "49.50%"],
              }] }
            />

          </div>
        </section>

        <section className="coins-section">
          <Table
            TableHeader={
              <th>
                <img src={ EthSrc } alt="" />
                <p>ETH</p>
                <img src={ DownArrowSrc } alt="" className="down-arrow" />
              </th>
            }
            tables={ [{
              col1: ["Price", "Pool", "Weight", "Utilization"],
              col2: ["$1,760.37", "$18", "50.49% / 25.00%", "0.00%"],
            }] }
            className="coin"
          />

          <Table
            TableHeader={
              <th>
                <img src={ BtcSrc } alt="Bitcoin Logo" />
                <p>WBTC</p>
                <img src={ DownArrowSrc } alt="down arrow" className="down-arrow" />
              </th>
            }
            tables={ [{
              col1: ["Price", "Pool", "Weight", "Utilization"],
              col2: ["$33,436.56", "$0", "0.00% / 25.00%", "0.00%"],
            }] }
            className="coin"
          />

          <Table
            TableHeader={
              <th>
                <img src={ ApeSrc } alt="APE Logo" />
                <p>APE</p>
                <img src={ DownArrowSrc } alt="down arrow" className="down-arrow" />
              </th>
            }
            tables={ [{
              col1: ["Price", "Pool", "Weight", "Utilization"],
              col2: ["$1.27", "$0", "0.00% / 25.00%", "0.00%"],
            }] }
            className="coin"
          />

          <Table
            TableHeader={
              <th>
                <img src={ UsdcSrc } alt="APE Logo" />
                <p>APE</p>
                <img src={ DownArrowSrc } alt="down arrow" className="down-arrow" />
              </th>
            }
            tables={ [{
              col1: ["Price", "Pool", "Weight", "Utilization"],
              col2: ["$1.00", "$14", "49.50% / 25.00%", "0.00%"],
            }] }
            className="coin"
          />

        </section>
        <SpecialCoinsSection />

      </main>
    </>
  )
}

export default Dashboard