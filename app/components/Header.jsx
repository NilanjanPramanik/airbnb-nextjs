"use client";

import {
  MagnifyingGlassIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";
import LocationSearch from "./LocationSearch";
import DatePicker from "./DatePicker";

const MobileSearch = ({
  setMobileSearch,
  sendLocation,
  setStartDate,
  setEndDate,
}) => {
  const [isWhereActive, setWhereActive] = useState(true);
  const [isWhenActive, setWhenActive] = useState(false);
  const [isWhoActive, setWhoActive] = useState(false);

  const [location, setLocation] = useState("");

  useEffect(() => {
    sendLocation(location);
  }, [location]);

  // console.log(startDate, endDate)
  return (
    <div className="flex flex-col gap-3 h-[100vh] ">
      <XCircleIcon
        onClick={() => setMobileSearch(false)}
        className="w-8 h-8 cursor-pointer"
      />

      {/* Location Section  */}
      <div
        onClick={() => {
          setWhereActive(true);
          setWhenActive(false);
          setWhoActive(false);
        }}
        className={`rounded-3xl shadow-lg p-6 flex flex-col gap-2 border border-gray-300/50 ${
          isWhereActive ? "opacity-100" : "opacity-40"
        }`}
      >
        <h2 className="text-xl font-semibold">Where to?</h2>
        <span className="flex border rounded-xl py-3 px-3 gap-2 align-middle ">
          <MagnifyingGlassIcon className="h-5 w-5 mt-[1px]" />
          <input
            type="text"
            placeholder="Search destination"
            className=" outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </span>
        <LocationSearch location={location} setLocation={setLocation} />
      </div>
      {/* Calender Section  */}
      <div
        onClick={() => {
          setWhereActive(false);
          setWhenActive(true);
          setWhoActive(false);
        }}
        className={`rounded-3xl shadow-lg p-6 flex gap-2 border border-gray-300/50 justify-between align-middle cursor-pointer ${
          isWhenActive ? "opacity-100" : "opacity-40"
        }`}
      >
        {isWhenActive ? (
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">When's your trip?</h1>
            <div className=" w-[100px] pt-4">
              <DatePicker setStartDate={setStartDate} setEndDate={setEndDate} />
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold">When</h2>
            <p className="my-auto">Add date</p>
          </>
        )}
      </div>
      {/* Guests Section  */}
      <div
        onClick={() => {
          setWhereActive(false);
          setWhenActive(false);
          setWhoActive(true);
        }}
        className={`rounded-3xl shadow-lg p-6 flex ${
          isWhoActive && "flex-col"
        }  gap-2 border border-gray-300/50 justify-between align-middle cursor-pointer ${
          isWhoActive ? "opacity-100" : "opacity-40"
        }`}
      >
        <h2 className="text-xl font-semibold">Who's coming?</h2>
        {isWhoActive ? (
          <>
            <div className="border-b pb-3 flex justify-between">
              <span>
                <h3 className="font-semibold">Adults</h3>
                <p className="text-sm font-light text-gray-600">
                  Ages 21 or above
                </p>
              </span>
              <span className="flex gap-2 my-auto text-center align-middle justify-center">
                <PlusCircleIcon className="h-7 w-7" />
                <span>0</span>
                <MinusCircleIcon className="h-7 w-7" />
              </span>
            </div>

            <div className="border-b pb-3 flex justify-between">
              <span>
                <h3 className="font-semibold">Adults</h3>
                <p className="text-sm font-light text-gray-600">Ages 2-12</p>
              </span>
              <span className="flex gap-2 text-center align-middle my-auto justify-center">
                <PlusCircleIcon className="h-7 w-7" />
                <span>0</span>
                <MinusCircleIcon className="h-7 w-7" />
              </span>
            </div>

            <div className="border-b pb-3 flex justify-between">
              <span>
                <h3 className="font-semibold">Adults</h3>
                <p className="text-sm font-light text-gray-600">Under 2</p>
              </span>
              <span className="flex gap-2 my-auto text-center align-middle justify-center">
                <PlusCircleIcon className="h-7 w-7" />
                <span>0</span>
                <MinusCircleIcon className="h-7 w-7" />
              </span>
            </div>
          </>
        ) : (
          <p className="my-auto">Add date</p>
        )}
      </div>
    </div>
  );
};

const Header = ({ setLocation, setStartDate, setEndDate }) => {
  const [isMobileSearch, setMobileSearch] = useState(false); // by default this state be false

  const handleMobileSearch = () => {
    setMobileSearch(true);
  };
  return (
    <section>
      {isMobileSearch ? (
        <MobileSearch
          setMobileSearch={setMobileSearch}
          sendLocation={setLocation}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      ) : (
        <div
          onClick={() => handleMobileSearch()}
          className="flex rounded-full border border-gray-300 shadow-lg shadow-gray-200 cursor-pointer"
        >
          <span className="p-4">
            <MagnifyingGlassIcon className="h-7 w-7" />
          </span>
          <div className="my-auto px-4">
            <h1 className=" font-semibold">Anywhere</h1>
            <p className=" text-sm text-gray-500">Any week Any guests</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
