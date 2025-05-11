function sendDailyReport() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Form Responses 1");
  const data = sheet.getDataRange().getValues();
  let totalSales = 0;
  let itemsSold = 0;

  for (let i = 1; i < data.length; i++) {
    const quantity = Number(data[i][1]);
    const price = Number(data[i][2]);
    if (!isNaN(quantity) && !isNaN(price)) {
      totalSales += quantity * price;
      itemsSold += quantity;
    }
  }

  const message = `🧾 Daily Sales Summary\n\nTotal Items Sold: ${itemsSold}\nTotal Revenue: ₹${totalSales}`;
  
  MailApp.sendEmail({
    to: "muzammilibrahim13@gmail.com",
    subject: "🧾 Daily Sales Summary",
    body: message
  });
}
