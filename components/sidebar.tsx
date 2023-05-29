import Link from "next/link"

interface LinkProp {
    href: string
    text: string
}

interface SidebarMenuProps {
    github?: LinkProp
    live?: LinkProp
}

export function SidebarMenu({ github, live }: SidebarMenuProps) {
    return (
        <div className="w-64 p-4">
            <nav>
                <ul>
                    {github && (
                        <li>
                            <Link href={github.href}>
                                <button className="p-2 bg-blue-500 text-white rounded">{github.text}</button>
                            </Link>
                        </li>
                    )}
                    {live && (
                        <li>
                            <Link href={live.href}>
                                <button className="p-2 bg-blue-500 text-white rounded">{live.text}</button>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    )
}
