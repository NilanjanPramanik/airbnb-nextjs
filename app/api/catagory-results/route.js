import axios from "axios"
import { NextResponse } from "next/server"

export async function GET(req) {
    try {
        axios.get('https://airbnb-search.p.rapidapi.com/categories', {
            headers: {
                'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.RAPID_API_HOST
              }
        })
        
    } catch (error) {
        
    }
    
}

export async function POST(req, res) {
    const data = await req.json()
    // console.log(data)

        // const resposne = await axios.get('https://airbnb-data.p.rapidapi.com/WebAPIs/airbnb/searchPropertyByLocation', {
        //     params: {
        //         query: 'Clinton, IA',
        //         locale: 'en',
        //         currency: 'USD',
        //         // category: req
        //       },
        //       headers: {
        //         'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        //         'X-RapidAPI-Host': process.env.RAPID_API_HOST
        //       }
        // })
        // console.log(resposne.data)
        return NextResponse.json({message: "Successfull"})
}