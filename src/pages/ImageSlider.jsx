import React, { useState, useRef, useEffect } from 'react';
import img1 from './images/img1.jpeg';
import img2 from './images/img2.jpeg';
import img3 from './images/img3.jpeg';
import img4 from './images/img4.jpeg';
import img5 from './images/img5.jpeg';
import img6 from './images/img6.jpeg';
import img7 from './images/img7.jpeg';

function ImageSlider() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    { src: img1, alt: 'Image 1' },
    { src: img2, alt: 'Image 2' },
    { src: img3, alt: 'Image 3' },
    { src: img4, alt: 'Image 4' },
    { src: img5, alt: 'Image 5' },
    { src: img6, alt: 'Image 6' },
    { src: img7, alt: 'Image 7' },
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setActiveIndex((prevIndex) => prevIndex + 1);
      setIsTransitioning(true);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setActiveIndex((prevIndex) => prevIndex - 1);
      setIsTransitioning(true);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (isTransitioning) {
      slider.style.transition = 'transform 0.5s ease-in-out';
      slider.style.transform = `translateX(-${activeIndex * 25}%)`;
    }
  }, [activeIndex, isTransitioning]);

  const handleTransitionEnd = () => {
    const totalImages = images.length;
    setIsTransitioning(false);
    if (activeIndex >= totalImages + 1) {
      setActiveIndex(1);
      sliderRef.current.style.transition = 'none';
      sliderRef.current.style.transform = `translateX(-25%)`;
    } else if (activeIndex <= 0) {
      setActiveIndex(totalImages);
      sliderRef.current.style.transition = 'none';
      sliderRef.current.style.transform = `translateX(-${totalImages * 25}%)`;
    }
  };

  return (
    <div className="relative overflow-hidden" style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="flex transition-transform ease-in-out" ref={sliderRef} onTransitionEnd={handleTransitionEnd} style={{ width: `${(images.length + 2) * 25}vw`, transform: `translateX(-25%)` }}>
        {/* Clone the last image to the start */}
        <div className="relative" style={{ width: 'calc(25vw - 20px)', height: 'calc(25vw - 20px)', flexShrink: 0, margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={images[images.length - 1].src}
            alt={images[images.length - 1].alt}
            className="object-cover hover:scale-110 transition-transform duration-300"
            style={{ width: '100%', height: '100%', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', borderRadius: '10px' }}
          />
        </div>

        {images.map((image, index) => (
          <div key={index} className="relative" style={{ width: 'calc(25vw - 20px)', height: 'calc(25vw - 20px)', flexShrink: 0, margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={image.src}
              alt={image.alt}
              className={`object-cover transition-transform duration-300 ${index === activeIndex - 1 ? 'scale-110' : ''}`}
              style={{ width: '100%', height: '100%', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', borderRadius: '10px' }}
            />
          </div>
        ))}

        {/* Clone the first image to the end */}
        <div className="relative" style={{ width: 'calc(25vw - 20px)', height: 'calc(25vw - 20px)', flexShrink: 0, margin: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="object-cover hover:scale-110 transition-transform duration-300"
            style={{ width: '100%', height: '100%', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', borderRadius: '10px' }}
          />
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
        onClick={prevSlide}
        style={{ zIndex: 10 }}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
        onClick={nextSlide}
        style={{ zIndex: 10 }}
      >
        &gt;
      </button>
    </div>
  );
}

export default ImageSlider;
