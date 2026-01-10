import Link from "next/link"
import { FaGithub, FaX } from "react-icons/fa6"

export default function GithubLink({ href }: { href?: string }) {
  return (
    <Link
      href={href ?? "#"}
      target="_blank"
      className={`flex items-center px-4 py-2 gap-2 text-sm rounded-md
        border border-neutral-400 dark:border-neutral-400
        dark:hover:bg-neutral-800 hover:bg-neutral-200
        text-neutral-950 dark:text-neutral-100
        cursor-pointer
        ${href ? "" : "pointer-events-none"}`}
    >
      {href ? <FaGithub size={16} /> : <FaX size={14} />}
      {href ? "Source Code" : "Closed Source"}
    </Link>
  )
}
