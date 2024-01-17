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
            'X-RapidAPI-Key': '95314bd545msh61623b65eab6a7dp1966b0jsncf504e37ede6',
            'X-RapidAPI-Host': 'airbnb-search.p.rapidapi.com'
          }
    })
    // console.log(data?.data.data)
    return NextResponse.json(data?.data.data)
}