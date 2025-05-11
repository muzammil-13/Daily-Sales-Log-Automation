function checkLowStock() {
  // Get the active spreadsheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var inventorySheet = ss.getSheetByName("Inventory");
  
  // Get inventory data
  var inventoryData = inventorySheet.getDataRange().getValues();
  
  // Find items below threshold
  var lowStockItems = [];
  
  for (var i = 1; i < inventoryData.length; i++) {
    var itemName = inventoryData[i][0];
    var currentStock = inventoryData[i][1];
    var threshold = inventoryData[i][2];
    
    if (currentStock <= threshold) {
      lowStockItems.push({
        item: itemName,
        stock: currentStock,
        threshold: threshold
      });
    }
  }
  
  // If there are low stock items, send an alert
  if (lowStockItems.length > 0) {
    var emailBody = "⚠️ Low Stock Alert ⚠️\n\n";
    emailBody += "The following items are running low:\n\n";
    
    for (var j = 0; j < lowStockItems.length; j++) {
      emailBody += "- " + lowStockItems[j].item + ": " + 
                  lowStockItems[j].stock + " remaining (Threshold: " + 
                  lowStockItems[j].threshold + ")\n";
    }
    
    // Send the email
    MailApp.sendEmail({
      to: "your-email@example.com",
      subject: "Low Stock Alert - Action Required",
      body: emailBody
    });
  }
}