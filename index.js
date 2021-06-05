const config = require("./config");
const { autoPull } = require("./utils");

autoPull(config.autoPullTime);