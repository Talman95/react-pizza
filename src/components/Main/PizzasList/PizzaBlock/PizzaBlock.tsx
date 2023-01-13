import { FC, useState } from 'react';

import { Link } from 'react-router-dom';

import { Path } from '../../../../enums/Path';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { addItem } from '../../../../redux/slices/cart-slice';
import { CartItemType } from '../../../../types/CartItemType';

import styles from './PizzaBlock.module.scss';

type PropsType = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  rating: number;
};

const doughTypes = ['тонкое', 'традиционное'];

export const PizzaBlock: FC<PropsType> = ({
  id,
  imageUrl,
  title,
  types,
  sizes,
  price,
  rating,
}) => {
  const dispatch = useAppDispatch();

  const [selectedType, setSelectedType] = useState<number>(types[0]);

  const [selectedSize, setSelectedSize] = useState<number>(sizes[0]);

  const onTypeSelectedClick = (index: number): void => {
    setSelectedType(index);
  };

  const onSizeSelectedClick = (index: number): void => {
    setSelectedSize(index);
  };

  const onAddProductClick = (): void => {
    const item: CartItemType = {
      id,
      category: selectedType,
      imageUrl,
      price,
      rating,
      size: selectedSize,
      title,
      type: selectedType,
    };

    dispatch(addItem(item));
  };

  return (
    <div className={styles.pizzaBlock}>
      <Link to={`${Path.PIZZA_INFO}/${id}`}>
        <img className={styles.image} src={imageUrl} alt="Pizza" />
      </Link>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.selector}>
        <ul>
          {types.map(type => (
            <li key={type} className={selectedType === type ? styles.active : ''}>
              <button type="button" onClick={() => onTypeSelectedClick(type)}>
                {doughTypes[type]}
              </button>
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map(size => (
            <li key={size} className={selectedSize === size ? styles.active : ''}>
              <button type="button" onClick={() => onSizeSelectedClick(size)}>
                {size}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>от {price} ₽</div>
        <button
          type="button"
          onClick={onAddProductClick}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          Добавить
        </button>
        {/* <i>0</i> */}
      </div>
    </div>
  );
};
