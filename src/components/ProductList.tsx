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
            <img src={ product.thumbnail } alt={ product.title } />
            <h4>{product.title}</h4>
            <p>{product.price}</p>
          </div>
        ))
      }
    </section>
  );
}

export default ProductList;
