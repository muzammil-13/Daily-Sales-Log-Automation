# 📋 Daily Sales Log Automation: Setup Guide

This guide provides step-by-step instructions for setting up the Daily Sales Log Automation system for your retail business.

## 📑 Table of Contents
- [Prerequisites](#prerequisites)
- [Step 1: Create the Google Form](#step-1-create-the-google-form)
- [Step 2: Set Up Google Sheets](#step-2-set-up-google-sheets)
- [Step 3: Configure Automation Scripts](#step-3-configure-automation-scripts)
- [Step 4: Test Your Setup](#step-4-test-your-setup)
- [Step 5: Deploy to Staff](#step-5-deploy-to-staff)
- [Customization Options](#customization-options)
- [Verification Checklist](#verification-checklist)

## Prerequisites

Before you begin, make sure you have:
- A Google account (free personal account is sufficient)
- Basic familiarity with Google Forms and Google Sheets
- Access to a computer for initial setup
- Mobile devices for staff to use the form

## Step 1: Create the Google Form

1. **Access Google Forms**
   - Go to [forms.google.com](https://forms.google.com)
   - Click "+ Blank" to create a new form

2. **Set Up Form Basics**
   - Title: "Daily Sales Entry"
   - Description: "Record each sale transaction using this form"

3. **Add Required Questions**
   - Question 1: "Item Name" (Short answer)
   - Question 2: "Quantity" (Number)
   - Question 3: "Price per Unit" (Number)
   - Question 4: "Date" (Date) - *Optional: can be auto-captured*

4. **Configure Form Settings**
   - Click the Settings ⚙️ icon
   - Under "General" tab:
     - Collect email addresses (if you want to track who submits entries)
     - Limit to 1 response (uncheck this)
   - Under "Presentation" tab:
     - Show progress bar (optional)
     - Shuffle question order (leave unchecked)
   - Click "Save"

5. **Customize Theme**
   - Click the Palette icon 🎨
   - Choose a theme color that matches your business branding
   - Optionally add a header image with your business logo

## Step 2: Set Up Google Sheets

1. **Connect Form to Sheets**
   - In your form, click the "Responses" tab
   - Click the Google Sheets icon 📊
   - Select "Create a new spreadsheet"
   - Name your spreadsheet (e.g., "Daily Sales Log")
   - Click "Create"

2. **Organize Your Spreadsheet**
   - Rename the first sheet to "Sales Data"
   - Create a second sheet named "Inventory"
   - In the Inventory sheet, add these columns:
     - A: Item Name
     - B: Current Stock
     - C: Reorder Threshold
   - Add some sample inventory items with stock levels and thresholds

3. **Add Calculation Formulas**
   - In the Sales Data sheet, add a new column header "Total Amount"
   - In the cell below it, add the formula: `=B2*C2` (assuming Quantity is B and Price is C)
   - In a separate cell (e.g., G1), add: "Today's Total:"
   - In H1, add the formula: `=SUMIF(D:D, TODAY(), E:E)` (adjust column references as needed)

## Step 3: Configure Automation Scripts

1. **Access Apps Script**
   - In your Google Sheet, click "Extensions" > "Apps Script"
   - This opens the Apps Script editor in a new tab

2. **Create Daily Report Script**
   - Replace the default code in `Code.gs` with the `sendDailyReport` script from the README
   - Update the email address in the script to your own
   - Click the disk icon 💾 to save the project
   - Name your project "Sales Automation"

3. **Add Low Stock Alert Script**
   - Click the + icon next to "Files" to create a new script file
   - Name it "checkLowStock.gs"
   - Paste the `checkLowStock` script from the README
   - Update the email address in the script to your own
   - Save the project again

4. **Set Up Triggers**
   - Click "Triggers" in the left sidebar
   - Click "+ Add Trigger"
   - For Daily Sales Report:
     - Choose function: `sendDailyReport`
     - Event source: `Time-driven`
     - Type of time: `Day timer`
     - Time of day: `9pm to 10pm`
     - Click "Save"
   - Click "+ Add Trigger" again
   - For Low Stock Alert:
     - Choose function: `checkLowStock`
     - Event source: `Time-driven`
     - Type of time: `Day timer`
     - Time of day: `9am to 10am`
     - Click "Save"

5. **Grant Permissions**
   - When prompted, click "Review Permissions"
   - Select your Google account
   - Click "Advanced" and then "Go to Sales Automation (unsafe)"
   - Click "Allow"

## Step 4: Test Your Setup

1. **Test Form Submission**
   - Open your Google Form
   - Fill out the form with a test sale
   - Submit the form
   - Check your Google Sheet to verify the data was recorded correctly

2. **Test Daily Report Script**
   - In the Apps Script editor, select the `sendDailyReport` function
   - Click the ▶️ Run button
   - Check your email to verify you received the report
   - If there are errors, check the Execution log for details

3. **Test Low Stock Alert**
   - In your Inventory sheet, set a test item's current stock below its threshold
   - In the Apps Script editor, select the `checkLowStock` function
   - Click the ▶️ Run button
   - Check your email to verify you received the alert
   - If there are errors, check the Execution log for details

## Step 5: Deploy to Staff

1. **Create Form Shortcut for Staff**
   - Get the shareable link for your form:
     - Click the "Send" button in the form editor
     - Copy the link provided
   - Share this link with your staff via email or messaging

2. **Add Form to Mobile Home Screens**
   - Instructions for Android:
     - Open the form link in Chrome
     - Tap the three dots menu
     - Select "Add to Home screen"
   - Instructions for iOS:
     - Open the form link in Safari
     - Tap the Share icon
     - Select "Add to Home Screen"

3. **Train Staff**
   - Show staff how to access and submit the form
   - Explain the importance of accurate data entry
   - Demonstrate how to create a shortcut on their devices

## Customization Options

### Adjust Form Fields
- Add product categories for better organization
- Include payment method (cash, card, etc.)
- Add customer name/contact for loyalty tracking

### Enhance Spreadsheet
- Create pivot tables for sales analysis by product or date
- Add conditional formatting to highlight high-value sales
- Create charts to visualize sales trends

### Modify Scripts
- Customize email format with your business name and branding
- Add WhatsApp integration using third-party services
- Create weekly or monthly summary reports

## Verification Checklist

Use this checklist to ensure your setup is complete:

- [ ] Google Form created with all necessary fields
- [ ] Form connected to Google Sheets
- [ ] Inventory sheet created with items and thresholds
- [ ] Calculation formulas added to spreadsheet
- [ ] Daily report script added and tested
- [ ] Low stock alert script added and tested
- [ ] Time-based triggers configured
- [ ] Permissions granted for script execution
- [ ] Staff trained on form usage
- [ ] Shortcuts created on staff devices

---

## 🔍 Troubleshooting Tips

### Form Issues
- If form submissions aren't appearing in your spreadsheet, check that the form is still connected correctly
- If staff report difficulty accessing the form, ensure they have the correct link and internet access

### Script Issues
- If scripts aren't running automatically, check the Triggers section in Apps Script
- If emails aren't being sent, verify you've granted the necessary permissions
- For script errors, check the Execution log in Apps Script for specific error messages

### Data Issues
- If calculations seem incorrect, verify your formula references match your actual column layout
- If dates are displaying incorrectly, check your spreadsheet's locale settings

---

Need more help? Contact the developer at [your-email@example.com](mailto:your-email@example.com)
