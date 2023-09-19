import { useEffect, useState } from 'react';
import { ProductType } from '../types';

function CartItems() {
  const [productsInCart, setProductsInCart] = useState<ProductType[]>([]);

  useEffect(() => {
    setProductsInCart(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);

  return (
    <section>
      {productsInCart.length ? (
        productsInCart.map((product) => (
          <CartProdutc />
        ))
      ) : (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      )}
    </section>
  );
}

export default CartItems;
