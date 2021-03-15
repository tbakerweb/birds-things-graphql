const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const logger = require("./core/logger");
const extensions = ({ context }) => {
  return {
    runTime: Date.now() - context.startTime,
  };
};

// Create the App Engine
const app = express();
app.use(cors());
app.use(logger);

// // Configure Application Header and configuration
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   // res.setHeader('Access-Control-Allow-Credentials', false);
//   next();
// });

app.listen(5000, async () => {
  await mongoose.connect("mongodb://192.168.1.5:27017/zenbot4", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("GraphQL Server is running on port:", 5000);
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);
const graphqlSchema = require("./schemas/index");
app.use(
  "/graphql",
  graphqlHTTP((request) => {
    return {
      context: { startTime: Date.now() },
      graphiql: true,
      schema: graphqlSchema,
      extensions,
    };
  })
);
