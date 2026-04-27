function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
   <h2>{product.name}</h2>
    <img src={product.image} alt={product.name} />
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

window.ProductCard = ProductCard;