'use client';
import { MenuContainer } from "@/containers/MenuContainer";
import { ReviewsContainer } from "@/containers/ReviewsContainer";
import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, id } = restaurant;

  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      <h3 className={styles.menu}>Menu</h3>
      <MenuContainer restaurantId={id} />
      <h3 className={styles.reviews}>Review</h3>
      <ReviewsContainer restaurantId={id} />
    </div>
  );
};
