import { Header } from './components/Header';
import { AppRouter } from './routes/AppRouter';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <AppRouter />
        </div>
      </div>
    </div>
  );
}

export default App;
