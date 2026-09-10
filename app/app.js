const express = require("express");

const bugRoutes = require("./routes/bugRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

app.use(express.json());

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
    res.status(200).json ({ status: "ok" });
});

app.use("/bugs", bugRoutes);

app.use("/chat", chatRoutes);

module.exports = app;