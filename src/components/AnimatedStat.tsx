"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface AnimatedStatProps {
  value: string;
  className?: string;
}

const isNumeric = (val: string) => !isNaN(parseFloat(val));

export function AnimatedStat({ value, className }: AnimatedStatProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [displayValue, setDisplayValue] = useState("");
  const isNumber = isNumeric(value);
  const targetNumber = isNumber ? parseFloat(value) : 0;

  useEffect(() => {
    if (!isInView) {
        if (isNumber) {
            setDisplayValue("0");
        } else {
            setDisplayValue(" ".repeat(value.length));
        }
        return;
    }

    if (isNumber) {
      let current = 0;
      const increment = targetNumber / 100;
      const interval = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          clearInterval(interval);
          setDisplayValue(value);
        } else {
          setDisplayValue(Math.ceil(current).toString() + (value.includes("%") || value.includes("+") ? value.slice(-1) : ""));
        }
      }, 20);
      return () => clearInterval(interval);
    } else {
      let iteration = 0;
      const interval = setInterval(() => {
        const newText = value
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return value[index];
            }
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 62)];
          })
          .join("");
        setDisplayValue(newText);

        if (iteration >= value.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isInView, isNumber, targetNumber, value]);

  return (
    <h3 ref={ref} className={cn("text-4xl md:text-5xl font-bold text-primary", className)}>
      {displayValue}
    </h3>
  );
}
