import { useCount } from '@/hooks/useCount'
import styles from "./styles.module.scss";
import { Button } from "@/components/Button/Button";

export const Dish = ({ dish }) => {
  const [count, changeCount] = useCount({ initialVaue: 0 });

  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return (
    <div className={styles.root}>
      <p>{name}</p>
      <p>{price}</p>
      <div>
        <Button
          onClick={() => changeCount(-1)}
          disabled={count === 0}
          className={styles.action}
        >
          -
        </Button>
        {count}
        <Button
          onClick={() => changeCount(1)}
          disabled={count === 5}
          className={styles.action}
          viewVariant="secondary"
        >
          +
        </Button>
      </div>
      {count > 0 && (
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
