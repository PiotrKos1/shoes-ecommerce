import { Outlet, Link } from "react-router-dom";
import { GoKebabHorizontal, GoInbox } from "react-icons/go";

function Nav() {



    return (
        <>
      <nav className="hidden md:h-16 md:flex items-center justify-center bg-third-color uppercase">
        <ul className="flex justify-between w-1/2 list-none text-text-color font-bold">
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
            <div className="flex justify-end pl-60"><button className="pointer"><a><GoInbox className="text-xl"/></a></button>
            <p className="text-xs">3</p>
            </div>
      </nav>
      <nav className="relative md:hidden h-10 flex justify-end bg-third-color text-text-color">
          <button className="pr-12"><GoKebabHorizontal /></button>
        <div className="flex">
          <button className="pointer text-main-color"><a><GoInbox /></a></button>
          <p className="text-main-color text-xs">3</p>
        </div>
        <ul className="hidden absolute top-10 right-0 pr-8">
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
        {/* <div className="flex"><button className="pointer"><a><GoInbox className="text-xl"/></a></button>
            <div className="text-xs">3</div>
            </div> */}
      </nav>

      <Outlet />
    </>
    )
}

export default Nav;