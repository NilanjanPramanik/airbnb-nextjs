import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Header = () => {
  return (
    <section>
        <div className='flex rounded-full border border-gray-300 shadow-lg shadow-gray-200'>
            <span className='p-4'>
                <MagnifyingGlassIcon className='h-7 w-7'/>
            </span>
            <div className='my-auto px-4'>
                <h1 className=' font-semibold'>Anywhere</h1>
                <p className=' text-sm text-gray-500'>Any week Any guests</p>
            </div>
        </div>
    </section>
  )
}

export default Header