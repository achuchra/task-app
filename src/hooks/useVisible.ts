import { useEffect, useState, Dispatch, SetStateAction } from 'react';

const useVisible = (): [Dispatch<SetStateAction<HTMLDivElement | null>>, boolean] => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 1,
      },
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref]);

  return [setRef, isIntersecting];
};

export default useVisible;
