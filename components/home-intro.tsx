import React from "react"

interface Props {
    title: string
    description: string
}

const HomeIntro: React.FC<Props> = ({ title, description }) => {
    return (
        <div>
            <h2 className="text-5xl dark:text-[#d4d4d4] text-[#39c9c9c]">{title}</h2>
            <p className="text-extrabold dark:text-[#9c9c9c] text-[#737478]">{description}</p>
        </div>
    )
}

export default HomeIntro
