import { convertTimestamp } from "@/utils/convertTimestamp";
import Image from "next/image";

export default function BlogCards({posts}:any) {
    return (
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post:any) => {
                const { title, slug, mainImage, author, categories, body, excerpt, publishedAt } = post;
                const date = convertTimestamp(publishedAt);
                // console.log("BODY: ", body);

                return (
                    <article key={post.id} className="flex flex-col items-start justify-between">
                        <div className="w-full space-y-4">
                            {/* Image */}
                            <div className="relative w-full aspect-[16/9]">
                                <Image
                                    src={mainImage.url}
                                    alt=""
                                    fill
                                    className="rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                            </div> 

                            {/* Title & Publish Date */}
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-6">
                                    <a href={`/blog/${post.slug.current}`}>
                                        {title}
                                    </a>
                                </h3>

                                <div className="text-xs">
                                    <time dateTime={publishedAt} className="">{date}</time>
                                </div>
                            </div>
                            

                            <div>
                                <p>{excerpt}</p>
                            </div>
                        </div>


                        <div className="w-full flex items-center gap-4 justify-between mt-4">
                            <div className="relative flex items-center gap-x-4">
                                <Image src={author.image} alt={author.image.alt} width={40} height={40} className="h-10 w-10 rounded-full bg-black" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold">
                                        <a href={post.author.href}>
                                            {author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="group relative flex flex-wrap gap-4">
                                {categories.map((category:any, i:number) => (
                                    <span key={i} className="text-xs">{category.title}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                )})}
        </div>
    )
}