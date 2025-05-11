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
Low Stock Alerts: Induction cooker, Gas stove
```
---

# 📊 Daily Sales Log Automation

Automate your retail store's daily operations using **Google Forms**, **Sheets**, and **Apps Script**. This project includes:

- 📥 Daily sales form submissions
- 🧾 Auto-generated sales summary email every night
- ⚠️ Low stock alerts every morning

---

## 🏗️ Project Structure

```text
├── Google Form → Captures daily sales
├── Google Sheet → Stores responses from the form
└── Apps Script → Automates email reports & alerts
````

---

## 🔧 Scripts Included

### 1. `sendDailyReport.gs`

Sends a daily email summary of all sales recorded for the day.

### 2. `checkLowStock.gs`

Scans for items with stock below a threshold and emails an alert if any found.

---

## ⏰ Scheduled Triggers

### ✅ 1. Daily Sales Report Trigger

Runs every night to send the full day's sales report.

```md
**Function:** `sendDailyReport`  
**Runs At Deployment:** `Head`  
**Event Source:** `Time-driven`  
**Type of Trigger:** `Day timer`  
**Scheduled Time:** `9 PM to 10 PM (GMT+05:30)`  
**Failure Notification:** `Notify me daily`
```

### ⚠️ 2. Low Stock Alert Trigger

Runs every morning to check for low stock and notify if needed.

```md
**Function:** `checkLowStock`  
**Runs At Deployment:** `Head`  
**Event Source:** `Time-driven`  
**Type of Trigger:** `Day timer`  
**Scheduled Time:** `9 AM to 10 AM (GMT+05:30)`  
**Failure Notification:** `Notify me daily`
```

---

## 📝 How to Set It Up

1. Open your **Google Sheet** (linked to your sales form).
2. Click **Extensions → Apps Script**.
3. Paste `sendDailyReport` into `Code.gs`.
4. Add another file `checkLowStock.gs` and paste the stock alert code.
5. Set up both time-based triggers (as shown above).
6. Grant email permissions when prompted on first run.

---

## 🧠 Tip: Column Mapping

Make sure your sales form sheet looks like:

| Item Name | Quantity | Price |
| --------- | -------- | ----- |
| Sugar     | 2        | 30    |

Update column indexes in the script if your sheet differs.

---

## 📬 Email Preview

* **Daily Report:** Item-wise sales summary + total amount
* **Low Stock Alert:** List of items with quantity below set threshold

---

## 🚀 Future Scope
- React frontend for POS-style input
- Firebase/Firestore for multi-user sync
- Staff-wise login and performance tracking
- QR-based item entry

## 📎 Credits
Built by Muzammil Ibrahim for automating a family retail business using cloud tools and scripting.

## 📄 License
MIT License – Use freely, modify, and contribute!
