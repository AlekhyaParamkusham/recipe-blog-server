const express = require("express");
const cors = require("cors");
const app = express();
const italianRoute = require("./routes/italianRoute");
const indianRoute = require("./routes/indianRoute");
const mexicanRoute = require("./routes/mexicanRoute");
const frenchRoute = require("./routes/frenchRoute");
const turkishRoute = require("./routes/turkishRoute");
const americanRoute = require("./routes/americanRoute");
const koreanRoute = require("./routes/koreanRoute");

app.use(express.json());
app.use(cors());

app.use("/italian", italianRoute);
app.use("/indian", indianRoute);
app.use("/mexican", mexicanRoute);
app.use("/french", frenchRoute);
app.use("/turkish", turkishRoute);
app.use("/american", americanRoute);
app.use("/korean", koreanRoute);

module.exports = app;
