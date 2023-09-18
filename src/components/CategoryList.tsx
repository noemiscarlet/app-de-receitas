import { FormEvent } from 'react';
import { CategoryType } from '../types';

type CategoryListProps = {
  categories: CategoryType[],
  getProducts: (event: FormEvent) => void
};

function CategoryList({ categories, getProducts }: CategoryListProps) {
  return (
    <aside>
      <fieldset>
        { categories.map((category, index) => (
          <div key={ index }>
            <input
              name="category"
              type="radio"
              id={ category.id }
              onChange={ getProducts }
            />
            <label
              data-testid="category"
              htmlFor={ category.id }
            >
              { category.name }
            </label>
          </div>)) }
      </fieldset>
    </aside>
  );
}

export default CategoryList;
