import React from 'react';
import { mouseDefault } from "./MouseTracker"; 
import { useAtom } from "jotai";

type MouseContainerProps = {
    className?: string,
    text?: string; 
    color?: string;
    state?: string;
    children: React.ReactNode
}

const MouseContainer: React.FC<MouseContainerProps> = ({ className, text, color, state, children }) => {
    const [, setMouseState] = useAtom(mouseDefault);

    const handleMouseEnter = React.useCallback((e: React.MouseEvent) => {
        setMouseState(prevState => ({
            ...prevState,
            hover: e.target as HTMLElement,
            text: text,
            color: color,
            state: state,
        }));
    }, [setMouseState, text, color, state]);

    const handleMouseLeave = React.useCallback(() => {
        setMouseState(prevState => ({
            ...prevState,
            hover: undefined,
            text: undefined,
            color: undefined,
            state: undefined,
        }));
    }, [setMouseState]);

    return (
        <div className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    );
};

export default React.memo(MouseContainer, (prevProps, nextProps) => {
    // Implementing a custom comparison function if needed
    return prevProps.className === nextProps.className &&
           prevProps.text === nextProps.text &&
           prevProps.color === nextProps.color &&
           prevProps.state === nextProps.state &&
           prevProps.children === nextProps.children;
});
