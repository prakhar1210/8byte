"use client";

import { useEffect, useState } from "react";

interface StockData {
  name: string;
  symbol?: string;
  exchange: string;
  purchasePrice: number;
  quantity: number;
  investment: number;
  cmp: number;
  peRatio: number;
  earnings: string;
}

export const usePortfolioData = () => {
  const [data, setData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/portfolio");
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError("Failed to fetch real-time portfolio data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // 10s refresh
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
};
