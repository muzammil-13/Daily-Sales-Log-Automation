# 🧾 Daily Sales Log Automation for Family Retail Business

A simple tool to **digitally record**, **track**, and **automate** daily sales entries in a small retail shop. Built using **Google Forms**, **Google Sheets**, and **Google Apps Script** for automation.

### Project Status: [Check](PROJECT_STATUS.md)

## 💡 Problem & Solution

### The Problem
Sales are manually recorded in notebooks, leading to human error, difficulty tracking revenue, and time-consuming reviews.

### The Solution
This project provides a **mobile-friendly** form to log each sale and auto-generates daily totals, clean tabular history, and automated reports.

## 📦 Features

- 📱 Form-based input: Item, Quantity, Price, Date
- 📊 Auto-calculated totals and summaries
- ⚠️ Low stock alert system
- 📤 Daily email report automation
- 🔒 No login required for staff, mobile-first setup

## 🚀 Quick Start Guide

1. **Create a Google Form** with fields: Item Name, Quantity, Price
2. **Connect to Google Sheets** via Responses > Create Spreadsheet
3. **Copy the Apps Script code** from the examples in the setup guide
4. **Set up triggers** for daily reports and low stock alerts
5. **Share the form link** with your staff

For detailed instructions, see the [Setup Guide](docs/setup-guide.md).

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

## 🔧 Key Components

- **Google Forms** – Mobile-friendly data entry
- **Google Sheets** – Data storage and calculations
- **Apps Script** – Automation for reports and alerts

## 🔍 Troubleshooting

For common issues and solutions, see the [Setup Guide](docs/setup-guide.md#troubleshooting-tips).

## ⚙️ Technical Requirements

- **Google Account**: Free personal account is sufficient
- **Permissions**: Forms, Sheets, Apps Script, Gmail
- **Device Compatibility**: Works on any device with a web browser

## 🚀 Future Scope
- React frontend for POS-style input
- Firebase/Firestore for multi-user sync
- Staff-wise login and performance tracking
- QR-based item entry

## 📎 Credits & License
Built by Muzammil Ibrahim for automating a family retail business using cloud tools and scripting.

[MIT License](LICENSE) – Use freely, modify, and contribute!
