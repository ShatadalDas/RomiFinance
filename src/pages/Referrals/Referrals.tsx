import { AccentBtn } from "../../components"
import "./Referrals.scss"
import { useState } from "react"

function Referrals() {
    const [active, setActive] = useState("first")

    return (
        <>
            <title>Referrals | Decentralized Perpetual Exchange</title>
            <main className="referrals">
                <h2>Referrals</h2>
                <p>Get fee discounts and earn rebates through the $ZOMI referral program. For more information, please read the referral program details.</p>
                <div className="btn-wrapper">
                    <button
                        className={ "btn-1" + (active === "first" ? " active" : "") }
                        onClick={ () => setActive("first") }
                    >
                        Traders
                    </button>
                    <button
                        className={ "btn-2" + (active === "second" ? " active" : "") }
                        onClick={ () => setActive("second") }
                    >
                        Affiliates
                    </button>
                </div>
                <div className={"card" + (active === "first" ? " active" : "")} >
                    <h3>Enter Referral Code</h3>
                    <div>
                        <p>Please input a referral code to benifit from fee discounts.</p>
                    </div>
                    <AccentBtn text="Connect Wallet" />
                </div>
                <div className={"card" + (active === "second" ? " active" : "")} >
                    <h3>Generate Referral Code</h3>
                    <div>
                        <p>Looks like you don't have a referral code to share.</p>
                        <p>Create one now and start earning rebates!</p>
                    </div>
                    <AccentBtn text="Connect Wallet" />
                </div>
            </main>
        </>
    )
}

export default Referrals