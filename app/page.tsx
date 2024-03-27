import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import HomeIntro from "@/components/home-intro"
import { tagColors } from "./tags"

export default function Home() {
    return (
        <div className="prose dark:prose-invert w-full max-w-none">
            <HomeIntro
                title="Hi, I'm Wyatt"
                description="I like machine learning, robotics, and web development. I'm currently a first-year university student working in the Human-Aware Planning and AI lab at CSU. Here's some of the projects I've worked on..."
            />
            <hr className="md:my-4 my-8" />
            {allPosts.map((post) => (
                <article
                    key={post._id}
                    className="flex flex-col md:flex-row items-center md:items-start mb-6 md:mb-0 md:space-x-8 w-full text-center md:text-left"
                >
                    <Link href={post.slug} className="aspect-w-16 aspect-h-9 w-full md:w-[40%] overflow-hidden">
                        {/* eslint-disable-next-line */}
                        <img className="object-cover rounded w-full h-full" src={post.cover} alt={post.title} />
                    </Link>
                    <div className="w-full md:w-[60%]">
                        <div className="p-0 md:mt-10">
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
                            <h2 className="text-2xl font-bold hover:underline cursor-pointer mb-1 mt-2">{post.title}</h2>
                        </Link>
                        <div className="text-sm dark:text-[#9c9c9c] text-[#737478]">
                            {post.description && <p>{post.description}</p>}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}
