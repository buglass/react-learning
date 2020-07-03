/*
 * Client-Logging configuration
 */
export default ({
  apiUrl: process.env.APP_LOGGER_API || "",
  batchSize: parseInt(process.env.APP_LOGGER_BATCHSIZE || ""),
  isLogEnabled: process.env.APP_LOGGER_ISENABLED === "false",
  isTimed: process.env.APP_LOGGER_ISTIMED === "false",
  loggerName:process.env.APP_LOGGER_NAME || "",
  timeInterval: parseInt(process.env.APP_LOGGER_TIMEINTERVAL || "")
});
