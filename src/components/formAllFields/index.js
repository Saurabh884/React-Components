import React, { useState } from 'react'

const FormAllField = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    address :"",
    isVegetarian:false,
    isNonVegetarian:false,
    isEgg:false

  })
  const handleInputChange = (e) => {
    const {name , value , type , checked} = e.target
    setFormData({...formData, [name]: type==="checkbox" ? checked :value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div>
        <input type='text' placeholder='Enter name' name='name' value={formData.name} onChange={handleInputChange} />
        <input type='email' placeholder='Enter email' name='email' value={formData.email} onChange={handleInputChange} />
        <select onChange={handleInputChange} name='address' value={formData.address}  >
        <option>Delhi</option>
        <option>Bangalore</option>
        <option>Mumbai</option>
        </select>
        <label>Is Vegetarian</label>
        <input type='checkbox' checked={formData.isVegetarian} onChange={handleInputChange} name='isVegetarian' />
        <label>Is Non Vegetarian</label>
        <input type='checkbox' checked={formData.isNonVegetarian} onChange={handleInputChange} name='isNonVegetarian' />
        <label>Is Egg</label>
        <input type='checkbox' checked={formData.isEgg} onChange={handleInputChange} name='isEgg' />

        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default FormAllField;