function NavBar({ cartCount, cartItems, onRemoveFromCart }) {
  const [cartOpen, setCartOpen] = React.useState(false);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <nav className="navbar">
      <h1>River Roots 🌿</h1>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>

        <button
          type="button"
          className="cart-button"
          onClick={() => setCartOpen(!cartOpen)}
        >
          🛒 Cart ({cartCount})
        </button>

        {cartOpen && (
          <div className="cart-dropdown">
            <h3>Your Cart</h3>

            {cartItems.length === 0 ? (
              <p>Your cart is empty 🌿</p>
            ) : (
              <div>
                {cartItems.map((item, index) => (
                  <div className="cart-item" key={index}>
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                    <button onClick={() => onRemoveFromCart(index)}>
                      Remove
                    </button>
                  </div>
                ))}

                <p className="cart-total">Total: ${total.toFixed(2)}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

window.NavBar = NavBar;