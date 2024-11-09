const express = require("express");
const app = express();
const carRouter = require("./routes/carRouter");
const { middleware1, middleware2} = require("./middleware/customMiddlewares");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");

// Built-in middleware to parse JSON
// - Parses incoming JSON requests and makes the parsed data available in req.body
app.use(express.json());

// Custom middleware to g HTTP method, URL and timestamp of each request
// Logs each request before any other middleware or route handlers are processed
// Application-level middleware = applies to all routes
app.use(logger);

// middleware1 runs for the root URL (/) requests
// Route-level middleware = applies only to specific routes
app.get("/", middleware1 ,(req, res) => res.send("API Running!"));

// Use the carRouter for all /cars routes
app.use("/cars", carRouter);

app.use(middleware2);

// Handles any requests that do not match any route and returns a 404 status
app.use(notFound);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
