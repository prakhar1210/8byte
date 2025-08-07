
import { NextResponse } from 'next/server';

// ⛔ Don't use import yahooFinance from 'yahoo-finance2';
// ✅ Use require:
// const yahooFinance = require('yahoo-finance2').default;
// eslint-disable-next-line @typescript-eslint/no-require-imports
const yahooFinance = require('yahoo-finance2').default;

const mockStocks = [
  { name: 'TCS', symbol: 'TCS.NS', exchange: 'NSE', quantity: 10, purchasePrice: 3200 },
  { name: 'INFY', symbol: 'INFY.NS', exchange: 'NSE', quantity: 15, purchasePrice: 1400 },
  { name: 'HDFCBANK', symbol: 'HDFCBANK.NS', exchange: 'NSE', quantity: 20, purchasePrice: 1550 },
  { name: 'RELIANCE', symbol: 'RELIANCE.NS', exchange: 'NSE', quantity: 8, purchasePrice: 2500 },
   { name: 'LT', symbol: 'LT.NS', exchange: 'NSE', quantity: 12, purchasePrice: 2900 },
  { name: 'SBIN', symbol: 'SBIN.NS', exchange: 'NSE', quantity: 18, purchasePrice: 600 },
];

export async function GET() {
  try {
    const data = await Promise.all(
      mockStocks.map(async (stock) => {
        const quote = await yahooFinance.quote(stock.symbol);
        const cmp = quote?.regularMarketPrice || 0;
        const peRatio = quote?.trailingPE || 0;
        const eps = quote?.epsTrailingTwelveMonths || 'N/A';

        return {
          ...stock,
          cmp,
          peRatio,
          earnings: `EPS: ₹${eps}`,
          investment: stock.purchasePrice * stock.quantity,
        };
      })
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch stock data:', error);
    return NextResponse.json({ message: 'Failed to fetch stock data' }, { status: 500 });
  }
}
