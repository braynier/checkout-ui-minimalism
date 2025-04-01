import { useState, useEffect } from "react";
import CartOverview from "./CartOverview";
import CartItem from "./CartItem";
import Line from "../ui/Line";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { isExpanded, cartItems } = useCart();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="xxl:py-10 xxl:pr-[27.5rem] xxl:pl-[2.375rem] w-full bg-neutral-100 px-4">
      {!isLargeScreen && <CartOverview />}

      {(isExpanded || isLargeScreen) && (
        <ul className="pb-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-3 flex h-full w-full flex-col gap-4 lg:hidden">
            <Line />
            <Line />
            <Line />
          </div>
        </ul>
      )}
    </div>
  );
};

export default Cart;
