import axios from "axios"
import { NextResponse } from "next/server"


export async function POST(req, res) {
    const data = await req.json()
    // console.log(data.catagory)

        const resposne = await axios.get('https://airbnb-search.p.rapidapi.com/property/search', {
            params: {
                query: 'New York, NY',
                
                category: data.catagory
              },
              headers: {
                'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.RAPID_API_HOST
              }
        })
        // console.log(resposne.data)
        return NextResponse.json(resposne?.data, {"status": 200})
}