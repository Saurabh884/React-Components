import React, { useState } from "react";
import "./index.css";

const Todo = () => {
  const [tableData, settableData] = useState([]);
  const [selectedId, setSelecetedId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAdd = () => {
    if (selectedId !== null) {
      const updatedData = tableData.map((item) =>
        item.id === selectedId ? { ...item, ...formData } : item
      );
      settableData(updatedData);
      setSelecetedId(null);
    } else {
      const newData = {
        id: Math.floor(Math.random() * 1000),
        name: formData.name,
        address: formData.address,
        mobile: formData.mobile,
      };

      settableData([...tableData, newData]);
    }
  };

  const handleDelete = (id) => {
    const filteredData = tableData.filter((item) => item.id !== id);
    settableData(filteredData);
  };
  const handleEdit = (id) => {
    const selectedData = tableData.find((item) => item.id === id);
    if (selectedData) {
      setFormData({
        name: selectedData.name,
        address: selectedData.address,
        mobile: selectedData.mobile,
      });
      setSelecetedId(id);
    }
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Enter name"
        value={formData.name}
        name="name"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Enter address"
        value={formData.address}
        name="address"
        onChange={handleInputChange}
      />
      <input
        type="number"
        placeholder="Enter mobile"
        value={formData.mobile}
        name="mobile"
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>
        {selectedId === null ? "ADD" : "UPDATE"}
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th> Mobile </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.length > 0 &&
            tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.mobile}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>EDIT</button>
                  <button onClick={() => handleDelete(item.id)}>DELETE</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
