import Button from "@/components/Button";
import { builder } from "@/utils/fetches/client";
import Image from "next/image";
import Link from "next/link";

export default function Hero3({ data }:any) {
    const { title, tagline, text, button, button2, images, imageOffset } = data;

    console.log("Hero2 Data: ", data);
    // console.log("TAGLINE LINK: ", title, tagline);
    
    return (
        <section className="min-h-screen flex flex-col justify-center overflow-hidden">            
            <div
                className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary dark:opacity-30 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                />
            </div>

            <div data-row className="grid grid-cols-2 gap-16">
                <div className="space-y-8 flex flex-col justify-center">
                    <div>
                        <div className="flex mb-2">
                            {tagline && tagline.link &&
                                <Link href={tagline.link} className="group w-auto text-sm">
                                    <p>
                                        <span className="opacity-80 group-hover:opacity-100 duration-200">{tagline.text}</span>
                                        {tagline.link && 
                                            <span className="text-primary ml-2 relative"> 
                                                Read More
                                                <span className="absolute top-full left-0 h-[1px] w-0 group-hover:w-full duration-200 bg-primary" />
                                            </span>
                                        }
                                    </p>
                                </Link>
                            }
                            {tagline && !tagline.link &&
                                <div className="group w-auto">
                                    <p className="px-4 py-1 border border-dark dark:border-light border-opacity-20 dark:border-opacity-50 rounded-full">
                                        {tagline.text}
                                        {tagline.link && <span className="text-primary"> Read More</span>}
                                    </p>
                                </div>
                            }
                        </div>

                        <h1>{title}</h1>
                    </div>

                    {text && <p>{text}</p>}

                    {button &&
                        <div className="flex flex-wrap gap-4">
                            <Button text={button.text} link={button.link} color={button.variant} />
                            {button2 && <Button text={button2.text} link={button2.link} color={button2.variant} />}
                        </div>
                    }
                </div>

                <div className="grid grid-cols-3 grid-rows-2 gap-4 grid-flow-col">
                    {images.map((image:any, i:number) => {
                        const imageURL = builder.image(image).url();

                        return (
                            <div 
                                key={i} 
                                className={`aspect-[2/3] relative rounded-xl overflow-hidden shadow-xl border-2 border-light dark:border-dark`}
                                style={{ transform: i == 0 || i == 1 ? `translateY(${imageOffset}%)` : i == 4 || i == 5 ? `translateY(-${imageOffset}%)` : 'translateY(0%)' }}
                            >
                                <Image src={imageURL} alt="" fill className="object-cover" />
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}