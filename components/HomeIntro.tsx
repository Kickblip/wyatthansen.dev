import { LINKS } from "@/app/config"
import Link from "next/link"

export default function HomeIntro({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-start mb-4">
      <h2 className="text-5xl dark:text-neutral-200 text-neutral-800 mb-4">{title}</h2>
      <div className="flex flex-row gap-4 pb-2 pt-1 text-lg dark:text-neutral-200 text-neutral-800 opacity-80">
        <Link href={LINKS.linkedin} className="hover:opacity-100" target="_blank">
          Linkedin
        </Link>
        <Link href="/resume.pdf" className="hover:opacity-100" target="_blank">
          Resume
        </Link>
      </div>
      <p className="dark:text-neutral-400 text-neutral-600">{description}</p>
    </div>
  )
}
