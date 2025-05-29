import { useState, useEffect } from "react";
import type { Testimonial } from "../data/types";

interface UseTestimonialRotationProps {
  testimonials: Testimonial[];
  interval?: number;
}

export const useTestimonialRotation = ({
  testimonials,
  interval = 4000,
}: UseTestimonialRotationProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [testimonials.length, interval]);

  const goToTestimonial = (index: number) => {
    if (index >= 0 && index < testimonials.length) {
      setActiveIndex(index);
    }
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return {
    activeIndex,
    activeTestimonial: testimonials[activeIndex],
    goToTestimonial,
    nextTestimonial,
    prevTestimonial,
  };
};
