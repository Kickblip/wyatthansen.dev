import React from "react"

interface Props {
    title: string
    description: string
}

const HomeIntro: React.FC<Props> = ({ title, description }) => {
    return (
        <div>
            <h2 className="text-5xl">{title}</h2>
            <p className="text-semibold">{description}</p>
        </div>
    )
}

export default HomeIntro
