import React ,{useEffect , useState} from "react";
import axios from "axios";

const Orders = () => {
  const [Orders , setOrders] = useState([]);
  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3002/allOrders");
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() =>{
    fetchOrders();

    const interval = setInterval(fetchOrders, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="orders">
      <h2>Orders</h2>

      {Orders.length === 0 ? (
  <p>You haven't placed any order</p>
) : (
        <table>
          <thead>
            <tr>
              <td>Stock</td>
              <td>Qty</td>
              <td>Price</td>
              <td>Mode</td>
            </tr>
          </thead>

          <tbody>
            {Orders.map((order , index) =>(
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td style={{ color: order.mode === "BUY" ? "green" : "red" }}>
                  {order.mode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
  
};

export default Orders;