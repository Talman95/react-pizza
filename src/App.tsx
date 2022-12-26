import pizzasJSON from './assets/pizzas.json';
import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './components/PizzaBlock';
import { Sort } from './components/Sort';
import './scss/app.scss';

function App() {
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
            {pizzasJSON.pizzas.map(({ id, imageUrl, name, types, sizes, price }) => (
              <PizzaBlock
                key={id}
                imageUrl={imageUrl}
                name={name}
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
