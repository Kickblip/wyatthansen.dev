import Link from "next/link"
import Image from "next/image"

interface LinkProp {
    href: string | undefined
    text: string
}

interface SidebarMenuProps {
    github?: LinkProp
    live?: LinkProp
}

export function SidebarMenu({ github, live }: SidebarMenuProps) {
    return (
        <div className="w-64 p-4 flex-col">
            <nav className="space-y-4">
                <Link
                    href={github?.href ?? "#"}
                    target="_blank"
                    className={`inline-flex items-center px-4 py-2 border border-black dark:border-white text-sm leading-5 font-medium rounded-md text-black dark:text-white ${
                        github?.href ? "bg-transparent" : "bg-transparent"
                    } hover:bg-indigo-500`}
                >
                    <Image
                        src={github?.href ? "/icons/github.png" : "/icons/none.png"}
                        alt="Github Icon"
                        width={20}
                        height={20}
                        className="mr-2 invert-0 dark:invert"
                    />
                    {github?.text ?? "Closed Source"}
                </Link>
                <Link
                    href={live?.href ?? "#"}
                    target="_blank"
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white dark:text-black ${
                        live?.href ? "bg-black dark:bg-white" : "bg-gray-700 dark:bg-gray-300"
                    } hover:bg-indigo-500`}
                >
                    <Image
                        src={live?.href ? "/icons/external.png" : "/icons/none.png"}
                        alt="Live Icon"
                        width={20}
                        height={20}
                        className="mr-2 invert dark:invert-0"
                    />
                    {live?.text ?? "Project Not Live"}
                </Link>
            </nav>
        </div>
    )
}
