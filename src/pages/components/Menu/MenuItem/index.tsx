import { Link } from "react-router-dom"

interface IMenuProps{
    href: string
    label: string
    icon?: string
}
export function MenuItem( { href, label, icon }: IMenuProps) {
    return (
        <Link to={href}>
            <span>{icon}</span>
            <a className="nav-link">{label}</a>
        </Link>
    )
}