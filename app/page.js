"use client";

import Header from "./components/Header";
import CatagorySlider from "./components/CategorySlider";
import MainContainer from "./components/MainContainer";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  console.log(location);
  console.log(startDate, endDate);
  return (
    <main className="p-4">
      <header className="px-6 py-2">
        <Header
          setLocation={setLocation}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <CatagorySlider />
      </header>
      <MainContainer />
    </main>
  );
}
