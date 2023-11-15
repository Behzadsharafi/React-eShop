import React, { useEffect, useRef, useState } from "react";
import { getFeatured } from "../../services/fashion-service";
import styles from "./Carousel.module.scss";
import { ItemCard } from "../ItemCard/ItemCard";
import RightArrow from "../../assets/RightArrow.png";
import LeftArrow from "../../assets/LeftArrow.png";
import CarouselCard from "../CarouselCard/CarouselCard";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
    resetInterval();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  useEffect(() => {
    resetInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const [featuredItems, setFeaturedItems] = useState([]);
  useEffect(() => {
    const unsub = getFeatured(setFeaturedItems);
    return () => unsub();
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__container}>
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className={styles.carousel__container__images}
        >
          {featuredItems.map((item) => (
            <CarouselCard
              key={item.id}
              className={styles.carousel__container__images__image}
              item={item}
            />
          ))}
        </div>
      </div>
      <img
        onClick={prevSlide}
        className={`${styles.carousel__container__button__left} ${styles.carousel__container__button}`}
        src={LeftArrow}
        alt=""
      />

      <img
        onClick={nextSlide}
        className={`${styles.carousel__container__button__right} ${styles.carousel__container__button}`}
        src={RightArrow}
        alt=""
      />
    </div>
  );
};

export default Carousel;
