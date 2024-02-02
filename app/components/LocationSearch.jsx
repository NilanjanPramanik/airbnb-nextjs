"use client";

import { MapPinIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import { useEffect, useState } from "react";

const LocationSearch = ({ location, setLocation }) => {
  const [result, setResult] = useState([]);
//   const [inputLocation, setInputLocation] = useState("");

  useEffect(() => {
    if (location?.length > 4) {
      handleLocation();
    }
  }, [location]);

  const handleLocation = async () => {
    if (location?.length > 4) {
      setTimeout(async () => {
        // Fetch the api here
        await axios
          .post("/api/location/", {
            location,
          })
          .then((res) => setResult(res?.data));
      }, 2000);
    }
  };
  return (
    <div className="flex flex-col gap-2 ">
      {result &&
        result.map((data, _id) => (
          <div
            onClick={() => setLocation(data.display_name)}
            className="flex gap-2 hover:bg-gray-500/10 pl-4 py-1 rounded-md cursor-pointer"
          >
            <MapPinIcon className="w-8 h-8 opacity-70" />
            <p key={_id} className="text-gray-600 font-light my-auto ">
              {data.display_name}
            </p>
          </div>
        ))}
        
    </div>
  );
};

export default LocationSearch;
