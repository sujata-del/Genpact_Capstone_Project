import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const PlantDetails = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [plants, setPlants] = useState([]);
  const [newPlant, setNewPlant] = useState({
    plantName: '',
    categoryId: parseInt(categoryId, 10),
    createdById: 1,
  });
  const [selectedPlantId, setSelectedPlantId] = useState(null);
  const [newPlantDetails, setNewPlantDetails] = useState({
    scientificName: '',
    physicalCharacteristics: '',
    medicinalUses: '',
    cautions: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchPlants();
  }, [categoryId]);

  const fetchPlants = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/plants/category/${categoryId}`);
      setPlants(response.data);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  const handleAddPlant = async () => {
    if (!newPlant.plantName) {
      setErrors((prev) => ({ ...prev, plantName: 'Plant name is required' }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, plantName: '' }));
    }

    try {
      const response = await axios.post('http://localhost:8080/api/plants', null, {
        params: {
          plantName: newPlant.plantName,
          categoryId: newPlant.categoryId,
          createdById: newPlant.createdById,
        },
      });

      const plant = response.data;
      setPlants((prevPlants) => [...prevPlants, plant]);
      setNewPlant({
        plantName: '',
        categoryId: parseInt(categoryId, 10),
        createdById: 1,
      });

      setSelectedPlantId(plant.plantId);
    } catch (error) {
      console.error('Error adding plant:', error.response.data);
    }
  };

  const handleAddPlantDetails = async () => {
    const { scientificName, physicalCharacteristics, medicinalUses, cautions } = newPlantDetails;

    if (!scientificName || !physicalCharacteristics || !medicinalUses || !cautions) {
      setErrors({
        scientificName: !scientificName ? 'Scientific name is required' : '',
        physicalCharacteristics: !physicalCharacteristics ? 'Physical characteristics are required' : '',
        medicinalUses: !medicinalUses ? 'Medicinal uses are required' : '',
        cautions: !cautions ? 'Cautions are required' : '',
      });
      return;
    } else {
      setErrors({});
    }

    try {
      if (!selectedPlantId) {
        console.error('No plant selected for adding details.');
        return;
      }

      const response = await axios.post('http://localhost:8080/api/plant-details', {
        plantId: selectedPlantId,
        scientificName: newPlantDetails.scientificName,
        physicalCharacteristics: newPlantDetails.physicalCharacteristics,
        medicinalUses: newPlantDetails.medicinalUses,
        cautions: newPlantDetails.cautions,
      });

      setNewPlantDetails({
        scientificName: '',
        physicalCharacteristics: '',
        medicinalUses: '',
        cautions: '',
      });
    } catch (error) {
      console.error('Error adding plant details:', error.response ? error.response.data : error.message);
    }
  };

  const handleSave = () => {
    handleAddPlantDetails();
    setNewPlantDetails({
      scientificName: '',
      physicalCharacteristics: '',
      medicinalUses: '',
      cautions: '',
    });
  };

  const handleViewAll = () => {
    navigate('/view-all-plants');
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-green-300 via-green-400 to-green-500 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6">Plant Details</h2>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Add Plant</h3>
        <div className="flex flex-col mb-6">
          <input
            type="text"
            placeholder="Plant Name"
            className="p-3 border border-gray-200 rounded mb-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400"
            value={newPlant.plantName}
            onChange={(e) => setNewPlant({ ...newPlant, plantName: e.target.value })}
          />
          {errors.plantName && <p className="text-red-200">{errors.plantName}</p>}
          <button
            className="p-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-all"
            onClick={handleAddPlant}
          >
            Add Plant
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">Add Plant Details</h3>
        <div className="flex flex-col mb-6">
          <select
            className="p-3 border border-gray-200 rounded mb-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => setSelectedPlantId(e.target.value)}
            value={selectedPlantId || ''}
          >
            <option value="" disabled>Select Plant</option>
            {plants.map((plant) => (
              <option key={plant.plantId} value={plant.plantId}>
                {plant.plantName}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Scientific Name"
            className="p-3 border border-gray-200 rounded mb-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400"
            value={newPlantDetails.scientificName}
            onChange={(e) => setNewPlantDetails({ ...newPlantDetails, scientificName: e.target.value })}
          />
          {errors.scientificName && <p className="text-red-200">{errors.scientificName}</p>}
          <input
            type="text"
            placeholder="Physical Characteristics"
            className="p-3 border border-gray-200 rounded mb-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400"
            value={newPlantDetails.physicalCharacteristics}
            onChange={(e) => setNewPlantDetails({ ...newPlantDetails, physicalCharacteristics: e.target.value })}
          />
          {errors.physicalCharacteristics && <p className="text-red-200">{errors.physicalCharacteristics}</p>}
          <input
            type="text"
            placeholder="Medicinal Uses"
            className="p-3 border border-gray-200 rounded mb-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400"
            value={newPlantDetails.medicinalUses}
            onChange={(e) => setNewPlantDetails({ ...newPlantDetails, medicinalUses: e.target.value })}
          />
          {errors.medicinalUses && <p className="text-red-200">{errors.medicinalUses}</p>}
          <input
            type="text"
            placeholder="Cautions"
            className="p-3 border border-gray-200 rounded mb-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400"
            value={newPlantDetails.cautions}
            onChange={(e) => setNewPlantDetails({ ...newPlantDetails, cautions: e.target.value })}
          />
          {errors.cautions && <p className="text-red-200">{errors.cautions}</p>}
          <div className="flex justify-between mt-4">
            <button
              className="p-3 bg-green-800 text-white rounded-lg shadow hover:bg-green-600 transition-all"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="p-3 bg-green-900 text-white rounded-lg shadow hover:bg-green-900 transition-all"
              onClick={handleViewAll}
            >
              View All Plants
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
