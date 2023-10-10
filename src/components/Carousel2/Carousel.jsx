import React, { useEffect, useRef, useState } from "react";
import CarouselCard from "../CarouselCard2/CarouselCard";
import example1 from "../../assets/temp/example1.svg";
import example2 from "../../assets/temp/example2.svg";
import example3 from "../../assets/temp/example3.svg";
import styles from "./Carousel.module.scss";
import { getFeatured } from "../../services/fashion-service";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  // const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Baseball",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, a? Repudiandae cupiditate veniam esse totam quis beatae explicabo praesentium possimus!",
      icon: example1,
    },
    {
      title: "Football",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores saepe deserunt iure eveniet consequuntur aperiam hic minus quas alias vel obcaecati animi enim, quasi consequatur earum soluta perspiciatis dolorem nisi voluptatum? Doloremque, veniam quaerat.",
      icon: example2,
    },
    {
      title: "Swimming",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A magni, iure quam rem quis odio, perspiciatis quo incidunt tempora blanditiis repellat earum labore expedita? Corrupti officiis fugit alias eveniet molestias ipsum, voluptatibus maxime! Tenetur quam aliquid, voluptatum qui ratione iusto molestiae expedita harum blanditiis reprehenderit?",
      icon: example3,
    },
    {
      title: "Football",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores saepe deserunt iure eveniet consequuntur aperiam hic minus quas alias vel obcaecati animi enim, quasi consequatur earum soluta perspiciatis dolorem nisi voluptatum? Doloremque, veniam quaerat.",
      icon: example2,
    },
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
    resetInterval();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
    resetInterval();
  };

  // const resetInterval = () => {
  //   clearInterval(intervalRef.current); // Clear the current interval
  //   intervalRef.current = setInterval(nextSlide, 5000); // Reset the interval
  // };

  // useEffect(() => {
  //   resetInterval(); // Initialize the interval

  //   return () => {
  //     clearInterval(intervalRef.current); // Cleanup the interval when the component unmounts
  //   };
  // }, []);

  // const updateIndex = (newIndex) => {
  //   if (newIndex < 0) {
  //     newIndex = 0;
  //   } else if (newIndex >= items.length) {
  //     newIndex = items.length - 1;
  //   }

  //   setActiveIndex(newIndex);
  // };

  const [featuredItems, setFeaturedItems] = useState([]);
  useEffect(() => {
    const unsub = getFeatured(setFeaturedItems);
    return () => unsub();
  }, []);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carousel__inner}
        style={{ transform: `translate(-${currentSlide * 100}%)` }}
      >
        {featuredItems.map((item) => (
          <CarouselCard item={item} />
        ))}
      </div>
      {/* <div className={styles.carousel__buttons}> */}
      <button
        onClick={prevSlide}
        className={`${styles.carousel__buttons} ${styles.carousel__buttons__left}`}
      >
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>

      <button
        onClick={nextSlide}
        className={`${styles.carousel__buttons} ${styles.carousel__buttons__right}`}
      >
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>
      {/* </div> */}
    </div>
  );
};

export default Carousel;
