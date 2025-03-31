import Benefits from "./components/benefits/Benefits";
import Checkout from "./components/checkout/Checkout";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Main>
          <Checkout />
          <Benefits />
        </Main>
      </CartProvider>
    </>
  );
}

export default App;
