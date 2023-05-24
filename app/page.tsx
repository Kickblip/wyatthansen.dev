import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import HomeIntro from "@/components/home-intro"

export default function Home() {
    return (
        <div className="prose dark:prose-invert w-full">
            <HomeIntro
                title="Hi, I'm Wyatt"
                description="I like machine learning and algorithms.  I'm currently a senior in high school.  I started teaching myself coding in October 2022.  Here's some of the projects I've worked on..."
            />
            <hr className="my-4" />
            {allPosts.map((post) => (
                <article key={post._id} className="flex items-start space-x-8 w-full">
                    <div className="aspect-w-16 aspect-h-9 w-[70%] overflow-hidden">
                        <img className="object-cover rounded w-full h-full" src={post.cover} alt={post.title} />
                    </div>
                    <div className="w-full">
                        <Link href={post.slug} className="no-underline">
                            <h2 className="text-2xl font-bold hover:underline cursor-pointer">{post.title}</h2>
                        </Link>
                        <div className="w-full">{post.description && <p>{post.description}</p>}</div>
                    </div>
                </article>
            ))}
        </div>
    )
}
