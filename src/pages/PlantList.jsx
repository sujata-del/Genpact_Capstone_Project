import { useEffect, useState } from "react";
import axios from "axios";

const PlantList = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/plants")
      .then(response => setPlants(response.data))
      .catch(error => console.error("There was an error fetching the plants!", error));
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Plant List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {plants.map(plant => (
          <div key={plant.plantId} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{plant.plantName}</h3>
            <p className="text-gray-600">Category ID: {plant.category.categoryId}</p>
            <p className="text-gray-600">Created By: {plant.createdBy.userId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantList;
