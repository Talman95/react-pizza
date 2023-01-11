import styles from "./PizzasError.module.scss";

export function PizzasError() {
  return (
    <div className={styles.errorInfo}>
      <h2>
        Произошла ошибка <span>😕</span>
      </h2>
      <p>
        К сожалению, не удалось получить пиццы. Попробуйте повторить попытку
        позже.
      </p>
    </div>
  );
}
