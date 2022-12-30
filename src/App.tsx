import { createContext, useState } from 'react';

import { Header } from './components/Header/Header';
import { AppRouter } from './routes/AppRouter';
import './scss/app.scss';

export type SearchContextType = {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
};

export const SearchContext = createContext<SearchContextType | null>(null);

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <AppRouter />
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
