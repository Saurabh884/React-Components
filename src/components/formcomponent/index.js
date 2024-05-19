import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
   alert(`Name:${formData.name} Email:${formData.email}`)
   setFormData({
    name: "",
    email: "",
  });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={formData.name}
          name="name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter email"
          value={formData.email}
          name="email"
          onChange={handleInputChange}
        />
        <button type="submit" onChange={handleInputChange}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
