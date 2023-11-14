import "./styles/App.css";
import Summary from "./pages/summary/Index";
import Order from "./pages/order/Index";

function App() {
  return (
    <div className="App">
      <Order />
      <Summary />
    </div>
  );
}

export default App;
