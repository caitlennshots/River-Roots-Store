function NavBar({ cartCount }) {
  return (
    <nav className="navbar">
      
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
        <span>🛒 Cart: {cartCount}</span>
      </div>
    </nav>
  );
}

window.NavBar = NavBar;