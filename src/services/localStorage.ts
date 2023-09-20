import { ProductType } from '../types';

export const getCart = () => {
  return JSON.parse(localStorage.getItem('cart') || '[]');
};

export const setCart = (arrayCart: ProductType[]) => {
  localStorage.setItem('cart', JSON.stringify(arrayCart));
};

export const addToCart = (product: ProductType) => {
  const cart = getCart();
  const itemInCart = cart
    .find((cartProduct: ProductType) => cartProduct.id === product.id);
  if (itemInCart) {
    itemInCart.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }
  setCart(cart);
};
