"use client";

import React, { useState, useEffect } from "react";

const CircularArray = () => {
  const words = [
    "Software Developer",
    "Product Designers",
    "HR Professionals",
    "Entrepreneurs",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const rotatedWords = [
    ...words.slice(currentIndex),
    ...words.slice(0, currentIndex),
  ];

  return (
    <div className="circular-array">
      {rotatedWords.map((word, index) => (
        <div
          key={index}
          className={`Cabin font-bold text-white word ${index === 0 ? "active" : ""}`}
          style={{
            fontSize: `${48 - index * 4}px`,
            opacity: `${1 - index * 0.2}`,
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default CircularArray;
