'use client'
import { getAllMyTrips } from '@/app/api/utils/trips';
import React, { useEffect, useState } from 'react'

const Trips = () => {
    const [allTrips,setAllTrips] = useState([])
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize,setPageSize] = useState(5);
    const [totalItem,setTotalItem] = useState(0);
    const [totalPages,setTotalPages] = useState(1)
    const [isLoading,setIsLoading] = useState(false)
    const getAllTrips = async (search) => {
        setIsLoading(true);
        const res = await getAllMyTrips(pageNumber, pageSize);
        console.log(res);
        if (res) {
            setAllTrips(res?.ref);
          setTotalItem(res?.totalItems);
          setTotalPages(res?.totalPages);
        }
        setIsLoading(false);
      };
    
      useEffect(() => {
        getAllTrips();
        // console.log(teamData);
      }, [ pageNumber,pageSize]);
  return (
    <div>
      Trips
      {
        allTrips?.map((trip,index)=>{
            return (
                <div key={index}>
                    hello
                </div>
            )
        })
      }
    </div>
  )
}

export default Trips
