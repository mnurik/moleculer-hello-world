"use strict";

let { ServiceBroker } = require("moleculer");

const broker = new ServiceBroker({
  nodeID: "server-1",
  transporter: "redis://redis.server:6379"
});

broker.start();
