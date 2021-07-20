const express = require("express");
const cors = require("cors");

// // Load .env file environment variables.
// require("dotenv").config();

// Create global app object.
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(require("./routes"));

app.get("/test", (req, res) => {
  res.send("Hello from the server");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
