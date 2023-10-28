import "./Footer.scss"
import { TwitterSrc, MediumSrc, GithubSrc, TelegramSrc, DiscordSrc} from "../../assets"

function Footer() {
    return (
        <footer className="footer">
            <div className="logo">
                <img src="./NewLogo.png" alt="Logo" />
                <p className="company-name">Romi Finance</p>
            </div>

            <div className="social-links">
                <img src={TwitterSrc} alt="Twitter logo" />
                <img src={MediumSrc} alt="Medium logo" />
                <img src={GithubSrc} alt="Github logo" />
                <img src={TelegramSrc} alt="Telegram logo" />
                <img src={DiscordSrc} alt="Discord logo" />
            </div>

            <div>
                <p>Terms and Conditions</p>
                <p>Referral Terms</p>
                <p>Media Kit</p>
            </div>
        </footer>
    )
}

export default Footer