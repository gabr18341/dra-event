"use client";;
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": angle + "deg",
      top: -5,
      left: `calc(-50% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        "s",
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (<>
    {[...meteorStyles].map((style, idx) => (
      // Meteor Head
      (<span
        key={idx}
        style={{ ...style }}
        className={cn(
          "pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-[#acd147] shadow-[0_0_0_1px_#acd14756]",
          className
        )}>
        {/* Meteor Tail */}
        <div
          className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-[#acd147] to-transparent" />
      </span>)
    ))}
  </>);
};
