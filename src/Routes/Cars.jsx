import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddCars from '../pages/AddCars'
import Cars from '../pages/Cars'

function CarsRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/add-cars" element={<AddCars />} />
      </Routes>
    </div>
  )
}

export default CarsRoute
