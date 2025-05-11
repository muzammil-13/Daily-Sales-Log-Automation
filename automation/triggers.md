<!-- Document the triggers you’ve set (e.g., run every night at 10 PM): -->

## ⏰ Daily Sales Report Trigger

**Function:** `sendDailyReport`
**Runs At Deployment:** `Head`
**Event Source:** `Time-driven`
**Type of Trigger:** `Day timer`
**Scheduled Time:** `9 PM to 10 PM (GMT+05:30)`
**Failure Notification:** `Notify me daily`

### 📌 Purpose:

Automatically sends a daily sales summary email based on form submissions logged in the connected Google Sheet.


## ⏰ Low Stock Alert Trigger

**Function:** `checkLowStock`
**Runs At Deployment:** `Head`
**Event Source:** `Time-driven`
**Type of Trigger:** `Day timer`
**Scheduled Time:** `9 AM to 10 AM (GMT+05:30)`
**Failure Notification:** `Notify me daily`

### 📌 Purpose:

This trigger checks the Google Sheet for items with low stock every morning and sends a stock alert email to the business owner.

---
