import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import CategoryList from '../components/CategoryList';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((response) => setCategories(response));
  }, []);

  return (
    <main>
      <Link to="/cart" data-testid="shopping-cart-button">
        Carrinho
      </Link>
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <CategoryList
        categories={ categories }
      />
    </main>
  );
}

export default Home;
