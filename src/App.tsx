import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import CartItems from './components/CartItems';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        Component={ Home }
      />
      <Route
        path="/cart"
        Component={ CartItems }
      />
      <Route
        path="/product/:productId"
        Component={ Product }
      />
    </Routes>
  );
}

export default App;
