"use client"

import { useRef } from "react";
import { wrap } from "@motionone/utils";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame} from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
  array?: number;
}

const Marquee = ({ children, baseVelocity = 100, className, array }: ParallaxProps) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });
    
    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
  
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
  
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
  
      baseX.set(baseX.get() + moveBy);
    });
  
    return (
      <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
        <motion.div className={`flex whitespace-nowrap flex-nowrap ${className}`} style={{ x }}>
            {Array(array || 4).fill(null).map((_, index) => (
                <span key={index} className="block mr-8">
                    {children}
                </span>
            ))}
        </motion.div>
      </div>
    );
  }
 
export default Marquee;