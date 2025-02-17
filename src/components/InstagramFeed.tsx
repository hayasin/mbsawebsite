import './InstagramFeed.css';
import { useState, useEffect } from 'react';
import instapic1 from '../assets/images/instapics/instapic1.jpeg';
import instapic2 from '../assets/images/instapics/instapic2.jpg';
import instapic3 from '../assets/images/instapics/instapic3.jpg';
import instapic4 from '../assets/images/instapics/instapic4.jpeg';
import instapic5 from '../assets/images/instapics/instapic5.jpeg';
import instapic6 from '../assets/images/instapics/instapic6.jpeg';

const InstagramFeed = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    instapic1,
    instapic2,
    instapic3,
    instapic4,
    instapic5,
    instapic6,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="phone-container">
      <div className="phone">
        <div className="phone-screen">
          <div className="feed-container">
            {images.map((image, index) => (
              <img
                key={`feed-image-${index}`}
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="feed-image"
                style={{
                  transform: `translateY(${(index - activeIndex) * 100}%)`,
                  opacity: index === activeIndex ? 1 : 0.8
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;

