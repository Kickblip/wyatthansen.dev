import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import HomeIntro from "@/components/home-intro"

const tagColors: {
    [key: string]: string
} = {
    TypeScript: "#7dd3fc",
    NextJS: "#fcd34d",
    TailwindCSS: "#7dd3fc",
    Pinecone: "#fca5a5",
    LangChain: "#c4b5fd",
    MongoDB: "#6ee7b7",
    JavaScript: "#f7df1e",
    Node: "#6ee7b7",
    APIs: "#fca5a5",
    Phaser3: "#feba74",
    ColyseusIO: "#c4b5fd",
    Python: "#7dd3fc",
    OpenCV: "#faa8d4",
    TFLite: "#feba74",
    "Raspberry Pi": "#d4d4d4",
    Puppeteer: "#f7df1e",
    AWS: "#7dd3fc",
    FFmpeg: "#6ee7b7",
    ThreeJS: "#feba74",
}

export default function Home() {
    return (
        <div className="prose dark:prose-invert w-full max-w-none">
            <HomeIntro
                title="Hi, I'm Wyatt"
                description="I like machine learning and algorithms.  I'm currently a senior in high school.  I started teaching myself coding in October 2022.  Here's some of the projects I've worked on..."
            />
            <hr className="my-4" />
            {allPosts.map((post) => (
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
        </div>
    )
}
