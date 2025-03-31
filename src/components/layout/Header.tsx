import { useCart } from "../../context/CartContext";
import Logo from "../icons/Logo";
import Navbar from "./Navbar";

const Header = () => {
  const { isExpanded } = useCart();

  if (!isExpanded) return;

  return (
    <header className="border-gray-lighter mx-auto flex max-w-[1920px] items-center justify-between border-b p-4">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
