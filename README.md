# 🧾 Daily Sales Log Automation for Family Retail Business

A simple tool to **digitally record**, **track**, and **automate** daily sales entries in a small retail shop. Built using **Google Forms**, **Google Sheets**, and optionally **Google Apps Script** for automation.

## 💡 Problem

Sales are manually recorded in notebooks, leading to:
- Human error in totals
- Difficulty tracking daily/weekly revenue
- Time-consuming manual review

## ✅ Solution

This project provides a **mobile-friendly** form to log each sale and auto-generates:
- Daily sales totals
- Clean tabular history
- Optional email/WhatsApp reports

## 🛠️ Tools Used

- **Google Forms** – for easy mobile input
- **Google Sheets** – to store and process data
- **Google Apps Script** (optional) – to automate report emails
- *(Can later extend to React or Firebase POS UI)*

## 📦 Features

- 📱 Form-based input: Item, Quantity, Price, Date
- 📊 Auto-calculated totals and summaries
- ⚠️ Low stock alert (via conditional formatting or script)
- 📤 Optional daily email report (via script)
- 🔒 No login required for staff, mobile-first setup

## 🧪 How to Use

1. **Create a Google Form**  
   Fields: Item Name, Quantity, Price, Date

2. **Connect to Google Sheets**  
   Go to `Responses` > Click `Create Spreadsheet`.

3. **Add Formulas to Sheet**  
   - Sum daily revenue
   - Weekly report with `SUMIFS` or pivot table

4. *(Optional)* **Set up Automation**
   - Use `Apps Script` → Create report function
   - Trigger it to run daily using time-based triggers

## 📈 Example Output

```text
Daily Sales Summary - 11 May 2025

Total Items Sold: 42
Total Revenue: ₹8,350
Top Item: Milk Packet (Qty: 10)
Low Stock Alerts: Eggs, Bread
```

## 🚀 Future Scope
- React frontend for POS-style input
- Firebase/Firestore for multi-user sync
- Staff-wise login and performance tracking
- QR-based item entry

## 🙌 Author
Muzammil Ibrahim
Self-taught full stack & devops learner, helping small businesses go digital.

## 📄 License
MIT License – Use freely, modify, and contribute!
