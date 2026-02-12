import logo from "../assets/images/logo.svg";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import { Link } from "react-router";
function Nav({ cart, setCart }) {
  return (
    <nav>
      <div className="container mx-auto ">
        <div className="flex justify-between">
          <div className="flex items-center gap-8">
            <img src={logo} alt="Clozzet Logo" className="w-[160]" />
            <ul className="lg:flex gap-6 hidden text-2xl">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </div>

          <div className="flex  items-center gap-8">
            <ul className="lg:flex gap-6 hidden text-3xl ">
              <li className="relative inline-block">
                <Link to="/cart">
                  <ShoppingCart />{" "}
                </Link>
                {cart.length > 0 ? (
                  <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                ) : null}
              </li>

              <li>
                {" "}
                <Link to=""> sign up</Link>
              </li>

              <li>
                {" "}
                <Link to="">
                  <button className="cursor-pointer">Log in</button>
                </Link>
              </li>
            </ul>
            <Menu className="lg:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
