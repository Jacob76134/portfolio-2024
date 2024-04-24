import Button from "@/components/Button";
import { builder } from "@/utils/fetches/client";
import Image from "next/image";
import Link from "next/link";

export default function Hero2({ data }:any) {
    const { title, tagline, text, button, button2, image, hero2Position } = data;
    const imageURL = builder.image(image).url();

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
                    <div className="flex">
                        {tagline && tagline.link &&
                            <Link href={tagline.link} className="group w-auto">
                                <p className="px-4 py-1 border border-dark dark:border-light border-opacity-20 dark:border-opacity-50 group-hover:border-opacity-50 dark:group-hover:border-opacity-80 rounded-full">
                                    {tagline.text}
                                    {tagline.link && 
                                        <span className="text-primary ml-2 relative"> 
                                            Read More
                                            <span className="absolute top-full left-0 h-0.5 w-0 group-hover:w-full duration-200 bg-primary" />
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
                    {text && <p>{text}</p>}
                    {button &&
                        <div className="flex flex-wrap gap-4">
                            <Button text={button.text} link={button.link} color={button.variant} />
                            {button2 && <Button text={button2.text} link={button2.link} color={button2.variant} />}
                        </div>
                    }
                </div>

                {hero2Position === 'default' && 
                    <div>
                        <div className="aspect-[10/10] h-full bg-black relative w-full rounded-2xl overflow-hidden">
                            <Image src={imageURL} alt="" fill className="object-cover" />
                        </div>
                    </div>
                }
            </div>

            {hero2Position === 'cover' && 
                <div className="absolute bg-black translate-x-16 w-1/2 h-full right-0">
                    <Image src={imageURL} alt="" fill className="object-cover" />
                </div>
            }

            {hero2Position === 'large' && 
                <div className="absolute bg-black translate-x-16 w-1/2 right-0 top-16 bottom-16 rounded-l-2xl overflow-hidden">
                    <Image src={imageURL} alt="" fill className="object-cover" />
                </div>
            }

        </section>
    )
}