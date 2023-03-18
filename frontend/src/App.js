import './App.css';
import Order from './components/userpage/order/order';
import Orderhistory from './components/userpage/orderhistory/orderhistory';
import Adminorder from './components/adminpage/adminOrderhistory/adminorder';
import Orderdetails from './components/userpage/orderDetails/orderdetails';

function App() {
  return (
    <div className="App">
      <Order />
      <Orderhistory />
      <Adminorder />
      <Orderdetails />
    </div>
  );
}

export default App;
