'use strict'
const logger = require("./winston");

module.exports = async (event, context) => {
  return context.status(200).succeed();
}
