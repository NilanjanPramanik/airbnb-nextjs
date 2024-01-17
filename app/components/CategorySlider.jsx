'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { CatagoryData } from '@/public/catagoryData';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const CatagorySlider = () => {
    const [catagoryData, setCatagoryData] = useState([]);
    const [activeCatagory, setActiveCatagory] = useState(null)

    const router = useRouter()
    const searchParams = useSearchParams()
    const {replace} = useRouter()
    const pathname = usePathname()

    useEffect(()=> {
        // getCatagoryData()
        setCatagoryData(CatagoryData.data)
    }, []);

    const getCatagoryData = async () => {
        await axios.get('https://airbnb-search.p.rapidapi.com/categories', {
            headers: {
                'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                'X-RapidAPI-Host': process.env.RAPID_API_HOST
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

        //setting the useSearchParams hook
        const params = new URLSearchParams(searchParams);
        if(catagory){
            params.set('catagory', catagory.id)
        } else{
            params.delete('catagory')
        }
        replace(`${pathname}?${params.toString()}`)
    }
    

    // console.log(catagoryData)
  return (
    <section className='mt-4 flex gap-10 overflow-scroll no-scrollbar border-b border-gray-200 drop-shadow-md'>
        {
            catagoryData?.map((catagory) => (
                
                <div 
                    onClick={()=>handleCatagorySearch(catagory)} 
                    key={catagory.value} 
                    className={`
                        flex flex-col w-fit cursor-pointer opacity-60 gap-1
                        ${(activeCatagory && activeCatagory === catagory.id )&& "border-b-2 border-black opacity-100"}
                         pb-2`}
                >
                    <Image 
                        src={catagory.image} 
                        height={22} 
                        width={22} 
                        alt='icon' 
                        className="mx-auto"/>
                    <p className='text-xs text-nowrap'>{catagory.title}</p>
                </div>
            ))
        }
    </section>
  )
}

export default CatagorySlider