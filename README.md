# 📊 Dynamic Portfolio Dashboard

A full-stack real-time stock portfolio dashboard built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Node.js**. This app displays live market data including CMP, P/E Ratio, and earnings for a set of stocks, with periodic updates every 15 seconds.

---

## 🚀 Features

* 🔄 Real-time CMP from Yahoo Finance
* 🧮 P/E Ratio and EPS fetched dynamically
* 🎨 Clean, responsive UI using MUI + Tailwind CSS
* 📊 Sector grouping, gain/loss indicators with color-coded logic
* 📦 Modular code with custom hooks and API integration
* 💡 Fully responsive layout for desktop, tablet, and mobile

---

## 🧩 Tech Stack

| Layer         | Technology                                          |
| ------------- | --------------------------------------------------- |
| Frontend      | Next.js (App Router), TypeScript, Tailwind CSS, MUI |
| Backend       | Node.js API Routes via Next.js                      |
| Data Fetching | `yahoo-finance2` NPM library                        |

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── api/
│   │   └── portfolio/route.ts       # API route for fetching stock data
│   └── page.tsx                     # Renders the dashboard component
├── components/
│   └── PortfolioDashboard.tsx       # Dashboard UI
├── hooks/
│   └── usePortfolioData.ts          # Custom hook for API integration
├── data/
│   └── mockData.ts                  # Mock data for testing
```

---

## 🛠️ Setup Instructions

### Prerequisites

* Node.js >= 18
* npm >= 9
* Internet connection (for live data fetch)

### Installation

```bash
# 1. Clone the repository
$ git clone https://github.com/yourusername/portfolio-dashboard.git

# 2. Navigate into the project directory
$ cd portfolio-dashboard

# 3. Install dependencies
$ npm install

# 4. Start the development server
$ npm run dev

# 5. Open your browser and visit:
http://localhost:3000
```

### To Build for Production

```bash
npm run build
npm run start
```

---

## 🔗 API Used

This app uses [`yahoo-finance2`](https://www.npmjs.com/package/yahoo-finance2) for fetching:

* **CMP (Current Market Price)**
* **P/E Ratio (Trailing PE)**
* **EPS (Earnings Per Share)**

> ⚠️ **Disclaimer:** Yahoo Finance does not offer a public official API. This app uses an unofficial library that parses Yahoo Finance data. It may break if Yahoo modifies its internal structure.

---

## 📈 Example Portfolio (Mock + Live Data)

```ts
const mockStocks = [
  { name: 'TCS', symbol: 'TCS.NS', quantity: 10, purchasePrice: 3200 },
  { name: 'INFY', symbol: 'INFY.NS', quantity: 15, purchasePrice: 1400 },
  { name: 'HDFCBANK', symbol: 'HDFCBANK.NS', quantity: 20, purchasePrice: 1550 },
  { name: 'RELIANCE', symbol: 'RELIANCE.NS', quantity: 8, purchasePrice: 2500 },
  { name: 'ITC', symbol: 'ITC.NS', quantity: 25, purchasePrice: 450 },
  { name: 'LT', symbol: 'LT.NS', quantity: 12, purchasePrice: 2900 },
  { name: 'SBIN', symbol: 'SBIN.NS', quantity: 18, purchasePrice: 600 },
];
```

These stocks are fetched live using the API and displayed dynamically.

---

## 🧠 Key Concepts Implemented

* ✅ **Real-time updates** using `setInterval`
* ✅ **Dynamic data transformation**: converting raw API response into UI-ready schema
* ✅ **Color-coded gain/loss**: Green = Profit, Red = Loss
* ✅ **Portfolio % Calculation**: Relative weight of each stock
* ✅ **API error fallback**: Returns an empty array and fails gracefully
* ✅ **Client/Server separation** using hooks + API layer

---

## 🧪 Testing & Debugging Tips

* To debug API issues: check console for logs or inspect browser network tab
* If `data.map is not a function`, your API probably returned `{ message: "error" }` instead of an array
* You can return mock data temporarily from API for UI development

---

## 🚀 Deployment

Recommended platforms:

* [Vercel](https://vercel.com/) (default for Next.js)
* [Netlify](https://netlify.com/)

Steps for Vercel:

1. Push code to GitHub
2. Import repo in Vercel
3. Set build command: `npm run build`
4. Output directory: `.next`

---

## 👨‍💻 Author & Attribution

This project was built for the assignment of **8Byte**

* 📍 Address: Bhopal, Madhya Pradesh.
* 🧠 Developer: \Prakhar Shrivastava

---

## 📄 License

MIT License — free to use and modify with attribution.
