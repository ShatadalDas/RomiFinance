import { Link } from "react-router-dom"
import "./AccentBtn.scss"

interface Props {
    text: string
    className?: string
    link?: string
}

function AccentBtn({ text, className, link }: Props) {
    return (
        <Link to={ link ? link : "/" }>
            <button className={ "btn-accent" + " " + className }>
                { text }
            </button>
        </Link>
    )
}

export default AccentBtn