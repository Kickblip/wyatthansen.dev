import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

const components = {
  Image,
  ImageWithCaption,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}

function ImageWithCaption({
  src,
  alt = "",
  caption,
  width = 1200,
  height = 800,
}: {
  src: string
  alt?: string
  caption?: string
  width?: number
  height?: number
}) {
  return (
    <div className="not-prose flex flex-col gap-2 my-6">
      <Image src={src} alt={alt} width={width} height={height} className="w-full rounded" />
      {caption ? <p className="text-sm text-neutral-400 italic">{caption}</p> : null}
    </div>
  )
}
