import React from 'react';
import './tailwind.output.css';

function App() {
  const image= "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1871766.jpg&f=1&nofb=1"
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4 mx-2">
      <img className="w-full" src={image} alt="Moon over the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Sentinel Evaluate</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  );
}

export default App;
