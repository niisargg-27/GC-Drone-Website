import './App.css';
import Order from './components/userpage/order/order';
import Orderhistory from './components/userpage/orderhistory/orderhistory';
import Adminorder from './components/adminpage/adminOrderhistory/adminorder';

function App() {
  return (
    <div className="App">
      <Order />
      <Orderhistory />
      <Adminorder />
    </div>
  );
}

export default App;
