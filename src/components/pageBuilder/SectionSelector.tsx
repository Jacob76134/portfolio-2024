import CTA1 from "./CTA/CTA1";
import CTA2 from "./CTA/CTA2";
import Hero1 from "./Hero/Hero1";
import Hero2 from "./Hero/Hero2";
import Hero3 from "./Hero/Hero3";

export default function SectionSelector({ data }:any) {
    // console.log("Data Passed: ", data);

    return (
        <>
            {/* Hero Selection */}
            {data.section == 'hero' && data.heroType == 'hero1' && <Hero1 data={data} />}
            {data.section == 'hero' && data.heroType == 'hero2' && <Hero2 data={data} />}
            {data.section == 'hero' && data.heroType == 'hero3' && <Hero3 data={data} />}

            {data.section == 'cta' && data.ctaType == 'cta1' && <CTA1 data={data} />}
            {data.section == 'cta' && data.ctaType == 'cta2' && <CTA2 data={data} />}
        </>
    )
}