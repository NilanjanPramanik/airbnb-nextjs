import axios from "axios"
import { NextResponse } from "next/server"

export async function POST(req, res){
    const query = await req.json()
    // console.log(data)
    const data = await axios.get('https://airbnb-search.p.rapidapi.com/autocomplete', {
        params: {
            query: query?.location,
            locale: 'en-US',
            currency: 'USD'
          },
          headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': process.env.RAPID_API_HOST
          }
    })
    // console.log(data?.data.data)
    return NextResponse.json(data?.data.data)
}