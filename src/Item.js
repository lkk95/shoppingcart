export default function Item({ name, price, count, setCount, cartamount }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{price} € per piece</p>
      <button
        onClick={() => {
          cartamount >= 30
            ? alert("You reached your limit!")
            : setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          cartamount <= 0
            ? alert("You can't have minus fruits!")
            : setCount(count - 1);
        }}
      >
        -
      </button>
      <butto>Delete item</butto>
      <p>amount: {count}</p>
      <p>total: {count * price}</p>
    </section>
  );
}
