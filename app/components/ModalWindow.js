import React, { useEffect, useState } from 'react';

function ModalWindow(props) {
  const { images } = props;
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  console.log(currentIndex);
  return (
    <>
      <div>
        <div className="thumbnail">
          {images &&
            images.map((img, index) => {
              return (
                <img
                  key={index}
                  data-alt={index + 1}
                  src={img.thumbnailUrl}
                  className="hover-shadow"
                  onClick={() => {
                    setOpen(true);
                    setCurrentIndex(index + 1);
                  }}
                />
              );
            })}
        </div>
      </div>
      <div id="myModal" className={'modal-window' + (open ? ' open' : '')}>
        <span className="close cursor" onClick={() => setOpen(false)}>
          &times;
        </span>
        <div>
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
                  <div className="counter">
                    {index + 1}/ {images.length}
                  </div>
                  <img src={img.fullUrl} />
                  <div className="caption-container">
                    <p className="caption">{img.description}</p>
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

          {/*Thumbnail image controls */}
          <div className="preview-container">
            {images &&
              images.map((img, index) => {
                return (
                  <div className="preview" key={index}>
                    <img
                      onClick={() => setCurrentIndex(index + 1)}
                      className="demo"
                      src={img.thumbnailUrl}
                      alt={img.description}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalWindow;
