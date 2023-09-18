import { Link } from 'react-router-dom';
import { ProductType } from '../types';

type ProductListProps = {
  productList: ProductType[]
};

function ProductList({ productList }: ProductListProps) {
  return (
    <section>
      {
        productList.map((product) => (
          <div
            key={ product.id }
            data-testid="product"
          >
            <Link data-testid="product-detail-link" to={ `/product/${product.id}` }>
              <img src={ product.thumbnail } alt={ product.title } />
              <h4>{product.title}</h4>
              <p>{product.price}</p>
            </Link>
          </div>
        ))
      }
    </section>
  );
}

export default ProductList;
