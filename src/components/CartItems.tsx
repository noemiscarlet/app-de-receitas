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
          <div key={ product.id }>
            <img src={ product.thumbnail } alt={ product.title } />
            <p data-testid="shopping-cart-product-name">{product.title}</p>
            <p data-testid="shopping-cart-product-quantity">
              <strong>{product.quantity}</strong>
            </p>
            <p>{product.price}</p>
          </div>
        ))
      ) : (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      )}
    </section>
  );
}

export default CartItems;
