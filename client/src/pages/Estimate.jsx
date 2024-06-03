import React, { useState } from 'react';
import axios from 'axios';
import Back from '../components/Back'
import myImage1 from '../images/Renovation (2).jpg';
import './Estimate.css';

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
    paintingType: '',
    areaToBePainted: 0,
    masonryWork: false,
    masonryType: '',
    areaToBeMasonry: 0,
  });

  // Validation state
  const [validationMessages, setValidationMessages] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
  });

  // Cost state
  const [totalTileCost, setTotalTileCost] = useState(0);
  const [totalWoodWorkCost, setTotalWoodWorkCost] = useState(0);
  const [totalPaintCost, setTotalPaintCost] = useState(0);
  const [totalMasonryCost, setTotalMasonryCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [message, setMessage] = useState(''); // State variable for the message

  //  Checkbox and input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Validation function
  const validateForm = () => {
    let isValid = true;
    let messages = {
      name: '',
      email: '',
      projectType: '',
      budget: '',
    };

    if (!formData.name.trim()) {
      messages.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      messages.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      messages.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.projectType.trim()) {
      messages.projectType = 'Project type is required';
      isValid = false;
    }

    if (!formData.budget.trim()) {
      messages.budget = 'Budget is required';
      isValid = false;
    } else if (isNaN(Number(formData.budget))) {
      messages.budget = 'Budget must be a number';
      isValid = false;
    }

    setValidationMessages(messages);
    return isValid;
  };

  // Total cost calculation and form submission
  const calculateTotalCost = () => {
    let totalTileCost = 0;
    let totalWoodWorkCost = 0;
    let totalPaintCost = 0;
    let totalMasonryCost = 0;

    // Calculation tile work cost
    if (formData.tileWork) {
      const { areaToBeTiled, tileType } = formData;
      let tileCost = 0;
      let laborCost = 0;

      switch (tileType) {
        case 'ceramic':
          tileCost = 905.00; // square ft
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
      const doorCost = 150;
      const windowCost = 100;
      totalWoodWorkCost = numDoors * doorCost + numWindows * windowCost;
    }

    // Calculate painting work cost
    if (formData.painting) {
      const { areaToBePainted, paintingType } = formData;
      let paintCost = 0;
      let laborCost = 0;

      switch (paintingType) {
        case 'interior':
          paintCost = 4;
          laborCost = 5;
          break;
        case 'exterior':
          paintCost = 5;
          laborCost = 6;
          break;
        case 'oil-based':
          paintCost = 10;
          laborCost = 10;
          break;
        case 'water-based':
          paintCost = 10;
          laborCost = 5;
          break;
        default:
          break;
      }
      totalPaintCost = areaToBePainted * (paintCost + laborCost);
    }

    // Calculate masonry work cost
    if (formData.masonryWork) {
      const { areaToBeMasonry, masonryType } = formData;
      let masonryCost = 0;
      let laborCost = 0;

      switch (masonryType) {
        case 'concrete':
          masonryCost = 905.00;
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
        case 'brichwall':
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

    setTotalTileCost(totalTileCost);
    setTotalWoodWorkCost(totalWoodWorkCost);
    setTotalPaintCost(totalPaintCost);
    setTotalMasonryCost(totalMasonryCost);
    setTotalCost(total);

    // Send data to backend
    const data = {
      ...formData,
      totalTileCost,
      totalWoodWorkCost,
      totalPaintCost,
      totalMasonryCost,
      totalCost: total,
    };

    axios.post('http://localhost:3001/sever/estimate/create', data)
      .then(response => {
        setMessage('Data successfully sent to the database');
        console.log(response.data);
      })
      .catch(error => {
        setMessage('There was an error sending data to the database');
        console.error('There was an error', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      calculateTotalCost();
    }
  };

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
      masonryWork: false,
      masonryType: '',
      areaToBeMasonry: 0,
    });
    setTotalTileCost(0);
    setTotalWoodWorkCost(0);
    setTotalPaintCost(0);
    setTotalMasonryCost(0);
    setTotalCost(0);
    setMessage('');
    setValidationMessages({
      name: '',
      email: '',
      projectType: '',
      budget: '',
    });
  };

  return (
    <>
    <Back title="Estimate"/>

    <div className="estimate wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div className="estimate-img">
                <img className="d-block w-100" src={myImage1} alt="First slide" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="section-header text-left">
                <p>Important Information About Estimates</p>
              </div>
              <div className="estimate-text">
                <p>
                An estimate is an approximate calculation of costs based on the information provided. It is not a final quote but serves
                 to provide a general idea of expenses. For a detailed and personalized assessment, please contact us directly.
                 </p>
                 <p>This structure clearly informs users of the nature of the estimates and encourages oba to seek further clarification for 
                  accurate cost estimates.</p>
                  <p><b>
                "On this estimate form, please note that the figures provided are not final quotes but intended solely to give you a preliminary idea.
                 For a more precise assessment tailored to your specific requirements, please contact us directly."
                 </b>
                 </p>
                <a className="btn" href="">
                  Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="max-w-5xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Estimate Form</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block">
              <span className="text-gray-700">Name:</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
              />
              {validationMessages.name && <p className="text-red-500">{validationMessages.name}</p>}
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
              {validationMessages.email && <p className="text-red-500">{validationMessages.email}</p>}
            </label>
          </div>
          <div>
            <label className="block">
              <span className="text-gray-700">Project Type:</span>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
              >
                <option value="">Select project type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Other">Other</option>
              </select>
              {validationMessages.projectType && <p className="text-red-500">{validationMessages.projectType}</p>}
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
              {validationMessages.budget && <p className="text-red-500">{validationMessages.budget}</p>}
            </label>
          </div>
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
            <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-slate-100">
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
          <div className="flex items-center">
            <input
              type="checkbox"
              name="masonryWork"
              checked={formData.masonryWork}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">Masonry Work</span>
          </div>
          {formData.masonryWork && (
            <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-slate-100">
              <label className="block">
                <span className="text-gray-700">Masonry Type:</span>
                <select
                  name="masonryType"
                  value={formData.masonryType}
                  onChange={handleChange}
                  className="form-select mt-1 block w-full"
                >
                  <option value="">Select...</option>
                  <option value="concrete">Concrete Blocks</option>
                  <option value="redBricks">Red Bricks</option>
                  <option value="flyashBricks">Flyash Bricks</option>
                  <option value="brichwall">Brich Wall</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Area to be Masonry:(sq ft)</span>
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
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Calculate Total Cost
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4 mr-2"
          >
            Reset
          </button>
        </form>
        
        {totalTileCost > 0 && <p className="mt-4">Total Tile Work Cost: Rs.{totalTileCost}</p>}
        {totalWoodWorkCost > 0 && <p>Total Wood Work Cost: Rs.{totalWoodWorkCost}</p>}
        {totalPaintCost > 0 && <p>Total Painting Cost: Rs.{totalPaintCost}</p>}
        {totalMasonryCost > 0 && <p>Total Masonry Cost: Rs.{totalMasonryCost}</p>}
        {totalCost > 0 && <p className="mt-2 font-bold text-xl">Total Cost: Rs.{totalCost}</p>}
        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </>
  );
};

export default EstimateForm;


