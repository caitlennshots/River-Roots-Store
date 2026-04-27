function CartItem({ item, onRemove }) {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>${item.price}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}