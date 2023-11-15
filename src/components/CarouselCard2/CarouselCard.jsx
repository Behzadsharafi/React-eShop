import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ item }) => {
  return (
    <div className={styles.carouselCard}>
      <img className={styles.carouselCard__image} src={item.imageLink} alt="" />
      <div className={styles.carouselCard__text}>
        <div className={styles.carouselCard__text__top}>
          <h1 className={styles.carouselCard__text__top__title}>{item.name}</h1>
          <h1 className={styles.carouselCard__text__top__sale}>
            25% OFF RRP ON FEATURED ITEMS
          </h1>

          <h1>code: ZAD25</h1>
        </div>
        <h1 className={styles.carouselCard__text__bottom__sale}>25% OFF RRP</h1>
        <h1 className={styles.carouselCard__text__bottom}>SHOP NOW</h1>
      </div>
    </div>
  );
};

export default CarouselCard;
