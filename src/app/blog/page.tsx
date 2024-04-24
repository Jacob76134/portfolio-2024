import BlogCards from "@/components/blog/blogCards";
import { getBlogPageData } from "@/utils/fetches/blog"
import { locate } from "../../../sanityLocate";

export default async function Blog() {
    const data = await getBlogPageData();
    // console.log("DATA: ", data.data);

    return (
        <section>
            <div data-row>
                <h1 className="text-center">Blog Page</h1>
                <BlogCards posts={data.data} />
            </div>
        </section>    
    )
}