import { Header } from './components/Header/Header';
import { AppRouter } from './routes/AppRouter';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
