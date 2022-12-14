const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const downloadRoute = require("./routes/download");
const authRoute = require("./routes/auth");
const adsRoute = require("./routes/ads");
const productsRoute = require("./routes/product");
const cartsRoute = require("./routes/cart");
const ordersRoute = require("./routes/order");
const bookauthRoute = require("./routes/bookauth");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection Successful!"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/ads", adsRoute);
app.use("/api/products", productsRoute);
app.use("/api/cart", cartsRoute);
app.use("/api/order", ordersRoute);
app.use("/api/download", downloadRoute);
app.use("/api/bookauth", bookauthRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running...");
});
