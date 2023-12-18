import { Outlet, Link } from "react-router-dom";
import { GoKebabHorizontal } from "react-icons/go";

function Nav() {



    return (
        <>
      <nav className="hidden md:h-16 md:flex items-center justify-center bg-third-color uppercase font-bold">
        <ul className="flex justify-between  w-1/2 list-none text-text-color">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav className="relative md:hidden h-10 flex justify-end bg-third-color text-text-color">
          <button className="pr-12"><GoKebabHorizontal /></button>
        <ul className="hidden absolute top-10 right-0 pr-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
    )
}

export default Nav;