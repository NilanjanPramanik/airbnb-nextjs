"use client";

import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DatePicker = ({ setStartDate, setEndDate, setNext }) => {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(()=> {
    
    setStartDate(format(dates[0].startDate, "yyyy-MM-dd"));
    setEndDate(format(dates[0].endDate, "yyyy-MM-dd"));
  }, [dates])

  const handleSetDate = (item) => {
    setDates([item.selection]);
  };


  return (
    <div className="flex flex-col">
      <div className="pl-4">
        <DateRange
          editableDateInputs={false}
          onChange={handleSetDate}
          moveRangeOnFirstSelection={false}
          ranges={dates}
          minDate={new Date()}
        />
      </div>
      {/* <div className="flex justify-between w-[100vw] pr-[100px]">
        <button className=" py-2 px-3 rounded-lg hover:text-gray-600">Reset</button>
        <button className=" bg-black hover:bg-gray-700 text-white py-2 px-3 rounded-lg ">Next</button>
      </div> */}
    </div>
  );
};

export default DatePicker;
