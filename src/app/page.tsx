import About from "@/components/about";
import HomeBody from "@/components/homeBody";
import Work from "@/components/work";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jacob Brewer",
    description: "Jacob Brewer is a full-stack engineer with a focus on front-end development.",
    openGraph: {
      title: "Jacob Brewer",
      description: "Jacob Brewer is a full-stack engineer with a focus on front-end development.",
      url: "https://jacobbrewer.dev/",
      siteName: "Jacob Brewer",
    },
}

export default function Home() {
    return(
        <>
            <HomeBody />
            <Work />
            <About />
        </>
    )
}
