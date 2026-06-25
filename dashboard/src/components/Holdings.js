import React ,{useState , useEffect} from "react";
import axios from "axios";
//import {holdings} from "../data/data";

const Holdings = () => {
  const [allHoldings , setAllHoldings] = useState([]);
  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );
  
  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );
  
  const totalPnL = currentValue - totalInvestment;
  const pnlPercent = totalInvestment
    ? ((totalPnL / totalInvestment) * 100).toFixed(2)
    : 0;
    const API = "http://localhost:3002";

  // const fetchHoldings = () =>{
  //   axios.get("http://localhost:3002/allHoldings").then((res)=>{
  //     console.log(res.data);
  //     setAllHoldings(res.data);
  //   });
  // };
  const fetchHoldings = async () => {
    try {
      const res = await axios.get(`${API}/allHoldings`);
      setAllHoldings(res.data);
    } catch (err) {
      console.log("HOLDINGS ERROR:", err);
    }
  };
  
  
  useEffect(() =>{
    fetchHoldings();
  } , []);

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          <tbody>
            {allHoldings.map((stock) => {
      const price = Number(stock?.price ?? 0);
      const qty = Number(stock?.qty ?? 0);
      const avg = Number(stock?.avg ?? 0);

      const curValue = price * qty;
      const pnl = curValue - avg * qty;

      const isProfit = pnl >= 0;
      const profClass = isProfit ? "profit" : "loss";
      const dayClass = stock?.isLoss ? "loss" : "profit";

      return (
        <tr key={stock?._id || stock?.name}>
          <td>{stock?.name}</td>
          <td>{qty}</td>

          <td>{avg.toFixed(2)}</td>
          <td>{price.toFixed(2)}</td>
          <td>{curValue.toFixed(2)}</td>

          <td className={profClass}>{pnl.toFixed(2)}</td>

          <td className={profClass}>
            {stock?.net ?? "0%"}
          </td>

          <td className={dayClass}>
            {stock?.day ?? "0%"}
          </td>
        </tr>
      );
    })}
</tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5> {totalPnL.toFixed(2)} ({pnlPercent}%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;