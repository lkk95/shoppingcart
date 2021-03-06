import "./App.css";
import Item from "./Item.js";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      name: "Banana",
      price: 0.5,
      count: 0,
    },
    {
      name: "Avocado",
      price: 1.9,
      count: 0,
    },
    {
      name: "Apple",
      price: 0.6,
      count: 0,
    },
  ]);

  let cartamount = totalCartAmount(items);
  let leftamount = 30 - cartamount;

  function setNewItems(index, newValue) {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], count: newValue };
    setItems(newItems);
  }

  function totalCartAmount(items) {
    const newItems = items.map((item) => {
      const price = item.price;
      const count = item.count;
      return price * count;
    });
    const cartamount = newItems.reduce((a, b) => a + b);
    return cartamount;
  }

  return (
    <div className="App">
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <main>
        {items.map((item, index) => {
          return (
            <Item
              name={item.name}
              price={item.price}
              count={item.count}
              setCount={(newItem) => setNewItems(index, newItem)}
              cartamount={cartamount}
            />
          );
        })}
        <p>
          Total Cart Amount: {cartamount > 30 ? "Limit erreicht" : cartamount}
        </p>
        <p>Money left to spend: {leftamount < 0 ? "0" : leftamount}</p>
      </main>
    </div>
  );
}

export default App;
