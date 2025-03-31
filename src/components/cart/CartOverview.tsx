import Arrow from "../icons/Arrow";

const CartOverview = () => {
  return (
    <div className="flex justify-between p-4">
      <button className="flex items-center gap-2 hover:cursor-pointer">
        <span className="text-gray-darkest text-sm">Order overview</span>
        <Arrow />
      </button>
      <span className="text-sm font-medium">$299.97</span>
    </div>
  );
};

export default CartOverview;
