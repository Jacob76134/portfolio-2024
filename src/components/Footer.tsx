import { NAVIGATION } from "@/utils/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-light dark:bg-black">
                            
            <div className="flex justify-between items-center p-8">
                <Link href="/" className="font-black text-4xl tracking-[-4px]">JB</Link>
            </div>

        </footer>
    )
}