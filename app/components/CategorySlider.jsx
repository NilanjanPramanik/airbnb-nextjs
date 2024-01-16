'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { CatagoryData } from '@/public/catagoryData';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CatagorySlider = () => {

    const router = useRouter()

    const [catagoryData, setCatagoryData] = useState([]);
    const [activeCatagory, setActiveCatagory] = useState(null)

    useEffect(()=> {
        // getCatagoryData()
        setCatagoryData(CatagoryData.data)
    }, [])

    const getCatagoryData = () => {
        axios.get('https://airbnb-com1.p.rapidapi.com/categories', {
            headers: {
                'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                'X-RapidAPI-Host': 'airbnb-com1.p.rapidapi.com'
              }
        })
        .then((res)=> {
            
            setCatagoryData(res?.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleCatagorySearch = (catagory) => {
        //console.log(catagory.id)
        setActiveCatagory(catagory.id)
        // router.push(`catagory/${catagory.id}`)
        // Link
    }
    

    // console.log(catagoryData)
  return (
    <section className='mt-4 flex gap-10 overflow-scroll no-scrollbar border-b border-gray-200 drop-shadow-md'>
        {
            catagoryData?.map((catagory) => (
                <Link href={`/catagory/${catagory.id}`}>
                <div 
                    onClick={()=>handleCatagorySearch(catagory)} 
                    key={catagory.value} 
                    className={`
                        flex flex-col w-fit cursor-pointer opacity-60 gap-1
                        ${(activeCatagory && activeCatagory === catagory.id )&& "border-b-2 border-black opacity-100"}
                         pb-2`}
                >
                    <Image 
                        src={catagory.imageUrl} 
                        height={22} 
                        width={22} 
                        alt='icon' 
                        className="mx-auto"/>
                    <p className='text-xs text-nowrap'>{catagory.title}</p>
                </div>
                </Link>
            ))
        }
    </section>
  )
}

export default CatagorySlider