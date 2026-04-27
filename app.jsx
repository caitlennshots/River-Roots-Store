function App() {
  const [cart, setCart] = React.useState([]);

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div>
      <h1>River Roots Store 🌿</h1>
      <NavBar cartCount={cart.length} />

      <div className="product-grid">
        {products.map((product) => (
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