"use client"

import { useEffect, useState } from "react"

const CAL_URL = "https://cal.com/wyatthansen/meet?duration=30&overlayCalendar=true"

export default function CalEmbedButton() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-2 inline-flex items-center rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 no-underline transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
      >
        Schedule a chat
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Schedule a meeting"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false)
          }}
        >
          <div className="relative h-[82vh] w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-xl dark:bg-neutral-950">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 bg-white text-xl leading-none text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Close scheduling popup"
            >
              &times;
            </button>
            <iframe title="Schedule a meeting" src={CAL_URL} className="h-full w-full border-0" />
          </div>
        </div>
      )}
    </>
  )
}
