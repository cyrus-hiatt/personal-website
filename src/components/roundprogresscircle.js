// src/components/RoundProgressCircle.js
import React, { useEffect, useRef, useState } from "react";
import "../styles/roundprogresscircle.css";

const RoundProgressCircle = ({ percentage, label }) => {
  const radius = 50; // Radius of the circle
  const strokeWidth = 15; // Width of the stroke
  const normalizedRadius = radius - strokeWidth / 2; // Adjusted radius
  const circumference = normalizedRadius * 2 * Math.PI; // Circumference of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // Calculate the offset

  const circleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the circle is in view
          observer.unobserve(circleRef.current); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  return (
    <div className="round-progress-circle" ref={circleRef}>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#fee5ca" // Background circle color
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="var(--highlight-accent)" // Use the new highlight accent color
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          strokeDashoffset={isVisible ? strokeDashoffset : circumference} // Animate offset if visible
          style={{
            transition: isVisible ? "stroke-dashoffset 1s ease-in-out" : "none",
          }} // Smooth animation
        />
      </svg>
      <div className="percentage-label">{percentage}%</div>
      <div className="language-label">{label}</div>
    </div>
  );
};

export default RoundProgressCircle;
