import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { tagColors } from "../../tags"

import { Metadata } from "next"
import Link from "next/link"
import { Mdx } from "@/components/mdx-components"

interface PostProps {
    params: {
        slug: string[]
    }
}

async function getPostFromParams(params: PostProps["params"]) {
    const slug = params?.slug?.join("/")
    const post = allPosts.find((post) => post.slugAsParams === slug)

    if (!post) {
        null
    }

    return post
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
    const post = await getPostFromParams(params)

    if (!post) {
        return {}
    }

    return {
        title: post.title,
        description: post.description,
    }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
    return allPosts.map((post) => ({
        slug: post.slugAsParams.split("/"),
    }))
}

export default async function PostPage({ params }: PostProps) {
    const post = await getPostFromParams(params)

    if (!post) {
        notFound()
    }

    return (
        <article className="py-6 prose dark:prose-invert mt-10">
            <div className="mb-5">
                {Object.entries(post.tags).map(([tag, active]) => (
                    <span
                        key={tag}
                        className="inline-block rounded py-0.5 px-1 m-1 text-xs font-medium text-black"
                        style={{ backgroundColor: active ? tagColors[tag] : "#eaeaea" }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <h1 className="mb-2">{post.title}</h1>
            {post.description && <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">{post.description}</p>}
            <hr className="my-4" />
            <Mdx code={post.body.code} />

            {allPosts
                .filter((additionalPost) => additionalPost._id !== post._id)
                .slice(0, 3)
                .map((post) => (
                    <article key={post._id} className="flex items-start space-x-8 w-full">
                        <div className="aspect-w-16 aspect-h-9 w-[40%] overflow-hidden">
                            <img className="object-cover rounded w-full h-full" src={post.cover} alt={post.title} />
                        </div>
                        <div className="w-[60%]">
                            <div className="p-0 mt-10">
                                {Object.entries(post.tags).map(([tag, active]) => (
                                    <span
                                        key={tag}
                                        className="inline-block rounded py-0.5 px-1 m-1 text-xs font-medium text-black"
                                        style={{ backgroundColor: active ? tagColors[tag] : "#eaeaea" }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link href={post.slug} className="no-underline">
                                <h2 className="text-2xl font-bold hover:underline cursor-pointe mb-1 mt-2">{post.title}</h2>
                            </Link>
                            <div className="text-sm dark:text-[#9c9c9c] text-[#737478]">
                                {post.description && <p>{post.description}</p>}
                            </div>
                        </div>
                    </article>
                ))}
        </article>
    )
}
