import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUpload } from 'react-icons/fa'
function AddCars() {
  const [imgURL, setImgURL] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    const data = {
      imgURL: imgURL,
      carName: e.target.carName.value,
      carRating: e.target.carRating.value,
      carPassage: e.target.carPassage.value,
      gearBox:e.target.gearBox.value,
      carAir: e.target.carAir.value,
      carDoors: e.target.carDoors.value,
      carPrice: e.target.carPrice.value,
    }
    fetch('http://localhost:3000/cars', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    navigate("/")
    
  }

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col items-center mt-3"
      >
        <label className="w-[400px] border-[1px] border-slate-500 px-2 py-3 my-1">
          <input
            onChange={(e) => setImgURL(URL.createObjectURL(e.target.files[0]))}
            type="file"
            hidden
          />
          <FaUpload className="cursor-pointer" />
          <img src={imgURL} alt="" />
        </label>
        <input
          className="w-[400px] border-[1px] border-slate-500 px-2 py-3 my-1"
          type="text"
          placeholder="Car Name"
          name="carName"
          required
        />
        <input
          className="w-[400px] border-[1px] border-slate-500 px-2 py-3 my-1"
          type="number"
          placeholder="carRating"
          name="carRating"
          required
        />
        

        <input
          className="w-[400px] border-[1px] border-slate-500 px-2 py-3 my-1"
          type="number"
          placeholder="carPassage"
          name="carPassage"
          required
        /> 

        <input
          className="w-[400px] border-[1px] border-slate-500 px-2 py-3 my-1"
          type="text"
          placeholder="gearBox"
          name="gearBox"
          required
        />
        <input
          className="w-[400px] border-[1px] border-slate-500 px-2 py-3 my-1"
          type="text"
          placeholder="carAir"
          name="carAir"
          required
        />
        <input
          className="w-[400px] border-[1px] border-slate-500 px-2 py-3 my-1"
          type="number"
          placeholder="carDoors"
          name="carDoors"
          required
        />
        <input
          className="w-[400px] border-[1px] border-slate-500 px-2 py-3 my-1"
          type="number"
          placeholder="carPrice"
          name="carPrice"
          required
        />
        <button className="w-[400px] border-[1px] border-slate-500 px-2 py-3 my-1">
          Add card{' '}
        </button>
      </form>
    </div>
  )
}

export default AddCars
