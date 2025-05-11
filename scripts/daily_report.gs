function sendDailyReport() {
  // Get the active spreadsheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Sales Data");
  
  // Get today's date in a readable format
  var today = Utilities.formatDate(new Date(), "GMT+5:30", "dd/MM/yyyy");
  
  // Get all data from the sheet
  var data = sheet.getDataRange().getValues();
  
  // Filter for today's entries and calculate totals
  var todaySales = [];
  var totalRevenue = 0;
  var totalItems = 0;
  
  for (var i = 1; i < data.length; i++) {
    var rowDate = Utilities.formatDate(new Date(data[i][2]), "GMT+5:30", "dd/MM/yyyy");
    
    if (rowDate === today) {
      var itemName = data[i][0];
      var quantity = data[i][1];
      var price = data[i][3];
      var amount = quantity * price;
      
      todaySales.push({
        item: itemName,
        quantity: quantity,
        amount: amount
      });
      
      totalRevenue += amount;
      totalItems += quantity;
    }
  }
  
  // Create the email body
  var emailBody = "Daily Sales Summary - " + today + "\n\n";
  emailBody += "Total Items Sold: " + totalItems + "\n";
  emailBody += "Total Revenue: ₹" + totalRevenue + "\n\n";
  emailBody += "Item-wise Breakdown:\n";
  
  for (var j = 0; j < todaySales.length; j++) {
    emailBody += "- " + todaySales[j].item + ": " + todaySales[j].quantity + 
                " units (₹" + todaySales[j].amount + ")\n";
  }
  
  // Send the email
  MailApp.sendEmail({
    to: "your-email@example.com",
    subject: "Daily Sales Report - " + today,
    body: emailBody
  });
}