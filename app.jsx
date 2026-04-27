function App() {
  const [cart, setCart] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  function handleRemoveFromCart(indexToRemove) {
    setCart(cart.filter((item, index) => index !== indexToRemove));
  }

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <NavBar
        cartCount={cart.length}
        cartItems={cart}
        onRemoveFromCart={handleRemoveFromCart}
      />

   <div className="category-filters">
  <button
    className={selectedCategory === "All" ? "active" : ""}
    onClick={() => setSelectedCategory("All")}
  >
    All
  </button>

  <button
    className={selectedCategory === "Apparel" ? "active" : ""}
    onClick={() => setSelectedCategory("Apparel")}
  >
    Apparel
  </button>

  <button
    className={selectedCategory === "Accessories" ? "active" : ""}
    onClick={() => setSelectedCategory("Accessories")}
  >
    Accessories
  </button>

  <button
    className={selectedCategory === "Home" ? "active" : ""}
    onClick={() => setSelectedCategory("Home")}
  >
    Home
  </button>
</div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
