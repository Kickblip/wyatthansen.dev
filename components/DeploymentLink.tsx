import Link from "next/link"
import { FaX } from "react-icons/fa6"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

export default function DeploymentLink({ href }: { href?: string }) {
  return (
    <Link
      href={href ?? "#"}
      target="_blank"
      className={`flex items-center px-4 py-2 gap-2 text-sm rounded-md
        border border-neutral-400 dark:border-neutral-400
        dark:hover:bg-neutral-300 hover:bg-neutral-700
        text-neutral-100 dark:text-neutral-950
        bg-neutral-950 dark:bg-neutral-100
        text-neutral-200 dark:text-neutral-300
        cursor-pointer
        ${href ? "" : "pointer-events-none"}`}
    >
      {href ? <FaArrowUpRightFromSquare size={16} /> : <FaX size={14} />}
      {href ? "View Deployment" : "Project Not Live"}
    </Link>
  )
}
