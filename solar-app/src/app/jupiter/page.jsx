import React from "react";
import useMoons from '../components/useMoons';

const Jupiter = async () => {
  const data = await useMoons("Jupiter"); // note must be the French name, as this matches the moon names

  return (
    <div>
      <h1 className="planet-name">{data.planet.englishName}</h1>
      <h2>Moons</h2>
      <div className="moonsContainerCol">{data.moons}</div>
    </div>
  );
};

export default Jupiter;
