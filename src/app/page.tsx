import HomeBody from "@/components/homeBody";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "J2 Boilerplate",
    description: "this is a boilerplate for J2 applications. It includes a variety of components and styles to help you get started with your project.",
    openGraph: {
      title: "J2 Boilerplate",
      description: "this is a boilerplate for J2 applications. It includes a variety of components and styles to help you get started with your project.",
      url: "https://j2-boilerplate.vercel.app/",
      siteName: "J2 Boilerplate",
      images: 'https://j2-boilerplate.vercel.app/Meta-Info-Thumbnail.png',
    },
}

export default function Home() {
    return(
        <>
            <HomeBody />
        </>
    )
}
