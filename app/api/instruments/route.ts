

import { NextResponse } from "next/server";
export async function GET(request: Request) {
    const listOfInstruments = [
        {
          instrumentId: "101",
          instrumentName: "Alpha Corp Shares",
          instrumentType: "Equity",
          currency: "USD",
          isinCode: "US1234567890",
          sedolCode: "1234567",
          symbol: "ALPHA",
          country: "USA",
          sector: "Technology",
          createdAt: "2023-01-01T12:00:00Z",
          modifiedAt: "2023-06-01T12:00:00Z"
        },
        {
          instrumentId: "102",
          instrumentName: "Beta Govt. Bond",
          instrumentType: "Debt",
          currency: "EUR",
          isinCode: "EU1234567890",
          sedolCode: "7654321",
          symbol: "BETA",
          country: "Germany",
          sector: "Government",
          createdAt: "2023-02-01T12:00:00Z",
          modifiedAt: "2023-07-01T12:00:00Z"
        },
        {
          instrumentId: "103",
          instrumentName: "Gamma Mutual Fund",
          instrumentType: "Mutual Fund",
          currency: "GBP",
          isinCode: "GB1234567890",
          sedolCode: "1122334",
          symbol: "GAMMA",
          country: "UK",
          sector: "Finance",
          createdAt: "2023-03-01T12:00:00Z",
          modifiedAt: "2023-08-01T12:00:00Z"
        }]

    console.log("hello")
    return NextResponse.json({data: listOfInstruments, error: null});
}
