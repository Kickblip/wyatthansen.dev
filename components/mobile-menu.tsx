import Link from "next/link"
import Image from "next/image"

interface LinkProp {
    href: string | undefined
    text: string
}

interface MobileMenuProps {
    github?: LinkProp
    live?: LinkProp
}

export function MobileMenu({ github, live }: MobileMenuProps) {
    return (
        <div className="w-full flex-col block md:hidden">
            <div className="space-x-4">
                <Link
                    href={github?.href ?? "#"}
                    target="_blank"
                    className={`inline-flex items-center px-4 border border-black dark:border-white text-sm leading-5 font-medium rounded-md text-black dark:text-white ${
                        github?.href ? "bg-transparent" : "bg-transparent border-[#808080] pointer-events-none"
                    } dark:hover:bg-[#2e2e2e] hover:bg-[#ebebeb]`}
                >
                    <Image
                        src={github?.href ? "/icons/github.png" : "/icons/none.png"}
                        alt="Github Icon"
                        width={github?.href ? 20 : 15}
                        height={github?.href ? 20 : 15}
                        className="mr-2 invert-0 dark:invert"
                    />
                    {github?.text ?? "Closed Source"}
                </Link>
                <Link
                    href={live?.href ?? "#"}
                    target="_blank"
                    className={`inline-flex items-center px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white dark:text-black ${
                        live?.href ? "bg-black dark:bg-white" : "bg-gray-800 dark:bg-gray-300 pointer-events-none"
                    } hover:bg-[#2e2e2e] dark:hover:bg-[#ebebeb]`}
                >
                    <Image
                        src={live?.href ? "/icons/external.png" : "/icons/none.png"}
                        alt="Live Icon"
                        width={live?.href ? 20 : 15}
                        height={live?.href ? 20 : 15}
                        className="mr-2 invert dark:invert-0"
                    />
                    {live?.text ?? "Project Not Live"}
                </Link>
            </div>
        </div>
    )
}
