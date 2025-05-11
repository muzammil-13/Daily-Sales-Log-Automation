# 🧾 Daily Sales Log Automation for Family Retail Business

A simple tool to **digitally record**, **track**, and **automate** daily sales entries in a small retail shop. Built using **Google Forms**, **Google Sheets**, and **Google Apps Script** for automation.

## 📋 Table of Contents
- [Problem & Solution](#💡-problem--solution)
- [Features](#📦-features)
- [Quick Start Guide](#🚀-quick-start-guide)
- [Detailed Setup Instructions](#📝-detailed-setup-instructions)
- [Project Architecture](#🏗️-project-architecture)
- [Automation Scripts](#🔧-automation-scripts)
- [Best Practices](#✨-best-practices)
- [Troubleshooting](#🔍-troubleshooting)
- [Future Scope](#🚀-future-scope)
- [Technical Requirements](#⚙️-technical-requirements)
- [Credits & License](#📎-credits--license)

## 💡 Problem & Solution

### The Problem
Sales are manually recorded in notebooks, leading to:
- Human error in totals
- Difficulty tracking daily/weekly revenue
- Time-consuming manual review

### The Solution
This project provides a **mobile-friendly** form to log each sale and auto-generates:
- Daily sales totals
- Clean tabular history
- Automated email/WhatsApp reports

## 🛠️ Tools Used

- **Google Forms** – for easy mobile input
- **Google Sheets** – to store and process data
- **Google Apps Script** – to automate report emails

## 📦 Features

- 📱 Form-based input: Item, Quantity, Price, Date
- 📊 Auto-calculated totals and summaries
- ⚠️ Low stock alert (via conditional formatting or script)
- 📤 Daily email report (via script)
- 🔒 No login required for staff, mobile-first setup

## 🚀 Quick Start Guide

1. **Create a Google Form** with fields: Item Name, Quantity, Price
2. **Connect to Google Sheets** via Responses > Create Spreadsheet
3. **Copy the Apps Script code** from the examples below
4. **Set up triggers** for daily reports and low stock alerts
5. **Share the form link** with your staff

## 📝 Detailed Setup Instructions

### 1. Create Your Sales Entry Form

1. Go to [Google Forms](https://forms.google.com) and create a new form
2. Add the following questions:
   - Item Name (Short answer)
   - Quantity (Number)
   - Price (Number)
   - Date (Date) - *Optional: can be auto-captured*
3. Click the Settings ⚙️ icon and enable "Collect email addresses" if you want to track who submits entries
4. Customize the form theme to match your business branding

### 2. Connect to Google Sheets

1. In your form, click the "Responses" tab
2. Click the Google Sheets icon 📊
3. Select "Create a new spreadsheet"
4. Name your spreadsheet (e.g., "Daily Sales Log")
5. Click "Create"

### 3. Set Up Your Spreadsheet

1. In your new spreadsheet, rename the first sheet to "Sales Data"
2. Create a second sheet named "Inventory" with columns:
   - Item Name
   - Current Stock
   - Reorder Threshold
3. Add formulas to calculate daily totals:
   - In a new cell, type: `=SUMIF(C:C, TODAY(), D:D*E:E)` (adjust column references as needed)

### 4. Set Up Automation Scripts

1. In your Google Sheet, click "Extensions" > "Apps Script"
2. Replace the default code with the scripts provided below
3. Save the project with a name (e.g., "Sales Automation")
4. Set up triggers as described in the Triggers section

## 🏗️ Project Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Google Form   │────▶│  Google Sheets  │────▶│   Apps Script   │
│  (Data Entry)   │     │  (Data Storage) │     │  (Automation)   │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                                                         ▼
                                                ┌─────────────────┐
                                                │  Email Reports  │
                                                │   & Alerts      │
                                                └─────────────────┘
```

## 🔧 Automation Scripts

### 1. Daily Sales Report Script

```javascript:sendDailyReport.gs
/**
 * Sends a daily summary of sales
 */
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
```

### 2. Low Stock Alert Script

```javascript:checkLowStock.gs
/**
 * Checks inventory and sends alerts for low stock items
 */
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
```

### Setting Up Triggers

1. In the Apps Script editor, click "Triggers" in the left sidebar
2. Click "+ Add Trigger" button

#### For Daily Sales Report:
- Choose function: `sendDailyReport`
- Event source: `Time-driven`
- Type of time: `Day timer`
- Time of day: `9pm to 10pm`
- Click "Save"

#### For Low Stock Alert:
- Choose function: `checkLowStock`
- Event source: `Time-driven`
- Type of time: `Day timer`
- Time of day: `9am to 10am`
- Click "Save"

## ✨ Best Practices

### For Daily Usage
1. **Submit entries immediately** after each sale to ensure accuracy
2. **Review the daily report** each evening to verify all sales were captured
3. **Update inventory counts** weekly to ensure accurate low stock alerts
4. **Create form shortcuts** on staff phones for quick access

### For Maintenance
1. **Back up your spreadsheet** monthly by downloading a copy
2. **Review and adjust** low stock thresholds quarterly
3. **Clean up old data** by archiving previous years to separate sheets
4. **Check trigger history** periodically to ensure automations are running

## 🔍 Troubleshooting

### Common Issues and Solutions

| Problem | Solution |
|---------|----------|
| **Form submissions not appearing in spreadsheet** | Check that the form is still connected to the correct spreadsheet |
| **Email reports not sending** | Verify trigger is active and you've granted necessary permissions |
| **Incorrect totals in reports** | Check formula references and ensure date formats match |
| **Script errors** | Check Apps Script logs for specific error messages |
| **Low stock alerts not working** | Verify inventory sheet is properly formatted with correct thresholds |

### Permission Issues
When running scripts for the first time, you'll need to:
1. Click "Review Permissions" when prompted
2. Select your Google account
3. Click "Advanced" and then "Go to [Project Name] (unsafe)"
4. Click "Allow"

## ⚙️ Technical Requirements

- **Google Account**: Free personal account is sufficient
- **Permissions Needed**:
  - Google Forms (create)
  - Google Sheets (edit)
  - Google Apps Script (create, edit)
  - Gmail (send emails via script)
- **Device Compatibility**:
  - Form works on any device with a web browser
  - Spreadsheet editing works best on desktop/laptop
- **Storage Limits**: Free Google account includes 15GB shared storage

## 🚀 Future Scope
- React frontend for POS-style input
- Firebase/Firestore for multi-user sync
- Staff-wise login and performance tracking
- QR-based item entry

## 📎 Credits & License
Built by Muzammil Ibrahim for automating a family retail business using cloud tools and scripting.

## 📄 License
MIT License – Use freely, modify, and contribute!
