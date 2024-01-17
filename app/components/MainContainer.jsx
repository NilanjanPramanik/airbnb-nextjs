'use client'

import axios, { CanceledError } from "axios";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";

const MainContainer = () => {
    const [searchedData, setSearchedData] = useState([])

    const searchParams = useSearchParams();
    const params = searchParams.get('catagory')
    // console.log(params)

    useEffect(()=> {
        axios.post('/api/catagory-results', {
            catagory: params
        })
        .then((res)=> {
            console.log(res.data.data)
            setSearchedData(res?.data.data)
        }).catch((err) => {
            console.error(err)
        })
    }, [params])

  return (
    <div className="grid grid-cols-2 gap-5">
        {/* api limit is overflow
        {searchedData && searchedData.map((hotel, _id)=> (
            <HotelCard key={_id} hotelData={hotel}/>
        ))} */}
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
    </div>
  )
}

export default MainContainer