import React, { useState, useRef, useEffect } from "react";

function LazyImage({ src, alt, className, ...props }) {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : ""}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  );
}

export default LazyImage;