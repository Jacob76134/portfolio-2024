import BreadcrumbTrail from "@/components/Breadcrumbs";
import { myPortableTextComponents } from "@/components/blog/PortableTextComponents";
import { convertTimestamp } from "@/utils/convertTimestamp";
import { getBlogPageData } from "@/utils/fetches/blog";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type BlogPostProps = {
    params: {
        slug: string;
    }
}

export default async function BlogPost({ params }:BlogPostProps) {
    const data = (await getBlogPageData(params.slug)).data[0];
    const { title, slug, mainImage, author, categories, body, publishedAt } = data;
    const date = convertTimestamp(publishedAt);

    // console.log("POST DATA BODY: ", body)

    return (
        <section>
            <div data-row className="space-y-8">
                <div>
                    <BreadcrumbTrail />
                </div>
                <h1>{title}</h1>
                <p>{date}</p>
                <div className="aspect-video bg-white dark:bg-black relative rounded-3xl overflow-hidden">
                    <Image src={mainImage.url} alt={mainImage.alt} title={mainImage.alt} fill className="object-cover" />
                </div>

                <div className="space-y-4">
                    <PortableText value={body} components={myPortableTextComponents}/>
                </div>
            </div>
        </section>
    )
}