function checkLowStock() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Stock");
  const data = sheet.getDataRange().getValues();
  let alertMessage = "⚠️ Low Stock Alert\n\n";

  for (let i = 1; i < data.length; i++) {
    const item = data[i][0];
    const quantity = Number(data[i][1]);
    if (quantity <= 5) {
      alertMessage += `- ${item}: Only ${quantity} left\n`;
    }
  }

  if (alertMessage !== "⚠️ Low Stock Alert\n\n") {
    MailApp.sendEmail({
      to: "muzammilibrahim13@gmail.com",
      subject: "⚠️ Low Stock Alert",
      body: alertMessage
    });
  }
}
