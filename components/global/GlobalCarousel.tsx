import React, { useState, ReactElement } from "react";
import styles from "../styles/GlobalCarousel.module.scss";

type SlideProps = {
  front: ReactElement,
  back: ReactElement,
}

type GlobalCarouselProps = {
  slides: SlideProps[],
};

const GlobalCarousel: React.FC<GlobalCarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const handleFlip = () => {
    setTimeout(() => setIsFlipped(!isFlipped), 300);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={`${styles["carousel-slide-container"]} ${isFlipped ? styles.flipped : ""}`}>
        <div className={styles.front}>
          <div className="content">
            {slides[currentIndex].front}
          </div>
        </div>
        <div className={styles.back}>
          <div className={`content ${isFlipped ? styles.flippable : ""}`}>
            {slides[currentIndex].back}
          </div>
        </div>
      </div>

      <div className={styles.controlButtonContainer}>
        <button className={styles.controlButton} onClick={handlePrev}>
          Previous
        </button>
        <button className={styles.controlButton} onClick={handleNext}>
          Next
        </button>
        <button className={styles.controlButton} onClick={handleFlip}>
          Flip
        </button>
        <button className={styles.controlButton} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default GlobalCarousel;
