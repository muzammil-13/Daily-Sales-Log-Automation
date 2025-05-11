function mainFunction() {
  Logger.log("Starting main function...");

  // Call the function from daily_report.gs
  sendDailyReport();
  Logger.log("Daily report sent (hopefully!).");

  // Call the function from low_stock_alerts.gs
  checkLowStock();
  Logger.log("Low stock check completed.");

  Logger.log("Main function finished.");
}
