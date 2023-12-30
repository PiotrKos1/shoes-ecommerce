import { useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { GoKebabHorizontal, GoInbox } from "react-icons/go";
import { BsCart } from "react-icons/bs";


function Nav() {
  const [showNav, setShowNav] = useState<boolean>(false)
  const menuRef = useRef<HTMLElement>(null)

  useEffect(()=>{
    const handleShowNav = (e: any) => {
      if(!menuRef.current?.contains(e.target))
   { setShowNav(false)}
  
    };

    document.addEventListener("mousedown", handleShowNav);

    return() => {
      document.removeEventListener("mousedown", handleShowNav)
    }

  })

  

  



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
            <div className="flex justify-end pl-60"><button className="pointer text-xl"><Link to="/shopping-cart"><BsCart /></Link></button>
            <p className="text-xs">3</p>
            </div>
      </nav>
      <nav ref={menuRef} className="relative md:hidden h-10 flex justify-end bg-third-color text-text-color">
          <button onClick={()=>setShowNav(!showNav)}
           className="pr-12"><GoKebabHorizontal /></button>
        <div className="flex">
          <button className="pointer text-main-color"><Link to="/shopping-cart"><BsCart /></Link></button>
          <p className="text-main-color text-xs">3</p>
        </div>
        {showNav ? <ul  className="absolute top-10 right-0 pr-8">
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
        </ul> : showNav }
        
      </nav>

      <Outlet />
    </>
    )
}

export default Nav;