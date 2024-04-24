import { NAVIGATION } from "@/utils/constants"
import Link from "next/link"

export default function Nav() {

    return(
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="flex justify-between items-center p-8" aria-label="Navigation">
                <div>
                    <Link href="/" className="font-black text-4xl tracking-[-4px]">JB</Link>
                </div>

                <div className="flex gap-4">
                    {/* {NAVIGATION.map((link, i) => (
                        <div key={i}>
                            <Link href={link.url} aria-label={link.url} className="text-lg font-semibold">{link.title}</Link>
                        </div>
                    ))} */}
                </div>
            </nav>
        </header>
    )
}