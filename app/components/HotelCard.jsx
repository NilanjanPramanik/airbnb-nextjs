'use client'

import Image from "next/image"

const HotelCard = ({hotelData}) => {

  return (
    <div className="flex flex-col w-fit gap-2">
        <div className="h-[250px] w-[250px] relative">
            <Image 
                src={"https://a0.muscache.com/im/pictures/miso/Hosting-50364559/original/79056bb7-9f87-4d8e-ab8a-8b81b3864f4a.jpeg?im_w=720"} 
                fill// required
                // change to suit your needs
                className="max-h-[300px] max-w-[300px] rounded-xl object-cover" // just an example
            />
        </div>
        <div className="flex flex-col gap-2">
            <span>
                <h2 className=" font-semibold">Tambon Tha Sut, Thailand</h2>
                <p className="text-gray-600">1,222 kilometers away</p>
                <p className="text-gray-600">2-7 Feb</p>
            </span>
            <span>
                <h2 className=" font-semibold">₹7,685 <span className="font-normal">/night</span></h2>
            </span>
        </div>
    </div>
  )
}

export default HotelCard