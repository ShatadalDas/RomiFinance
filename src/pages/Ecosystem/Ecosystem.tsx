import { Table } from "../../components"
import "./Ecosystem.scss"

function Ecosystem() {
    return (
        <>
            <title>Ecosystem | Decentralized Perpetual Exchange</title>
            <main className="ecosystem">
                <h2>Telegram Groups</h2>
                <p>Community-led Telegram groups.</p>
                <div className="table-wrapper">
                    <Table
                        TableHeader={ <th>$ROMI</th> }
                        tables={ [{
                            col1: ["Link", "About"],
                            col2: ["t.me", "Telegram Group"]
                        }] }
                    />
                    <Table
                        TableHeader={ <th>$ROMI</th> }
                        tables={ [{
                            col1: ["Link", "About"],
                            col2: ["t.me", "Telegram Announcements"]
                        }] }
                    />
                </div>
            </main>
        </>
    )
}

export default Ecosystem