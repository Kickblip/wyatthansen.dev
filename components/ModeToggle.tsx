"use client"

import { useTheme } from "next-themes"
import { BsMoon } from "react-icons/bs"
import { IoSunnyOutline } from "react-icons/io5"
import { useEffect, useState } from "react"

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border rounded-md w-8 h-8 flex items-center justify-center"
    >
      {theme !== "dark" ? <BsMoon size={18} /> : <IoSunnyOutline size={18} />}
    </button>
  )
}
