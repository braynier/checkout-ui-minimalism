import Benefits from "./components/benefits/Benefits";
import Checkout from "./components/checkout/Checkout";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Checkout />
        <Benefits />
      </Main>
    </>
  );
}

export default App;
