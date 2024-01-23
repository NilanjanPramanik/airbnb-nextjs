"use client";

import { useState } from "react";
import { DateRange } from "react-date-range";
import {format} from 'date-fns';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DatePicker = ({setStartDate, setEndDate}) => {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);


  const handleSetDate = (item) => {
    setDates([item.selection])
    setStartDate(format(dates[0].startDate, 'yyyy/MM/dd'))
    setEndDate(format(dates[0].endDate, 'yyyy/MM/dd'))
  }


  return (
    <div className="flex w-full">
      <div className="pl-4">
        <DateRange
          editableDateInputs={true}
          onChange={handleSetDate}
          moveRangeOnFirstSelection={false}
          ranges={dates}
          minDate={new Date()}
        />
      </div>
    </div>
  );
};

export default DatePicker;
