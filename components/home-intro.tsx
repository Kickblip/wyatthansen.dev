import React from "react"

interface Props {
    title: string
    description: string
}

const HomeIntro: React.FC<Props> = ({ title, description }) => {
    return (
        <div className="flex flex-col items-start mb-4">
            <h2 className="text-5xl dark:text-[#d4d4d4] text-[#39c9c9c] mb-4">{title}</h2>
            <div className="flex flex-row gap-4 mb-2 mt-1">
                <a
                    href="https://www.linkedin.com/in/wyatt-hansen-945088245/"
                    className="text-lg dark:text-[#d4d4d4] text-[#39c9c9c] opacity-80 hover:opacity-100"
                    target="_blank"
                >
                    Linkedin
                </a>
                <a
                    href="/resume.pdf"
                    className="text-lg dark:text-[#d4d4d4] text-[#39c9c9c] opacity-80 hover:opacity-100"
                    target="_blank"
                >
                    Resume
                </a>
            </div>
            <p className="text-extrabold dark:text-[#9c9c9c] text-[#505052]">{description}</p>
        </div>
    )
}

export default HomeIntro
