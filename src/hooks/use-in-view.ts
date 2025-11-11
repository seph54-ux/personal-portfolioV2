"use client";

import { useState, useEffect, type RefObject } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

export function useInView(
  ref: RefObject<Element>,
  options: UseInViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);
  const { once = false, ...observerOptions } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once) {
          observer.unobserve(element);
        }
      } else {
        if (!once) {
          setIsInView(false);
        }
      }
    }, observerOptions);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, once, observerOptions]);

  return isInView;
}
