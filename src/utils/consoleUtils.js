export function disableConsoleLogsInProduction() {
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV === "production") {
    // Production mode, disable console logs
    console.log = function () {};
  }
}
