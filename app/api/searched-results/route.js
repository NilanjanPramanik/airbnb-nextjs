import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();

  const result = await axios.get(
    "https://airbnb-search.p.rapidapi.com/property/search",
    {
        params: {
            query: data.location,
            checkin: data.startDate,
            checkout: data.endDate
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
        }
    }
  );
    console.log(result?.data.data)
  return NextResponse.json(result?.data.data, {"status": 200})
}
