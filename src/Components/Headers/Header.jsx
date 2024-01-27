import { useContext, useState } from "react";
import CartDetails from "../Movie/CartDetails";
import { MovieContext, ThemeContext } from "../../Context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { state } = useContext(MovieContext);

  function handleCartShow() {
    if(state.cartData.length > 0) {
        setShowCart(true);
    } else {
        setShowCart(false);
    }
}

  return (
    <>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
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
                onClick={() => setDarkMode((darkMode) => !darkMode)}
              >
                <img
                  src={
                    darkMode
                      ? "/Images/icons/sun.svg"
                      : "/Images/icons/moon.svg"
                  }
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
                onClick={handleCartShow}
              >
                <img
                  src="/Images/shopping-cart.svg"
                  width="24"
                  height="24"
                  alt=""
                />
                {state.cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
