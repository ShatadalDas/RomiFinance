import { AccentBtn, TransparentBtn } from ".."
import "./TokenCard.scss"

interface Props {
    src: string
    heading: string
    des1: string
    des2: string
    alt?: string
}

function TokenCard({ src, heading, des1, des2, alt }: Props) {
    return (
        <section className="token-card">
            <div>
                <img src={ src } alt={ alt } />
                <h2>{ heading }</h2>
            </div>
            <p>{ des1 }</p>
            <p>{ des2 }</p>
            <div className="btn-wrapper">
                <AccentBtn text="Buy"/>
                <TransparentBtn children="Read More" />
            </div>
        </section>
    )
}

export default TokenCard