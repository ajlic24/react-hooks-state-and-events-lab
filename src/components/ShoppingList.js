import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  function onChangeHandler(e) {
    setSelectedCategory(e.target.value)
  }

  const filtered = items.filter(ele => {
    if (selectedCategory === 'All') {
      return true
    } else {
      return selectedCategory === ele.category
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={onChangeHandler} >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtered.map((item) => {
          return <Item key={item.id} name={item.name} category={item.category} />
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
