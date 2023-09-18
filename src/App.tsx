import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
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
    </Routes>
  );
}

export default App;
