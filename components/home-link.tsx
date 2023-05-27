"use client"

import { useTheme } from "next-themes"
import { withRouter, NextRouter } from "next/router"

interface HomeLinkProps {
    router: NextRouter
}

const HomeLink: React.FC<HomeLinkProps> = ({ router }) => {
    const { setTheme, theme } = useTheme()

    const handleButtonClick = () => {
        router.push("/")
    }

    return (
        <button onClick={handleButtonClick} className="border rounded-md w-6 h-6 flex items-center justify-center">
            <span className="sr-only">Go Home</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 20 20">
                <path
                    fillRule="evenodd"
                    d="M10 1.586l8 8V20a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5H8v5a1 1 0 01-1 1H3a1 1 0 01-1-1V9.586l8-8zm2 .414a1 1 0 00-2 0V3.879l2-.707v-.172z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    )
}

export default withRouter(HomeLink)
