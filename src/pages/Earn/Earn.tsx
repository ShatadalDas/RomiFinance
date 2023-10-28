import { AccentBtn, Table } from "../../components"
import "./Earn.scss"

function Earn() {
  return (
    <>
      <title>Earn | Decentralized Perpetual Exchange</title>
      <main className="earn">
        <section>
          <h2>Earn</h2>
          <p>Stake $ROMI and $ZLP to earn rewards.</p>
          <div className="table-wrapper">
            <Table
              TableHeader={ <th>$ROMI</th> }
              tables={ [
                {
                  col1: [
                    "Price",
                    "Wallet",
                    "Staked",
                  ],
                  col2: [
                    "$0.00",
                    "... $ROMI ($...)",
                    "... $ROMI ($...)",
                  ]
                },
                {
                  col1: [
                    "APR",
                    "Rewards",
                    "Multiplier Points APR",
                    "Boost Percentage",
                  ],
                  col2: [
                    "...%",
                    "$...",
                    "100.00%",
                    "...%",
                  ]
                },
                {
                  col1: [
                    "Total Staked",
                    "Total Supply",
                  ],
                  col2: [
                    "0 $ROMI ($...)",
                    "10,000 $ROMI ($10)",
                  ]
                }
              ] }
              children={
                <div className="btn-wrapper">
                  <AccentBtn text="Buy $ROMI" />
                </div>
              }
            />

            <Table
              TableHeader={ <th>$ZLP (Ethereum)</th> }
              tables={ [
                {
                  col1: [
                    "Price",
                    "Wallet",
                    "Staked",
                  ],
                  col2: [
                    "$...",
                    "... $ZLP ($...)",
                    "... $ZLP ($...)",
                  ]
                },
                {
                  col1: [
                    "APR",
                    "Rewards",
                  ],
                  col2: [
                    "...%",
                    "$...",
                  ]
                },
                {
                  col1: [
                    "Total Staked",
                    "Total Supply",
                  ],
                  col2: [
                    "... $ZLP ($...)",
                    "... $ZLP ($...)",
                  ]
                }
              ] }
              children={
                <div className="btn-wrapper">
                  <AccentBtn text="Buy $ZLP" />
                  <AccentBtn text="Sell $ZLP" />
                </div>
              }
            />

            <Table
              TableHeader={ <th>Escrowed $ROMI</th> }
              tables={ [
                {
                  col1: [
                    "Price",
                    "Wallet",
                    "Staked",
                  ],
                  col2: [
                    "$0.00",
                    "... esROMI ($...)",
                    "... esROMI ($...)",
                  ]
                },
                {
                  col1: [
                    "APR",
                    "Multiplier Points APR",
                  ],
                  col2: [
                    "...%",
                    "100.00%",
                  ]
                },
                {
                  col1: [
                    "Total Staked",
                    "Total Supply",
                  ],
                  col2: [
                    "... esROMI ($...)",
                    "1,023,379 esROMI ($1,053)",
                  ]
                }
              ] }
              children={
                <div className="btn-wrapper">
                  <AccentBtn text="Connect Wallet" />
                </div>
              }
            />

            <Table
              TableHeader={ <th>Total Rewards</th> }
              tables={ [{
                col1: [
                  "ETH (WETH)",
                  "$ROMI",
                  "Escrowed $ROMI",
                  "Multiplier Points",
                  "Staked Multiplier Points",
                  "Total",
                ],
                col2: [
                  "... ($...)",
                  "... ($...)",
                  "... ($...)",
                  "...",
                  "...",
                  "$...",
                ]
              }] }
              children={
                <div className="btn-wrapper">
                  <AccentBtn text="Connect Wallet" />
                </div>
              }
            />
          </div>
        </section>

        <section>
          <h2>Vest</h2>
          <p>Convert esROMI tokens to $ROMI tokens.</p>
          <p>Please read the vesting details before using the vaults.</p>

          <div className="table-wrapper">
            <Table
              TableHeader={ <th>$ROMI Vault</th> }
              tables={ [
                {
                  col1: [
                    "Staked Tokens",
                    "Reserved for Vesting",
                    "Vesting Status",
                    "Claimable",
                  ],
                  col2: [
                    "...",
                    "0.00 / ...",
                    "0.0000 / 0.0000",
                    "0.0000 $ROMI",
                  ]
                }
              ] }
              children={
                <div className="btn-wrapper">
                  <AccentBtn text="Connect Wallet" />
                </div>
              }
            />

            <Table
              TableHeader={ <th>$ZLP Vault</th> }
              tables={ [
                {
                  col1: [
                    "Staked Tokens",
                    "Reserved for Vesting",
                    "Vesting Status",
                    "Claimable",
                  ],
                  col2: [
                    "...$ZLP",
                    "0.00 / ...",
                    "0.0000 / 0.0000",
                    "0.0000 $ROMI",
                  ]
                }
              ] }
              children={
                <div className="btn-wrapper">
                  <AccentBtn text="Connect Wallet" />
                </div>
              }
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default Earn