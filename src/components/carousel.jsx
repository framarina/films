import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/10.jpg",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
  },
];

const CarouselComponent = () => {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showFullscreenButton={false}
      autoPlay={true}
      slideInterval={5000}
      showNav={false}
      showBullets={true}
      showThumbnails={false}
    />
  );
};

export default CarouselComponent;
