export function disableConsoleLogsInProduction() {
  if (process.env.NODE_ENV === "production") {
    // Production mode, disable console logs
    console.log = function () {};
  }
}
