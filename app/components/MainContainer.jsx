"use client";

import axios, { CanceledError } from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import { useStore } from "../lib/store";

const MainContainer = ({ hotelData }) => {
  const searchParams = useSearchParams();
  const params = searchParams.get("catagory");
  const { searchedHotels, hotelsCatagory, setHotelsCatagory } = useStore();

  const [searchedData, setSearchedData] = useState([]);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .post("/api/catagory-results", {
        catagory: params,
      })
      .then((res) => {
        // console.log(res.data);
        // setHotelsCatagory(res?.data.data.homes)
        setHotels(res?.data.data.homes);
      })
      .catch((err) => {
        console.error(err);
      });

    setHotels(searchedHotels.homes);
    // setHotels(hotelsCatagory)
  }, [params, searchedHotels]);

  // console.log("hotels data", searchedHotels)

  return (
    <div>
      {/* api limit is overflow
        {searchedData && searchedData.map((hotel, _id)=> (
            <HotelCard key={_id} hotelData={hotel}/>
        ))} */}
      {searchedHotels ? (
        <div className="flex flex-col justify-center items-center lg:grid grid-cols-2 gap-5 px-6 gap-y-10">
        {searchedHotels?.homes?.map((home, id) => (
          <HotelCard key={id} hotelData={home} />
        ))}
      </div>
      ) : (
        hotelsCatagory ? (
          <div className="flex flex-col justify-center items-center lg:grid grid-cols-2 gap-5 px-6">
            {hotels?.map((home, id) => (
              <HotelCard key={id} hotelData={home} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5 px-6">
            loading ...
          </div>
        )

      )}

      {hotels ? (
        <div className="flex flex-col justify-center items-center lg:grid grid-cols-2 gap-5 px-6">
          {hotels?.map((home, id) => (
            <HotelCard key={id} hotelData={home} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-5 px-6">
          loading ...
        </div>
      )}
    </div>
  );
};

export default MainContainer;
