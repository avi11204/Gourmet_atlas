import React from 'react';

function ExampleCarouselImage({ imageUrl, altText }) {
  return (
    <img
      src={imageUrl}
      alt={altText}
      style={{ width: '100%', height: '400px', objectFit: 'cover' }}
    />
  );
}

export default ExampleCarouselImage;
