import "./styles/App.css";
import Summary from "./pages/summary/Index";
import Order from "./pages/order/Index";

function App() {
  return (
    <div className="App">
      <div className="inner">
        <Order />
        <Summary />
      </div>
    </div>
  );
}

export default App;
