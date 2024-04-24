import { builder } from "@/utils/fetches/client";
import Image from "next/image";

export const myPortableTextComponents = {
    types: {
        image: ({value, isInline}:any) => {
            const imageUrl = builder.image(value.asset).url();
            // console.log("VALUE: ", value);
            console.log("IS IMAGE INLINE: ", isInline);

            return ( 
                <div className="flex justify-center bg-white dark:bg-black p-8 rounded-3xl">
                    <figure className="rounded-2xl overflow-hidden relative">
                        <Image className="w-auto h-auto" src={imageUrl} alt={value.alt} title={value.alt} width={800} height={800} />
                        <figcaption className="w-full text-xs bg-black bg-opacity-50 p-2 text-center absolute bottom-0 text-white">{value.alt}</figcaption>
                    </figure> 
                </div>
            )
        },
    },
    
    list: {
        bullet: ({children}:any) => {
            // console.log("LIST TYPE VALUE: ", children);
            return ( <ul className="list-disc pl-5">{children}</ul> )
        },
        number: ({children}:any) => {
            // console.log("LIST TYPE VALUE: ", children);
            return ( <ol className="list-decimal pl-5">{children}</ol> )
        },
    },

    listItem: {
        bullet: ({children}:any) => {
            // console.log("LIST TYPE VALUE: ", children);
            return ( <li>{children}</li> )
        },
        number: ({children}:any) => {
            // console.log("LIST TYPE VALUE: ", children);
            return ( <li>{children}</li> )
        },
    }
};