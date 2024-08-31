import { useState } from "react";
import PlantList from "./PlantList";
import PlantDetails from "./PlantDetails";

const PlantPage = () => {
  const [plants, setPlants] = useState([]);

  const handlePlantCreated = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div>
          <PlantDetails onPlantCreated={handlePlantCreated} />
        </div>
        <div className="lg:col-span-2">
          <PlantList plants={plants} />
        </div>
      </div>
    </div>
  );
}

export default PlantPage;
