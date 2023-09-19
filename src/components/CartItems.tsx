import { useEffect, useState } from 'react';
import { ProductType } from '../types';
import CartProduct from './CartProduct';

function CartItems() {
  const [productsInCart, setProductsInCart] = useState<ProductType[]>([]);

  useEffect(() => {
    setProductsInCart(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);
  return (
    <section>
      {productsInCart.length ? (
        productsInCart.map((product) => (
          <CartProduct
            key={ product.id }
            title={ product.title }
            thumbnail={ product.thumbnail }
            price={ product.price }
            id={ product.id }
            productInCart={ setProductsInCart }

          />
        ))
      ) : (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      )}
    </section>
  );
}

export default CartItems;
