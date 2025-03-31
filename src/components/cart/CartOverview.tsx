import { useCart } from "../../context/CartContext";
import Arrow from "../icons/Arrow";

const CartOverview = () => {
  const { toggleCart, isExpanded, total } = useCart();

  return (
    <div className="flex justify-between p-4">
      <button
        className="flex items-center gap-2 hover:cursor-pointer"
        onClick={toggleCart}
      >
        <span className="text-gray-darkest text-sm">Order overview</span>
        <Arrow direction={isExpanded ? "up" : "down"} />
      </button>
      <span className="text-sm font-medium">${total.toFixed(2)}</span>
    </div>
  );
};

export default CartOverview;
