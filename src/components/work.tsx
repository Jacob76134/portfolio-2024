"use client"
import Image from "next/image"
import Link from "next/link"
import { WORK } from "@/utils/constants"

export default function Work() {
    return (
        <section className="bg-light text-dark relative">
            <Image src="bigSmile.svg" className="absolute -top-32 right-0" width={700} height={700} alt="" />
            <Image src="bigXFlat.svg" className="absolute -bottom-48 -left-36 md:left-0 " width={400} height={400} alt="" />
            <div data-row className="!pb-0">
                <h2 className="text-5xl font-semibold">Work</h2>
            </div>
            <div data-row className="gap-2">
                {WORK.map((work, i) => (
                    <div key={i} className="flex flex-col justify-between gap-2 md:gap-4">
                        <Link href={work.url} rel="noopener noreferrer" className="aspect-video rounded-md overflow-hidden relative">
                            <Image src={work.image} fill alt="" className="contain" />
                        </Link>

                        <div className="text-dark mt-2 mb-16">
                            <div className="flex flex-col md:flex-row items-start justify-between">
                                <div>
                                    <h3 className="text-2xl leading-6 font-semibold normal-case">{work.title}</h3>
                                    <p className="text-base font-semibold leading-4">{work.date}</p>
                                </div>
                                <Link href={work.url} rel="noopener noreferrer" className="font-semibold tracking-[-1px] text-base uppercase pt-2 md:pt-0">Visit Site</Link>
                            </div>
                            <p className="leading-5 text-base pt-2 md:pt-4">{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}