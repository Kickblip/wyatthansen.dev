import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import { tagColors } from "@/app/config"

import { Metadata } from "next"
import Link from "next/link"
import { Mdx } from "@/components/mdx-components"
import GithubLink from "@/components/GithubLink"
import DeploymentLink from "@/components/DeploymentLink"
import { FiChevronLeft } from "react-icons/fi"

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

  if (!post) notFound()

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:gap-10">
        <article className="py-6 prose dark:prose-invert mt-10 w-full md:flex-1 min-w-0">
          <div className="mb-5 flex gap-1">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="inline-block rounded py-0.5 px-1 text-xs font-medium text-black"
                style={{ backgroundColor: tagColors[tag] ?? "#eaeaea" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-2">{post.title}</h1>

          {post.description && <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">{post.description}</p>}

          <div className="flex gap-4 items-center md:hidden not-prose">
            <GithubLink href={post.github} />
            <DeploymentLink href={post.live} />
          </div>

          <hr className="my-10" />
          <Mdx code={post.body.code} />
          <hr className="my-10" />

          {allPosts
            .filter((additionalPost) => additionalPost._id !== post._id)
            .slice(0, 3)
            .map((post) => (
              <article
                key={post._id}
                className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 w-full text-center md:text-left mb-6 md:mb-0"
              >
                <Link href={post.slug} className="md:w-[40%] w-full overflow-hidden">
                  {/* eslint-disable-next-line */}
                  <img className="object-cover rounded w-full h-full aspect-video" src={post.cover} alt={post.title} />
                </Link>
                <div className="w-full md:w-[60%]">
                  <div className="p-0 md:mt-8 flex gap-1 flex-wrap max-w-md">
                    {post.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-block rounded py-0.5 px-1 text-xs font-medium text-black"
                        style={{ backgroundColor: tagColors[tag] ?? "#eaeaea" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={post.slug} className="no-underline">
                    <h2 className="text-2xl font-bold hover:underline cursor-pointe mb-0 mt-0.5">{post.title}</h2>
                  </Link>
                  <div className="text-sm dark:text-[#9c9c9c] -mt-4 text-[#737478]">
                    {post.description && (
                      <p>{post.description.length > 100 ? post.description.substring(0, 100) + "..." : post.description}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 no-underline hover:underline text-black dark:text-white font-medium"
          >
            <FiChevronLeft size={18} />
            <p>All Posts</p>
          </Link>
        </article>

        <aside className="hidden md:block md:w-44 lg:w-52 mt-10">
          <div className="sticky top-6 self-start h-fit flex flex-col gap-2">
            <GithubLink href={post.github} />
            <DeploymentLink href={post.live} />
          </div>
        </aside>
      </div>
    </div>
  )
}
