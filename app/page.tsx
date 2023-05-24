import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
    return (
        <div className="prose dark:prose-invert">
            {allPosts.map((post) => (
                <article key={post._id} className="flex items-start space-x-4">
                    <div className="aspect-w-16 aspect-h-9 w-[40%] overflow-hidden">
                        <img className="object-cover rounded w-full h-full" src={post.cover} alt={post.title} />
                    </div>
                    <div className="w-[60%]">
                        <Link href={post.slug} className="no-underline">
                            <h2 className="text-2xl font-bold hover:underline cursor-pointer">{post.title}</h2>
                        </Link>
                        {post.description && <p>{post.description}</p>}
                    </div>
                </article>
            ))}
        </div>
    )
}
