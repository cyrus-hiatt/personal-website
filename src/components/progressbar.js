// src/components/ProgressBar.js
import React, { useEffect, useRef, useState } from "react";
import "../styles/progressbar.css";

const ProgressBar = ({ percentage, label }) => {
  const barRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(barRef.current); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (barRef.current && isVisible) {
      barRef.current.style.width = "100%"; // Ensure the container is full width
    }
  }, [isVisible]);

  return (
    <div className="progress-bar-container">
      <span>{label}</span>
      <div className="progress-bar" ref={barRef}>
        <div
          className="progress-fill"
          style={{
            width: isVisible ? `${percentage}%` : "0%", // Only fill when visible
            transition: isVisible ? "width 1s ease-in-out" : "none", // Smooth animation
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
