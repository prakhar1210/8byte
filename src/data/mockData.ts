export interface StockData {
  name: string;
  exchange: 'NSE' | 'BSE';
  purchasePrice: number;
  quantity: number;
  investment: number;
  cmp: number;
  peRatio: number;
  earnings: string;
}

export const mockPortfolioData: StockData[] = [
  {
    name: 'TCS',
    exchange: 'NSE',
    purchasePrice: 3200,
    quantity: 10,
    investment: 32000,
    cmp: 3450,
    peRatio: 32.5,
    earnings: 'Q1 FY25: ₹12,300 Cr',
  },
  {
    name: 'Infosys',
    exchange: 'BSE',
    purchasePrice: 1400,
    quantity: 15,
    investment: 21000,
    cmp: 1325,
    peRatio: 28.9,
    earnings: 'Q1 FY25: ₹6,800 Cr',
  },
  {
    name: 'HDFC Bank',
    exchange: 'NSE',
    purchasePrice: 1550,
    quantity: 20,
    investment: 31000,
    cmp: 1620,
    peRatio: 24.1,
    earnings: 'Q1 FY25: ₹11,500 Cr',
  },
  {
    name: 'Reliance',
    exchange: 'BSE',
    purchasePrice: 2500,
    quantity: 8,
    investment: 20000,
    cmp: 2650,
    peRatio: 26.7,
    earnings: 'Q1 FY25: ₹18,700 Cr',
  },
];
