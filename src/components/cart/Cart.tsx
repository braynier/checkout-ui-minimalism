import CartOverview from "./CartOverview";
import CartItem from "./CartItem";
import Line from "../ui/Line";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { isExpanded, cartItems } = useCart();

  return (
    <div className="bg-neutral-50 px-4">
      <CartOverview />
      {isExpanded && (
        <ul className="pb-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-3 flex h-full w-full flex-col gap-4">
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
