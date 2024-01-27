import { useState } from "react";
import CartDetails from "../Movie/CartDetails";

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  const handleCartSHow=()=>{
    setShowCart(true)
  }

  return (
    <>
      {showCart && <CartDetails onClose={()=>setShowCart(false)} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src="/Images/logo.svg" width="139" height="26" alt="" />
          </a>
          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src="/Images/ring.svg" width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img
                  src="/Images/icons/sun.svg"
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleCartSHow}
              >
                <img
                  src="../../../public/Images/shopping-cart.svg"
                  width="24"
                  height="24"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
