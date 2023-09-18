import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { ProductType } from '../types';

function Product() {
  const [product, setProduct] = useState<ProductType | null>(null);
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      getProductById(productId).then((response) => setProduct(response));
    }
  }, [productId]);

  if (!product) return;

  return (
    <section>
      <img
        data-testid="product-detail-image"
        src={ product.thumbnail }
        alt={ product.title }
      />
      <h1 data-testid="product-detail-name">{product.title}</h1>
      <p data-testid="product-detail-price">{product.price}</p>
      <Link to="/cart" data-testid="shopping-cart-button">
        Carrinho
      </Link>
    </section>
  );
}

export default Product;