import React, { useState, useEffect } from 'react';
import { FaStar, FaGithub, FaLinkedin } from 'react-icons/fa';

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        setRating(0);
    }, []);

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);
    }

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    }

    const handleMouseLeave = () => {
        setHover(0);
    }

  return (
    <div className='star-rating bg-black h-screen text-white flex flex-col justify-center items-center p-4'>
      <div className='flex gap-2 mb-4'>
        {[...Array(noOfStars)].map((_, index) => (
          <FaStar key={index + 1} 
            onClick={() => handleClick(index + 1)}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
            className={`text-yellow-500 ${index + 1 <= (hover || rating) ?
                 'text-yellow-400' : 'text-gray-500'} ${window.innerWidth > 768 ? 'text-5xl' : 'text-4xl'}`}
          />
        ))}
      </div>
      <div className='flex gap-4 mt-10'>
        <a href="https://github.com/developer-khadim" target="_blank" rel="noopener noreferrer">
          <FaGithub className={`text-white ${window.innerWidth > 768 ? 'text-4xl' : 'text-3xl'}`} />
        </a>
        <a href="https:www.linkedin.com/in/khadim-ali12" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className={`text-white ${window.innerWidth > 768 ? 'text-4xl' : 'text-3xl'}`} />
        </a>
      </div>
      <p className="text-white mt-2">Please like and follow on GitHub and LinkedIn</p>
    </div>
  );
};

export default StarRating;