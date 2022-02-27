import { groceryItems } from "../data/grocery-items";

export const Products = () => {
  return (
    <div className="products box">
      <h2>Products</h2>
      <ul class="list">
        {groceryItems.map(({ id, name, icon }) => {
          return (
            <li className="list-item box" key={id}>
              <div>
                <span className="icon">{icon}</span>
                <span>{name}</span>
              </div>
              <button class="btn">add to cart</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
