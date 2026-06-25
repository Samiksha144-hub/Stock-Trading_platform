
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const HoldingsModel = require("./Models/HoldingsModel");
const authRoute = require("./Routes/AuthRoute");
const cookieParser = require("cookie-parser");
const PositionsModel = require("./Models/PositionsModel");
const OrdersModel = require("./Models/OrdersModel");



const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URI;

//middleware

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoute);

//Routes
app.get('/addHoldings' , async(req , res) =>{
  const newHolding = new HoldingsModel(req.body);
  await newHolding.save();
  res.send("Holding added");
});

app.get("/clearHoldings", async (req, res) => {
  await HoldingsModel.deleteMany({});
  res.send("All holdings deleted");
});

app.get('/allHoldings' ,async(req, res)=>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});
app.get('/allPositions' ,async(req, res)=>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});


app.post('/allOrders', async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    const qtyNum = Number(qty);
    const priceNum = Number(price);

    let holding = await HoldingsModel.findOne({ name });

    // ================= BUY =================
    if (mode === "BUY") {
      if (holding) {
        const totalQty = holding.qty + qtyNum;

        const newAvg =
          ((holding.avg * holding.qty) + (priceNum * qtyNum)) / totalQty;

        holding.qty = totalQty;
        holding.avg = newAvg;

        await holding.save();
      } else {
        await HoldingsModel.create({
          name,
          qty: qtyNum,
          avg: priceNum,
          price: priceNum,
           net: "0%",
           day: "0%"
        });
      }
    }

    // ================= SELL =================
    else if (mode === "SELL") {
      if (!holding) {
        return res.status(400).json({ error: "Stock not found" });
      }

      if (holding.qty < qtyNum) {
        return res.status(400).json({ error: "Not enough quantity" });
      }

      holding.qty -= qtyNum;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await holding.save();
      }

    }

    // ================= SAVE ORDER =================
    await OrdersModel.create({
      name,
      qty: qtyNum,
      price: priceNum,
      mode
    });

    let allHoldings = await HoldingsModel.find({});
res.json({
  message: `${mode} order executed successfully`,
  holdings: allHoldings
});

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).send("Error processing order");
  }

});

app.get('/allOrders', async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching orders");
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
  });
  return res.status(200).json({ success: true });
});
// app.get("/test-db", async (req, res) => {
//   try {
//     await mongoose.connection.db.admin().ping();
//     res.send("MongoDB Connected");
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("MongoDB Failed");
//   }
// });

mongoose.connect(uri)
  .then(() => {
    console.log("DB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));