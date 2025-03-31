import CartOverview from "./CartOverview";
import { cart } from "../../../data/data";
import CartItem from "./CartItem";
import Line from "../ui/Line";

const Cart = () => {
  return (
    <div className="bg-neutral-50 px-4 pb-4">
      <CartOverview />
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="mt-3 flex h-full w-full flex-col gap-4">
          <Line />
          <Line />
          <Line />
        </div>
      </ul>
    </div>
  );
};

export default Cart;
