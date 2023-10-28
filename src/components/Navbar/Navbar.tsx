import "./Navbar.scss"
import { HamBurgerSrc, WalletSrc, EthSrc, ThreeDotSrc, CrossSrc } from "../../assets"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { pages } from "../../pages"
import { AccentBtn, TransparentBtn } from ".."

const PageLinks = () => (
    <ul className="page-links">
        <li>
            <NavLink to={ pages[0] } className={ ({ isActive }) => isActive ? "active" : "" }>Home</NavLink>
        </li>
        <li>
            <NavLink to={ pages[1] } className={ ({ isActive }) => isActive ? "active" : "" }>Dashboard</NavLink>
        </li>
        <li>
            <NavLink to={ pages[2] } className={ ({ isActive }) => isActive ? "active" : "" }>NFT</NavLink>
        </li>
        <li>
            <NavLink to={ pages[3] } className={ ({ isActive }) => isActive ? "active" : "" }>Earn</NavLink>
        </li>
        <li>
            <NavLink to={ pages[4] } className={ ({ isActive }) => isActive ? "active" : "" }>Buy</NavLink>
        </li>
        <li>
            <NavLink to={ pages[5] } className={ ({ isActive }) => isActive ? "active" : "" }>Referrals</NavLink>
        </li>
        <li>
            <NavLink to={ pages[6] } className={ ({ isActive }) => isActive ? "active" : "" }>Ecosystem</NavLink>
        </li>
        <li>
            <NavLink to={ pages[7] } className={ ({ isActive }) => isActive ? "active" : "" } target="_blank">About</NavLink>
        </li>
    </ul>
)

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className="header">
                <img className="menuIcon" src={ HamBurgerSrc } alt="menu icon" onClick={ () => setIsOpen(true) } />
                <nav className="navbar">
                    <div className="logo">
                        <img src="./NewLogo.png" alt="Logo" />
                        <p className="company-name">Romi Finance</p>
                    </div>

                    <PageLinks />

                    <div className="button-wrapper">
                        <AccentBtn text="Trade" />
                        <TransparentBtn
                            children={ <>
                                <img src={ WalletSrc } alt="wallet" />
                                <span>Connect</span>
                            </> }
                        />

                        <TransparentBtn
                            children={ <>
                                <img src={ EthSrc } alt="Ethereum Logo" />
                                <div className="line" aria-hidden></div>
                                <img src={ ThreeDotSrc } alt="Three Dots" />
                            </> }
                            className="network"
                        />
                    </div>
                </nav>
            </header>

            <aside className={ "sidemenu" + (isOpen ? " menu--open" : " menu--close") } data-sidemenu>
                <img className="crossIcon" src={ CrossSrc } alt="cross icon" onClick={ () => setIsOpen(false) } />
                <PageLinks />
            </aside>
        </>
    )
}

export default Navbar