import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Categories from './Categories';
import Navbar from '../components/navbar.jsx';
const Dashboard = () => {
  const [plants, setPlants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editPlant, setEditPlant] = useState(null);

  useEffect(() => {
    fetchPlants();
    fetchCategories();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/plants');
      setPlants(response.data);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/categories/all');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleEditClick = (plant) => {
    setEditPlant(plant);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/api/plants/${editPlant.plantId}`, editPlant);
      fetchPlants();
      setEditPlant(null);
    } catch (error) {
      console.error('Error updating plant:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      
      <Navbar/>
      <Categories/>
      {/* <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Plant Management Dashboard</h1>
        <Link to="/categories" className="bg-blue-500 text-white py-2 px-4 rounded mb-4 inline-block">
          Manage Categories
        </Link>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Plant ID</th>
              <th className="py-2 px-4 border">Plant Name</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Created By</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant) => (
              <tr key={plant.plantId}>
                <td className="py-2 px-4 border">{plant.plantId}</td>
                <td className="py-2 px-4 border">{plant.plantName}</td>
                <td className="py-2 px-4 border">{categories.find(c => c.categoryId === plant.categoryId)?.categoryName || 'N/A'}</td>
                <td className="py-2 px-4 border">{plant.createdBy}</td>
                <td className="py-2 px-4 border">
                  <button
                    className="bg-blue-500 text-white py-1 px-3 rounded"
                    onClick={() => handleEditClick(plant)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {editPlant && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Edit Plant</h2>
            <form>
              <div className="mb-4">
                <label className="block mb-2">Plant Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={editPlant.plantName}
                  onChange={(e) => setEditPlant({ ...editPlant, plantName: e.target.value })}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Category</label>
                <select
                  className="w-full p-2 border rounded"
                  value={editPlant.categoryId}
                  onChange={(e) => setEditPlant({ ...editPlant, categoryId: parseInt(e.target.value) })}
                >
                  {categories.map((category) => (
                    <option key={category.categoryId} value={category.categoryId}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Created By</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={editPlant.createdBy}
                  onChange={(e) => setEditPlant({ ...editPlant, createdBy: parseInt(e.target.value) })}
                />
              </div>
              <button
                type="button"
                className="bg-green-500 text-white py-2 px-4 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </form>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Dashboard;
