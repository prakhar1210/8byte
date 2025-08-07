"use client";

import React from "react";
import { Card, CardContent } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { usePortfolioData } from "../hooks/usePortfolioData";

const PortfolioDashboard = () => {
  const { data, loading, error } = usePortfolioData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Your Stocks
      </Typography>
      <Card elevation={3}>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  <TableCell>
                    <strong>Stock</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Exchange</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Qty</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Purchase Price</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Investment</strong>
                  </TableCell>
                  <TableCell>
                    <strong>CMP</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Present Value</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Gain/Loss</strong>
                  </TableCell>
                  <TableCell>
                    <strong>P/E Ratio</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Earnings</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((stock, i) => {
                  const presentValue = stock.cmp * stock.quantity;
                  const gainLoss = presentValue - stock.investment;
                  return (
                    <TableRow key={i}>
                      <TableCell>{stock.name}</TableCell>
                      <TableCell>{stock.exchange}</TableCell>
                      <TableCell>{stock.quantity}</TableCell>
                      <TableCell>
                        ₹{stock.purchasePrice.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        ₹{stock.investment.toLocaleString()}
                      </TableCell>
                      <TableCell>₹{stock.cmp.toFixed(2)}</TableCell>
                      <TableCell>₹{presentValue.toFixed(2)}</TableCell>
                      <TableCell>
                        <Chip
                          label={`₹${gainLoss.toFixed(2)}`}
                          sx={{
                            backgroundColor: gainLoss >= 0 ? "green" : "red",
                            color: "white",
                          }}
                        />
                      </TableCell>
                      <TableCell>{stock.peRatio}</TableCell>
                      <TableCell>{stock.earnings}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioDashboard;
