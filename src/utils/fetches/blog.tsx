import { client } from './client';

export const getBlogPageData = async (slug?: string, not: boolean = false) => {
    let query = '*[_type == "post"]';

    if (not && slug) {
        query += `[slug.current != "${slug}"]`;
    } else if (slug) {
        query += `[slug.current == "${slug}"]`;
    }

    query += `| order(publishedAt desc) {
        _id,
        title,
        slug,
        "author": author->{
            _id,
            name,
            "image": image.asset->url
        },
        publishedAt,
        "categories": categories[]->{
            title,
            description
        },
        mainImage {
          "url": asset->url,
          alt
        },
        body,
        excerpt,
    }`;

    const data = await client.fetch(query);

    return {
        data,
    };
};