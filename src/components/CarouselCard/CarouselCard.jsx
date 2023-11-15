import { Link } from "react-router-dom";
import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ item }) => {
  return (
    <Link to={`/${item.id}`} className={styles.carouselCard}>
      <div className={styles.carouselCard__content}>
        <div className={styles.carouselCard__details}>
          <div className={styles.carouselCard__details__top}>
            <h1 className={styles.carouselCard__details__top__title}>
              {item.name}
            </h1>
            <h1 className={styles.carouselCard__details__top__sale}>
              25% OFF RRP ON FEATURED ITEMS
            </h1>
            <h1>code: ZAD25</h1>
          </div>
          <h1 className={styles.carouselCard__details__bottom__sale}>
            25% OFF RRP
          </h1>
          <h1 className={styles.carouselCard__details__bottom}>SHOP NOW</h1>
        </div>
        <img
          className={styles.carouselCard__content__image}
          src={item.imageLink}
          alt=""
        />
      </div>
    </Link>
  );
};

export default CarouselCard;
