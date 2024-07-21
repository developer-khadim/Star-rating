import React, { useState, useEffect } from "react";
import { FaStar, FaGithub, FaLinkedin } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseMove = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  const getStarSize = () => {
    if (windowWidth < 480) return 30;
    if (windowWidth < 768) return 35;
    return 45;
  };

  const getIconSize = () => {
    if (windowWidth < 480) return "text-2xl";
    if (windowWidth < 768) return "text-3xl";
    return "text-4xl";
  };

  return (
    <div className="star-rating bg-black min-h-screen text-white flex flex-col justify-center items-center p-4">
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {[...Array(noOfStars)].map((_, index) => (
          <FaStar
            key={index + 1}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={handleMouseLeave}
            size={getStarSize()}
            className={`cursor-pointer ${index <= (hover || rating) ? 'text-yellow-400' : 'text-white'}`}
          />
        ))}
      </div>
      <div className="flex gap-4 mt-10">
        <a
          href="https://github.com/developer-khadim"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <FaGithub className={`text-white ${getIconSize()}`} />
        </a>
        <a
          href="https://www.linkedin.com/in/khadim-ali12"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <FaLinkedin className={`text-white ${getIconSize()}`} />
        </a>
      </div>
      <p className="text-white mt-2 text-center">
        Please like and follow on GitHub and LinkedIn
      </p>
    </div>
  );
};

export default StarRating;