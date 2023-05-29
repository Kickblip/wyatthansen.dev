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
            <nav>
                <Link
                    href={github?.href ?? "#"}
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white ${
                        github?.href ? "bg-indigo-600" : "bg-red-600"
                    } hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out block mb-2`}
                >
                    <Image
                        src={github?.href ? "/icons/github.png" : "/icons/none.png"}
                        alt="Github Icon"
                        width={20}
                        height={20}
                        className="mr-2 invert dark:invert-0"
                    />
                    {github?.text ?? "No Link Provided"}
                </Link>
                <Link
                    href={live?.href ?? "#"}
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white ${
                        live?.href ? "bg-indigo-600" : "bg-red-600"
                    } hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out block mb-2`}
                >
                    <Image
                        src={live?.href ? "/icons/external.png" : "/icons/none.png"}
                        alt="Live Icon"
                        width={20}
                        height={20}
                        className="mr-2 invert dark:invert-0"
                    />
                    {live?.text ?? "No Link Provided"}
                </Link>
            </nav>
        </div>
    )
}
