import React, { useState } from 'react';
import { websiteImages } from './includes/constants';
interface ModalProps {
  images: typeof websiteImages;
}
function ModalWindow(props: ModalProps) {
  const { images } = props;
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  function handleClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    index: number
  ) {
    e.preventDefault();
    setOpen(true);
    setCurrentIndex(index + 1);
  }
  return (
    <>
      <div className="thumbnail">
        {images &&
          images.map((img, index) => {
            return (
              <a href="#" onClick={(e) => handleClick(e, index)}>
                <img
                  key={index}
                  data-alt={index + 1}
                  src={img.thumbnailUrl}
                  className="hover-shadow"
                  alt={img.description}
                />
              </a>
            );
          })}
      </div>
      <div
        tabIndex={0}
        id="myModal"
        className={'modal-window' + (open ? ' open' : '')}
      >
        <a
          href="#"
          className="close cursor"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
          }}
        >
          &times;
        </a>
        <div className="slides-container">
          {images &&
            images.map((img, index) => {
              return (
                <div
                  className={
                    'my-slides' + (currentIndex === index + 1 ? ' open' : '')
                  }
                  key={index}
                  data-alt={index + 1}
                >
                  <div className="caption-container">
                    <p className="caption">
                      <a href={img.waybackUrl} target="_blank" rel="noopener">
                        {img.description}
                      </a>
                    </p>
                  </div>
                  <div className="counter">
                    {index + 1}/ {images.length}
                  </div>
                  <div className="screenshot">
                    <img src={img.fullUrl} alt={img.description} />
                  </div>
                </div>
              );
            })}

          {/* Next/previous controls */}
          {currentIndex > 1 && (
            <a
              className="prev"
              onClick={() =>
                setCurrentIndex((currentIndex) => (1 ? currentIndex - 1 : 1))
              }
            >
              &#10094;
            </a>
          )}

          {currentIndex < images.length && (
            <a
              className="next"
              onClick={() => setCurrentIndex(currentIndex + 1)}
            >
              &#10095;
            </a>
          )}
        </div>
        {/*Thumbnail image controls */}
        <div className="preview-container">
          {images &&
            images.map((img, index) => {
              return (
                <div className="preview" key={index}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentIndex(index + 1);
                    }}
                  >
                    <img
                      className="demo"
                      src={img.thumbnailUrl}
                      alt={img.description}
                    />
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ModalWindow;
