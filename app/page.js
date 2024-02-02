"use client";

import Header from "./components/Header";
import CatagorySlider from "./components/CategorySlider";
import MainContainer from "./components/MainContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "./lib/store";

export default function Home() {
  const [location, setLocation] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [searchedRes, setSearchedRes] = useState(null)

  const { setHotels } = useStore()

  const handleSearch = async () => {
    // alert("hello")
    await axios
      .post("/api/searched-results", { 
        location, startDate, endDate 
      })
      .then((res) => {setSearchedRes(res.data);
        setHotels(res.data)});
  };


  return (
    <main className="p-4">
      <header className="px-6 py-2">
        <Header
          setLocation={setLocation}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          handleSearch={handleSearch}
        />
        <CatagorySlider />
      </header>
      <MainContainer />
    </main>
  );
}
