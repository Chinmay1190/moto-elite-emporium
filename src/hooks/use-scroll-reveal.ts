
import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Create an intersection observer to detect when elements are in the viewport
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once the animation has played, we can stop observing this element
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    
    // Find all elements with the scroll-reveal class and observe them
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => {
      observerRef.current?.observe(el);
    });
    
    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  return null;
};
