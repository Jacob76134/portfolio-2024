import SectionSelector from "@/components/pageBuilder/SectionSelector";
import { getPageData } from "@/utils/fetches/page";
import { notFound } from "next/navigation";

type Section = {
    _type: string;
    heroType: string;
    section: string;
    sections: any;
    _key: string;
}

export default async function Page({ params }:any) {
    const data = ((await getPageData(params.slug)).data[0]);

    if(!data) {
        return notFound()
    } else {
        const { sections } = data;

        // console.log("Data:", data);
        // console.log("Sections: ", data.sections)

        return (
            <>
                {sections.map((section:Section, i:number) => {
                    return (
                        <SectionSelector key={i} data={section} />
                    )
                })}
            </>
        )
    }

}