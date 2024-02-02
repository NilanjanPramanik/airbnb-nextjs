"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "../lib/store";
import { useRouter } from "next/navigation";

const HotelCard = ({ hotelData }) => {
  const { setClickedHotel } = useStore();
  const router = useRouter();

  const [picNo, setPicNo] = useState(0);

  const handlePicChangeNext = () => {
    if (picNo < 5) {
      setPicNo(picNo + 1);
    }
    if (picNo === 5) {
      setPicNo(0);
    }
  };

  const handlePicChangePrev = () => {
    if (picNo > 0) {
      setPicNo(picNo - 1);
    }
  };

  const handleHotelCardClick = () => {
    // console.log(hotelData);
    // console.log("first");
    setClickedHotel(hotelData);
    router.push(`/hotel/${hotelData.listing.id}/`);
    
  };

  // console.log(hotelData);
  return (
    <div
      onClick={handleHotelCardClick}
      className="flex flex-col w-fit gap-2 "
    >
      <div className=" h-[450px] w-[450px] overflow-hidden bg-red-200 rounded-xl relative">
        <Image
          src={hotelData?.listing?.contextualPictures[picNo].picture}
          fill
          alt="hotel_image"
          className=" object-cover"
        />

        <span
          onClick={handlePicChangePrev}
          className={`${
            picNo === 0 && "hidden"
          } bg-white/50 absolute top-[50%] left-4 p-2 z-10 rounded-full hover:bg-white/60`}
        >
          <ChevronLeftIcon className="w-7 h-6 " />
        </span>
        <span
          onClick={handlePicChangeNext}
          className={` bg-white/50 absolute top-[50%] right-4 p-2 z-10  rounded-full hover:bg-white/60`}
        >
          <ChevronRightIcon className="w-7 h-7 " />
        </span>
      </div>
      <div className="flex flex-col gap-2 cursor-pointer">
        <div className="flex justify-between">
          <span className="hover:underline hover:opacity-70">
            <h2 className=" font-semibold">{hotelData?.listing?.title}</h2>
            <p className="text-gray-600 text-sm">{hotelData?.listing?.name}</p>
            <p className="text-gray-600">
              {hotelData?.listing.structuredContent.primaryLine?.body}
            </p>
          </span>
          <span className="flex gap-1 text-xs justify-center align-middle">
            <StarIcon className="h-4 w-4 text-black" />
            {hotelData.listing.avgRatingLocalized}
          </span>
        </div>
        <span className=" hover:opacity-70">
          <h2 className=" font-semibold">
            {
              hotelData?.pricingQuote.structuredStayDisplayPrice.primaryLine
                ?.accessibilityLabel
            }{" "}
            {/* <span className="font-normal">/night</span> */}
          </h2>
          <p>
            {
              hotelData?.pricingQuote.structuredStayDisplayPrice.secondaryLine
                ?.accessibilityLabel
            }
          </p>
        </span>
      </div>
    </div>
  );
};

export default HotelCard;
