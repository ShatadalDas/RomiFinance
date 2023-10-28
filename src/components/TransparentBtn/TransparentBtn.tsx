import { ReactNode } from "react"
import "./TransparentBtn.scss"
import { Link } from "react-router-dom"

interface Props {
    children: ReactNode | string
    className?: String
    link?: string
}

function TransparentBtn({ children, className, link }: Props) {
    return (
        <Link to={link ? link : "/"}>
            <button className={ "btn-transparent" + " " + className }>
                { children }
            </button>
        </Link>
    )
}

export default TransparentBtn