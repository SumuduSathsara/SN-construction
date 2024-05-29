import React, { useState } from 'react';
import axios from 'axios';



const EstimateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    tileWork: false,
    tileType: '',
    areaToBeTiled: 0,
    woodWork: false,
    numDoors: 0,
    numWindows: 0,
    painting: false,
    paintingType:'',
    areaToBePainted:0,
    Masonrywork: false,
    areaToBeMasonry: 0,
  });

  //cost state
  const [totalTileCost, setTotalTileCost] = useState(0);
  const [totalWoodWorkCost, setTotalWoodWorkCost] = useState(0);
  const [totalPaintCost, setTotalPaintCost] = useState(0);
  const [totalMasonryCost, setTotalMasonryCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  
  //checkbox state
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  //Total cost state
  const calculateTotalCost = () => {
    let totalTileCost = 0;
    let totalWoodWorkCost = 0;
    let totalPaintCost = 0;
    let totalMasonryCost = 0;
    


// Calculate tile work cost
    if (formData.tileWork) {
      const { areaToBeTiled, tileType } = formData;
      let tileCost = 0;
      let laborCost = 0;

      switch (tileType) {
        case 'ceramic':
          tileCost = 905.00; // square foot
          laborCost = 1000.00; 
          break;
        case 'porcelain':
          tileCost = 1206.00;
          laborCost = 1000.00;
          break;
        case 'marble':
          tileCost = 1810.00; 
          laborCost = 1000.00; 
          break;
        default:
          break;
      }
      totalTileCost = areaToBeTiled * (tileCost + laborCost);
    }

// Calculate wood work cost
    if (formData.woodWork) {
      const { numDoors, numWindows } = formData;
      const doorCost = 150; // $150 per door
      const windowCost = 100; // $100 per window
      totalWoodWorkCost = numDoors * doorCost + numWindows * windowCost;
    }

// Calculate painting work cost
    if (formData.painting) {
      const { areaToBePainted, paintingType } = formData;
      let PaintCost = 0;
      let laborCost = 0;

      switch (paintingType) {
        case 'interior':
          PaintCost = 4; // $3 per square foot
          laborCost = 5;
          break;
        case 'exterior':
          PaintCost = 5;
          laborCost = 6;
          break;
        case 'oil-based':
          PaintCost = 10; 
          laborCost = 10; 
          break;
        case 'water-based':
          PaintCost = 10; 

          break;
        default:
          break;
      }

      totalPaintCost = areaToBePainted * (PaintCost + laborCost);
    }
// Calculate areaToBe work cost
      if (formData.Masonrywork) {
      const { areaToBeMasonry, MasonryType } = formData;
      let masonryCost = 0;
      let laborCost = 0;

  switch (MasonryType) {
    case 'concrete':
      masonryCost = 905.00; // $3 per square foot
      laborCost = 1000.00; 
      break;
    case 'redBricks':
      masonryCost = 1206.00; 
      laborCost = 1000.00;
      break;
    case 'flyashBricks':
      masonryCost = 1810.00; 
      laborCost = 1000.00; 
      break;
      case 'Brichwall':
        masonryCost = 1810.00; 
      laborCost = 1000.00; 
      break;
    default:
      break;
  }
  totalMasonryCost = areaToBeMasonry * (masonryCost + laborCost);
}
   
 // Calculate total cost
    const total = totalTileCost + totalWoodWorkCost + totalPaintCost + totalMasonryCost;
    // Update state with calculated costs
    setTotalTileCost(totalTileCost);
    setTotalWoodWorkCost(totalWoodWorkCost);
    setTotalPaintCost(totalPaintCost);
    setTotalMasonryCost(totalMasonryCost);
    setTotalCost(total);
  };

  //send data to backend
  const data = {
    ...formData,
    totalTileCost,
    totalWoodWorkCost,
    totalPaintCost,
    totalMasonryCost,
    totalCost: total,
  };

  axios.post('http://localhost:3001/sever/estimate/create',data)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error', error);
    });
  

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectType: '',
      budget: '',
      tileWork: false,
      tileType: '',
      areaToBeTiled: 0,
      woodWork: false,
      numDoors: 0,
      numWindows: 0,
      painting: false,
      paintingType: '',
      areaToBePainted: 0,
    });
    setTotalTileCost(0);
    setTotalWoodWorkCost(0);
    setTotalPaintCost(0);
    setTotalMasonryCost(0);
    setTotalCost(0);
  };

  

  return (
    <>
    <h3>Estimate uhuhdjuhjs</h3>
    <div className="max-w-5xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Estimate Form</h2>
{/* General Information */}
      <form className="space-y-6">
        <div >
          <label className="block">
            <span className="text-gray-700">Name:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input mt-1 block w-full"
            />
          </label>
        </div>
        <div>
          <label className="block">
            <span className=" text-gray-700">Email:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input mt-1 block w-full"
            />
          </label>
        </div>
        <div >
          <label className="block">
            <span className="text-gray-700">Project Type:</span>
            <select
              type="text"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="form-input mt-1 block w-full">

              <option value="">Select project type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        <div>
          <label className="block">
            <span className="text-gray-700">Budget:</span>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="form-input mt-1 block w-full"
            />
          </label>
        </div>
{/* Tile Work */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="tileWork"
            checked={formData.tileWork}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">Tile work</span>
        </div>
        {formData.tileWork && (
          <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-slate-100">
            <label className="block">
              <span className="text-gray-700">Tile Type:</span>
              <select
                name="tileType"
                value={formData.tileType}
                onChange={handleChange}
                className="form-select mt-1 block w-full"
              >
                <option value="">Select...</option>
                <option value="ceramic">Ceramic</option>
                <option value="porcelain">Porcelain</option>
                <option value="marble">Marble</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Area to be Tiled:(sq ft)</span>
              <input
                type="number"
                name="areaToBeTiled"
                value={formData.areaToBeTiled}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
              />
            </label>
          </div>
        )}
{/* Wood Work */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="woodWork"
            checked={formData.woodWork}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">Wood work</span>
        </div>
        {formData.woodWork && (
          <div className="mt-1 block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-slate-100">
            <label className="block">
              <span className="text-gray-700">Number of Doors:</span>
              <input
                type="number"
                name="numDoors"
                value={formData.numDoors}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Number of Windows:</span>
              <input
                type="number"
                name="numWindows"
                value={formData.numWindows}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
              />
            </label>
          </div>
        )}
{/* Painting Work */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="painting"
            checked={formData.painting}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">Painting</span>
        </div>
        {formData.painting && (
          <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-slate-100">
            <label className="block">
              <span className="text-gray-700">Painting Type:</span>
              <select
                name="paintingType"
                value={formData.paintingType}
                onChange={handleChange}
                className="form-select mt-1 block w-full"
              >
                <option value="">Select...</option>
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
                <option value="oil-based">Oil-based</option>
                <option value="water-based">Water-based</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Area to be Painted:(sq ft)</span>
              <input
                type="number"
                name="areaToBePainted"
                value={formData.areaToBePainted}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
              />
            </label>
          </div>
        )}

{/* Masonry Work */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="Masonrywork"
            checked={formData.Masonrywork}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-700">Masonry Work</span>
        </div>
        {formData.Masonrywork && (
          <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-slate-100">
            <label className="block">
              <span className="text-gray-700">Tile Type:</span>
              <select
                name="MasonryType"
                value={formData.MasonryType}
                onChange={handleChange}
                className="form-select mt-1 block w-full"
              >
                <option value="">Select...</option>
                <option value="concrete">Concrete Blocks</option>
                <option value="redBricks">Red Bricks</option>
                <option value="flyashBricks">flyash Bricks</option>
                <option value="brichwall">Brich wall</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Area to be Tiled:(sq ft)</span>
              <input
                type="number"
                name="areaToBeMasonry"
                value={formData.areaToBeMasonry}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
              />
            </label>
          </div>
        )}
      </form>
      <button
        onClick={calculateTotalCost}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Calculate Total Cost
      </button>
      <button
        onClick={resetForm}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4 mr-2"
      >
        Reset
      </button>
      
      {totalTileCost > 0 && <p className="mt-4">Total Tile Work Cost: Rs:{totalTileCost}</p>}
      {totalWoodWorkCost > 0 && <p>Total Wood Work Cost: Rs:{totalWoodWorkCost}</p>}
      {totalPaintCost > 0 && <p>Total Painting Cost: Rs:{totalPaintCost}</p>}
      {totalMasonryCost > 0 && <p>Total Painting Cost: Rs:{totalMasonryCost}</p>}
      {totalCost > 0 && <p className="mt-2 font-bold text-xl">Total Cost: Rs:{totalCost}</p>}
    </div>

    </>
  );
};

export default EstimateForm;
