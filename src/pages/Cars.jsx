import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiStar } from 'react-icons/ci'
import { CiUser } from 'react-icons/ci'
import { TbManualGearboxFilled } from 'react-icons/tb'
import { FaRegSnowflake } from 'react-icons/fa'

import Door from "../../public/Door.svg"


function Cars() {
  const [car, setCar] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then((res) => res.json())
      .then((data) => setCar(data))
  }, [])
  console.log(car)
  return (
    <div className="flex flex-col justify-center items-center">
      <Link to="/add-cars">
        <button className="mt-3 py-[16px] px-[32px] bg-[#1572D31A] rounded-[8px]">
          Add Cars
        </button>
      </Link>
      <h1 className="pt-[24px] font-medium text-[38px]">
        Most popular cars rental deals
      </h1>
      <ul className="flex items-center gap-[32px] mt-[64px]">
        {car.slice(0, 4).map((item, index) => (
          <li className="w-[256px] h-[405px]" key={index + 1}>
            <img
              className="px-[25px] py-[24px] mx-auto"
              src={item.imgURL}
              alt="img"
              width={208}
              height={104}
            />
            <p className="pt-[25px] pl-[24px] pr-[24px] pb-[14px] text-[#262626] font-semibold  text-[20px]">
              {item.carName}
            </p>
            <div className="flex items-center space-x-2  pl-[24px] pr-[24px]">
              <CiStar className="text-yellow-800 bg-yellow-400" />
              <p>{item.carRating} (2.436 reviews)</p>
            </div>

            <div className="flex items-center mb-[8px]">
              <div className="flex items-center gap-[20px] mt-[22px]">
                <CiUser className="text-[20px]" />
                <p className="text-[16px] text-[#959595]">
                  {item.carPassage} Passagers
                </p>
                <div className="flex items-center">
                <TbManualGearboxFilled className="text-[20px]" />
                <p>{item.gearBox}</p>
              </div>
              </div>

              
            </div>
            <div className="flex items-center gap-[10px] mb-5">
              <div className="flex items-center gap-[10px]">
                <FaRegSnowflake />
                <p>{item.carAir}</p>
              </div>
              <div className='flex items-center gap-[10px]'>
              <img src={Door} alt="Doors" />
              <p>{item.carDoors} Doors </p>
              </div>
            </div>
            <div className='flex items-center gap-[60px] mb-[24px] pb-5'>
              <p>Price </p>
              <p className='text-[#292929] text-[24px] font-semibold '> {item.carPrice} <span className='text-[#959595]'>$/day</span> </p>
            </div>
            <button className='pt-[16px] pb-[16px] bg-[#1572D3] pl-[57px] pr-[57px] rounded-[8px] text-[#FFFFFF] text-[16px]'>Rent Now </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cars
