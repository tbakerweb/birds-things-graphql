const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const logger = require("./core/logger");

// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import { graphqlHTTP } from 'express-graphql';
// import logger from './core/logger';

const extensions = ({ context }) => {
  return {
    runTime: Date.now() - context.startTime,
  };
};

// Create the App Engine
const app = express();
const app_port = 5000;
// Add Extensions to the app
app.use(cors());
app.use(logger);



// Start the app, which connects to the DB
app.listen(app_port, async () => {

  // const demoMongoose = require('./modules/demo/demo-db');

  // Connect to the Zenbot GraphQL
  zenbotGql = await mongoose.createConnection("mongodb://192.168.1.5:27017/zenbot4", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  zenbotGql.on(
    "error",
    console.error.bind(console, "Zenbot MongoDB connection error:")
  );

  // Connect to the Birds-Things GraphQL
  birdsthingsGql = await mongoose.createConnection("mongodb://192.168.1.5:27017/birdsthings", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  birdsthingsGql.on(
    "error",
    console.error.bind(console, "Zenbot MongoDB connection error:")
  );

  // GraphQL Loaded
  console.log('GraphQL Loaded');
  console.log('Running GraphQL on port: ' + app_port);
});

// Import the Schemas
const graphqlSchema = require("./schemas");

// Register the GraphQL Path
app.use(
  '/graphql',

  // Assign the graphQL HTTP handler as the Route Handler
  graphqlHTTP((request) => {
    return {
      context: { startTime: Date.now() },
      graphiql: true,
      schema: graphqlSchema,
      extensions,
    };
  })
);
