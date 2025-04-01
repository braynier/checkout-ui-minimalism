interface CartItemProps {
  item: {
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const { name, price, quantity, image } = item;

  const total = quantity * price;

  return (
    <li className="flex items-center justify-between border-t border-gray-200 pt-4 lg:border-0">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 rounded-md">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center"
          />

          <div className="bg-gray-dark absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold text-white">
            {quantity}
          </div>
        </div>
        <div>
          <h3 className="text-gray-darkest text-sm font-bold">{name}</h3>
        </div>
      </div>
      <div className="text-sm font-medium text-gray-900">
        ${total.toFixed(2)}
      </div>
    </li>
  );
};

export default CartItem;
