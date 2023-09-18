import { CategoryType } from '../types';

type CategoryListProps = {
  categories: CategoryType[]
};

function CategoryList({ categories }: CategoryListProps) {
  return (
    <aside>
      <fieldset>
        { categories.map((category, index) => (
          <div key={ index }>
            <input
              name="category"
              type="radio"
              id={ category.id }
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
