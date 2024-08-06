import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PlantDetails = () => {
  const { categoryId } = useParams();
  const [plants, setPlants] = useState([]);
  const [newPlant, setNewPlant] = useState({
    plantName: '',
    createdById: 1, // Assuming createdById is 1 for example
  });
  const [newPlantDetails, setNewPlantDetails] = useState({
    scientificName: '',
    physicalCharacteristics: '',
    medicinalUses: '',
    cautions: '',
  });

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/plants/category/${categoryId}`);
      setPlants(response.data);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  const handleAddPlant = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/plants', {
        plantName: newPlant.plantName,
        categoryId: parseInt(categoryId, 10),
        createdById: newPlant.createdById,
      });

      const plant = response.data;

      const plantDetailsResponse = await axios.post('http://localhost:8080/api/plant-details', {
        plantId: plant.plantId,
        scientificName: newPlantDetails.scientificName,
        physicalCharacteristics: newPlantDetails.physicalCharacteristics,
        medicinalUses: newPlantDetails.medicinalUses,
        cautions: newPlantDetails.cautions,
      });

      setPlants((prevPlants) => [...prevPlants, plant]);
      setNewPlant({
        plantName: '',
        createdById: 1,
      });
      setNewPlantDetails({
        scientificName: '',
        physicalCharacteristics: '',
        medicinalUses: '',
        cautions: '',
      });
    } catch (error) {
      console.error('Error adding plant:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Plant Details for Category {categoryId}</h1>
        <div>
          <input
            type="text"
            placeholder="Plant Name"
            value={newPlant.plantName}
            onChange={(e) => setNewPlant({ ...newPlant, plantName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Scientific Name"
            value={newPlantDetails.scientificName}
            onChange={(e) => setNewPlantDetails({ ...newPlantDetails, scientificName: e.target.value })}
          />
          <textarea
            placeholder="Physical Characteristics"
            value={newPlantDetails.physicalCharacteristics}
            onChange={(e) => setNewPlantDetails({ ...newPlantDetails, physicalCharacteristics: e.target.value })}
          />
          <textarea
            placeholder="Medicinal Uses"
            value={newPlantDetails.medicinalUses}
            onChange={(e) => setNewPlantDetails({ ...newPlantDetails, medicinalUses: e.target.value })}
          />
          <textarea
            placeholder="Cautions"
            value={newPlantDetails.cautions}
            onChange={(e) => setNewPlantDetails({ ...newPlantDetails, cautions: e.target.value })}
          />
          <button onClick={handleAddPlant}>Add Plant</button>
        </div>
        {/* Render plant details here */}
      </div>
    </div>
  );
};

export default PlantDetails;
