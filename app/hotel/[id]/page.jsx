"use client";

import { useStore } from "@/app/lib/store";
import { ArrowLeftIcon, HeartIcon, ShareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const page = () => {
  const { clickedHotel } = useStore();
  console.log(clickedHotel);
  return (
    <div className="relative">
      <header className="sticky w-full top-0 z-10 backdrop-blur-sm bg-white/10">
        <div className="flex justify-between px-6 py-3">
          <ArrowLeftIcon className="w-6 h-6" />
          <div className="flex gap-x-4">
            <ShareIcon className="w-6 h-6 " />
            <HeartIcon className="w-6 h-6 " />
          </div>
        </div>
      </header>

      <main>
        <div className="h-[300px]">
          {/* Image */}
          <Image
            src={clickedHotel.listing.contextualPictures[0].picture}
            fill
            className=" object-cover"
          />
        </div>
        <div className="z-20 mt-12 bg-red-200">
          {/* Content */}
          <h2>{clickedHotel.listing.title}</h2>
          <h4>{clickedHotel.listing.name}</h4>
          <p>{clickedHotel.listing.avgRatingLocalized}</p>
        </div>
      </main>
    </div>
  );
};

export default page;
