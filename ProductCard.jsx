function ProductCard({ product, onAddToCart, onProductClick }) {
  const productImages = product.images || [product.image];

  return (
    <div
      className="product-card"
      onClick={() => onProductClick(product)}
    >
      <h2>{product.name}</h2>

      <img src={productImages[0]} alt={product.name} />

      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>

      <button
        onClick={(e) => {
          e.stopPropagation(); // prevents modal from opening when clicking button
          onAddToCart(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

window.ProductCard = ProductCard;