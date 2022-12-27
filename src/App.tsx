import { useEffect, useState } from 'react';
import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './components/PizzaBlock/PizzaBlock';
import { PizzaSkeleton } from './components/PizzaBlock/PizzaSkeleton';
import { Sort } from './components/Sort';
import './scss/app.scss';
import { PizzaType } from './types/PizzaType';

function App() {
  const [pizzas, setPizzas] = useState<PizzaType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://626d16545267c14d5677d9c2.mockapi.io/items?page=1&limit=4')
      .then(res => {
        return res.json();
      })
      .then(res => {
        setPizzas(res);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
              : pizzas.map(({ id, imageUrl, title, types, sizes, price }) => (
                  <PizzaBlock
                    key={id + title}
                    imageUrl={imageUrl}
                    title={title}
                    types={types}
                    sizes={sizes}
                    price={price}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
