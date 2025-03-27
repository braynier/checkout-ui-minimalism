import Logo from "../icons/Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-[1920px] items-center justify-between p-4">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
