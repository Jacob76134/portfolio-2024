import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface ButtonProps {
    text: string;
    align?: 'left' | 'center' | 'right' | 'fullwidth';
    color?: 'primary' | 'secondary' | 'light' | 'dark' | 'clear';
    className?: string;
    link?: string;
    onClick?: () => void;
}

const alignmentMap = {
    center: 'justify-center',
    right: 'justify-end',
    fullwidth: 'w-full',
    left: 'justify-start',
};

const colorMap = {
    primary: 'bg-primary text-white shadow-lg',
    secondary: 'bg-secondary text-white shadow-lg',
    light: 'bg-light text-dark shadow-lg',
    dark: 'bg-dark text-light shadow-lg',
    clear: 'bg-transparent',
}

export default function Button({text, align = 'left', color = 'primary', className, link, onClick}:ButtonProps) {
    const 
        alignment = alignmentMap[align],
        colors = colorMap[color],
        defaultStyles = 'py-2 px-4 rounded-md hover:bg-opacity-80 duration-200 text-center flex gap-2 items-center',
        defaultClass = `${defaultStyles} ${colors} ${className}`;

    const content = link ? ( 
        // Link Button
        <Link href={link} aria-label={text} className={`${defaultClass} group`}>
            {text}
            {color == 'clear' && <FaArrowRightLong className="group-hover:translate-x-2 duration-200" />} 
        </Link> 
    ) : ( 
        // Function Button
        <div onClick={onClick} className={`${defaultClass}`} aria-label={text}>{text}</div> 
    );
    
    return(
        <div className={`flex ${alignment}`}>
            {content}
        </div>
    )
}