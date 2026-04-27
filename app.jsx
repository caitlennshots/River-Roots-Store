function App() {
  const [cart, setCart] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState("home");

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  function handleRemoveFromCart(indexToRemove) {
    setCart(cart.filter((item, index) => index !== indexToRemove));
  }

  function goToCategory(category) {
    setSelectedCategory(category);
    setCurrentPage("home");
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
        onHomeClick={() => setCurrentPage("home")}
        onShopClick={() => setCurrentPage("shop")}
        onAboutClick={() => setCurrentPage("about")}
        onBlogClick={() => setCurrentPage("blog")}
      />
{/* home page */}
      {currentPage === "home" && (
        <div>
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

          <div id="shop" className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onProductClick={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      )}
        {/* shop page */}
      {currentPage === "shop" && (
        <div className="category-grid">
          <div className="category-card" onClick={() => goToCategory("Apparel")}>
            <img src="RiverRoots Sweater.JPEG" alt="Apparel" />
            <h3>Apparel</h3>
            <p>Shop sweatshirts, tees, and cozy River Roots apparel.</p>
          </div>

          <div className="category-card" onClick={() => goToCategory("Accessories")}>
            <img src="RRHat.jpg" alt="Accessories" />
            <h3>Accessories</h3>
            <p>Shop caps, totes, stickers, and everyday extras.</p>
          </div>

          <div className="category-card" onClick={() => goToCategory("Home")}>
            <img src="RiverRootsMug.JPEG" alt="Home" />
            <h3>Home</h3>
            <p>Shop mugs and home goods inspired by Tennessee roots.</p>
          </div>
        </div>
      )}
        {/* about page */}
      {currentPage === "about" && (
  <div className="about-section">
    <h2>About River Roots 🌿</h2>

    <p className="about-tagline">
      Rooted in nature. Inspired by Tennessee. Made for comfort.
    </p>

    <p>
      River Roots is a small lifestyle brand inspired by winding rivers,
      quiet forests, and the feeling of being at home wherever you are.
    </p>

    <p>
      Each piece is designed to bring a little bit of that calm, cozy,
      outdoorsy energy into your everyday life.
    </p>

    <p className="about-highlight">
      🌲 Slow down. Breathe in. Stay rooted.
    </p>
  </div>
)}
        {/* add blog page */}
        {currentPage === "blog" && (
  <div className="blog-landing">
    <div className="blog-hero">
      <p className="blog-kicker">River Roots Journal</p>
      <h2>Nature’s Lens 📷</h2>

      <p className="blog-tagline">
        A peaceful photography journal inspired by trails, rivers, cabins, and quiet outdoor moments.
      </p>

      <button
        className="blog-button"
        onClick={() =>
          window.open("https://caitlennshots.github.io/NaturesLensBlog/", "_blank")
        }
      >
        Visit Nature’s Lens →
      </button>
    </div>

    <div className="blog-preview-grid">
      <div className="blog-preview-card">
        <h3>🌲 Trail Stories</h3>
        <p>Explore nature walks, scenic views, and peaceful outdoor escapes.</p>
      </div>

      <div className="blog-preview-card">
        <h3>🏕️ Cabin Vibes</h3>
        <p>Cozy inspiration for slow weekends, mountain stays, and quiet mornings.</p>
      </div>

      <div className="blog-preview-card">
        <h3>📸 Photography</h3>
        <p>A creative look at landscapes, light, textures, and natural beauty.</p>
      </div>
    </div>
  </div>
)}


      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>

            <h2>{selectedProduct.name}</h2>

            <img
              src={
                selectedProduct.image ||
                (selectedProduct.images && selectedProduct.images[0])
              }
              alt={selectedProduct.name}
            />

            <p>${selectedProduct.price.toFixed(2)}</p>
            <p>{selectedProduct.description}</p>

            <button onClick={() => handleAddToCart(selectedProduct)}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));