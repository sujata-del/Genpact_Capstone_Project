
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ViewAllPlants = () => {
//   const [plants, setPlants] = useState([]);
//   const [plantDetails, setPlantDetails] = useState({});
//   const [selectedPlantId, setSelectedPlantId] = useState(null);

//   useEffect(() => {
//     fetchAllPlants();
//   }, []);

//   const fetchAllPlants = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/plants');
//       setPlants(response.data);
//     } catch (error) {
//       console.error('Error fetching plants:', error);
//     }
//   };

//   const fetchPlantDetails = async (plantId) => {
//     if (!plantId) {
//       console.error('Plant ID is undefined');
//       return;
//     }
//     try {
//       const response = await axios.get(`http://localhost:8080/api/plant-details/${plantId}`);
//       console.log(response)
//       const details = response.data;

//       console.log('Fetched Plant Details:', details); // Debugging line

//       setPlantDetails((prevDetails) => ({
//         ...prevDetails,
//         [plantId]: details,
//       }));
//     } catch (error) {
//       console.error('Error fetching plant details:', error);
//     }
//   };

//   const handleShowDetails = async (plant) => {
//     if (!plantDetails[plant.plantId]) {
//       await fetchPlantDetails(plant.plantId);
//     }
//     setSelectedPlantId(plant.plantId);
//   };

//   return (
//     <div className="container mx-auto p-6 bg-green-50">
//       <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">View All Plants</h2>
//       {plants.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {plants.map((plant) => (
//             <div
//               key={plant.plantId}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
//             >
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold text-green-800">{plant.plantName}</h3>
//                 <button
//                   className="mt-4 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
//                   onClick={() => handleShowDetails(plant)}
//                 >
//                   Show Details
//                 </button>
//               </div>
//               {selectedPlantId === plant.plantId && plantDetails[plant.plantId] ? (
//                 <div className="p-4 bg-green-100">
//                   <h4 className="text-lg font-semibold text-green-700 mb-2">Plant Details</h4>
//                   {plantDetails[plant.plantId] && plantDetails[plant.plantId].detailId ? (
//                     <div className="space-y-2">
//                       <p className="text-green-900"><strong>Scientific Name:</strong> {plantDetails[plant.plantId].scientificName || 'N/A'}</p>
//                       <p className="text-green-900"><strong>Physical Characteristics:</strong> {plantDetails[plant.plantId].physicalCharacteristics || 'N/A'}</p>
//                       <p className="text-green-900"><strong>Medicinal Uses:</strong> {plantDetails[plant.plantId].medicinalUses || 'N/A'}</p>
//                       <p className="text-green-900"><strong>Cautions:</strong> {plantDetails[plant.plantId].cautions || 'N/A'}</p>
//                     </div>
//                   ) : (
//                     <p className="text-green-700">No details available for this plant.</p>
//                   )}
//                 </div>
//               ) : null}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-green-700">No plants available</p>
//       )}
//     </div>
//   );
// };

// export default ViewAllPlants;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewAllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [plantDetails, setPlantDetails] = useState({});
  const [selectedPlantId, setSelectedPlantId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllPlants();
  }, []);

  const fetchAllPlants = async () => {
    try {
      setError(null); // Reset error state before fetching
      const response = await axios.get('http://localhost:8080/api/plants');
      setPlants(response.data);
    } catch (error) {
      console.error('Error fetching plants:', error);
      setError('Failed to fetch plants.');
    }
  };

  const fetchPlantDetails = async (plantId) => {
    if (!plantId) {
      console.error('Plant ID is undefined');
      return;
    }
    try {
      console.log("hello")
      setLoading(true);
      const response = await axios.get(`http://localhost:8080/api/plant-details/${plantId}`);
      console.log(response)
      const details = response.data;

      console.log('Fetched Plant Details:', details); // Debugging line

      setPlantDetails((prevDetails) => ({
        ...prevDetails,
        [plantId]: details,
      }));
    } catch (error) {
      console.error('Error fetching plant details:', error);
      setError('Failed to fetch plant details.');
    } finally {
      setLoading(false);
    }
  };

  const handleShowDetails = async (plant) => {
    if (!plantDetails[plant.plantId]) {
      await fetchPlantDetails(plant.plantId);
    }
    setSelectedPlantId(plant.plantId);
  };

  return (
    <div className="container mx-auto p-6 bg-green-50">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">View All Plants</h2>
      {error && <p className="text-center text-red-500">{error}</p>}
      {plants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <div
              key={plant.plantId}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-800">{plant.plantName}</h3>
                <button
                  className="mt-4 w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  onClick={() => handleShowDetails(plant)}
                >
                  Show Details
                </button>
              </div>
              {selectedPlantId === plant.plantId && (
                <div className="p-4 bg-green-100">
                  <h4 className="text-lg font-semibold text-green-700 mb-2">Plant Details</h4>
                  {loading && !plantDetails[plant.plantId] ? (
                    <p>Loading details...</p>
                  ) : plantDetails[plant.plantId] ? (
                    <div className="space-y-2">
                      <p className="text-green-900"><strong>Scientific Name:</strong> {plantDetails[plant.plantId].scientificName || 'N/A'}</p>
                      <p className="text-green-900"><strong>Physical Characteristics:</strong> {plantDetails[plant.plantId].physicalCharacteristics || 'N/A'}</p>
                      <p className="text-green-900"><strong>Medicinal Uses:</strong> {plantDetails[plant.plantId].medicinalUses || 'N/A'}</p>
                      <p className="text-green-900"><strong>Cautions:</strong> {plantDetails[plant.plantId].cautions || 'N/A'}</p>
                    </div>
                  ) : (
                    <p className="text-green-700">No details available for this plant.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-green-700">No plants available</p>
      )}
    </div>
  );
};

export default ViewAllPlants;
