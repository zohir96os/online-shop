import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.length);

  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shopping"}>Shopping</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart: {cartItems} items</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
