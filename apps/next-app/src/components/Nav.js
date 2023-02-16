import { useState } from 'react';

function Nav({handleInput}){




    return (
        <nav
        className=" sticky top-0 z-50  flex items-center justify-between  bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid  border-gray-300 lg:pb-0">
            <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                <span className="font-semibold text-xl tracking-tight">Home</span>
            </div>
           
        </div>
    
        <div className="menu w-full lg:block  lg:flex lg:items-center lg:w-auto lg:px-3 pr-2 ">
            
       
            <div className="relative  text-gray-600 lg:block  sm:block ">
                <input
                    className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search by phrase" onChange={(e)=>handleInput(e)}>
                </input>
            </div>
          
        </div>
    
    </nav>
    )
};

export default Nav



