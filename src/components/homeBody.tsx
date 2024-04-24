"use client"
import SwipeText from "@/components/SwipeText";
import MouseContainer from "@/utils/Mouse/MouseContainer";
import { ButtonGroup, Button as NextUiButton } from "@nextui-org/react";
import Image from "next/image";

export default function HomeBody() {

    return (
        <>
        <section className="min-h-screen md:block flex items-center">
                
            {/* Title */}
            <div data-row>
                <h1 className="text-center">
                    <SwipeText  text="Award Winning," />
                    <SwipeText  text="Full-Stack Engineer" />

                    <div className="flex items-center justify-between">
                        <Image src="/littleSmile.svg" width={25} height={25} alt="" />
                        <SwipeText className="font-regular text-[10px]" text="Scroll for more" />
                        <Image src="/littleXFlat.svg" className="" width={22} height={22} alt="" />
                    </div>
                </h1>
            
                <div className="relative aspect-video rounded-md overflow-hidden">
                    <Image src="/headshot.png" width={1600} height={1080} className="contain" alt="Jacob Brewer" />
                </div>
            </div>

        </section>
        <section className="min-h-screen flex items-center justify-center">
            <p className="font-semibold text-xl">Hello, my name is Jacob Brewer.</p>
        </section>
    </>
)}