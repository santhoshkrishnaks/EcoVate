import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Header_Footer/Footer";
import Nav from "../Header_Footer/Nav";

// EnergyForm Component
const EnergyForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return (
    <form className="space-y-4">
      <h2 className="text-3xl text-green-500 text-center mb-10 text-bold">Energy Consumption</h2>
      <div>
        <label className="block text-gray-600">
          Monthly Electricity Consumption (kWh)
        </label>
        <input
          type="number"
          id="inp"
          name="electricityConsumption"
          value={formData.electricityConsumption || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded remove-arrow"
        />
      </div>
      <div>
        <label className="block text-gray-600">Source of Electricity</label>
        <select
          name="electricitySource"
          value={formData.electricitySource || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        >
          <option value="Coal">Coal</option>
          <option value="Natural Gas">Natural Gas</option>
          <option value="Renewable">Renewable</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-600">Type of Heating System</label>
        <input
          type="text"
          name="heatingSystem"
          value={formData.heatingSystem || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">
          Monthly Heating Fuel Consumption
        </label>
        <input
          type="number"
          name="heatingFuelConsumption"
          value={formData.heatingFuelConsumption || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">Cooling System Type</label>
        <input
          type="text"
          name="coolingSystem"
          value={formData.coolingSystem || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
    </form>
  );
};

// TransportationForm Component
const TransportationForm = ({ formData, handleChange }) =>{
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return(
  <form className="space-y-4">
    <h2 className="text-3xl text-green-500 text-center mb-10 text-bold">Transportation</h2>
    <div>
      <label className="block text-gray-600">Vehicle Type and Model</label>
      <input
        type="text"
        name="vehicleType"
        value={formData.vehicleType || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Fuel Type</label>
      <select
        name="fuelType"
        value={formData.fuelType || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      >
        <option value="Gasoline">Gasoline</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>
    </div>
    <div>
      <label className="block text-gray-600">Annual Mileage</label>
      <input
        type="number"
        name="annualMileage"
        value={formData.annualMileage || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">
        Public Transport Usage (Monthly)
      </label>
      <input
        type="text"
        name="publicTransport"
        value={formData.publicTransport || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Air Travel Details</label>
      <input
        type="text"
        name="airTravel"
        value={formData.airTravel || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);
}

// HousingForm Component
const HousingForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return(
  <form className="space-y-4">
    <h2 className="text-3xl text-green-500 text-center mb-10 text-bold">Housing</h2>
    <div>
      <label className="block text-gray-600">
        Size of Residence (Square Feet)
      </label>
      <input
        type="number"
        name="residenceSize"
        value={formData.residenceSize || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Type of Housing</label>
      <input
        type="text"
        name="housingType"
        value={formData.housingType || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">
        Insulation and Energy Efficiency
      </label>
      <input
        type="text"
        name="insulation"
        value={formData.insulation || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);
}

// DietForm Component
const DietForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return(
  <form className="space-y-4">
    <h2 className="text-3xl text-green-500 text-center mb-10 text-bold">Diet and Food Consumption</h2>
    <div>
      <label className="block text-gray-600">Dietary Preferences</label>
      <input
        type="text"
        name="dietaryPreferences"
        value={formData.dietaryPreferences || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">
        Frequency of Meat and Dairy Consumption
      </label>
      <input
        type="text"
        name="meatDairyConsumption"
        value={formData.meatDairyConsumption || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Food Waste per Week/Month</label>
      <input
        type="number"
        name="foodWaste"
        value={formData.foodWaste || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);
}

// WasteForm Component
const WasteForm = ({ formData, handleChange }) =>{ 
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return(
  <form className="space-y-4">
    <h2 className="text-3xl text-green-500 text-center mb-10 text-bold">Waste Production</h2>
    <div>
      <label className="block text-gray-600">
        Amount of Household Waste Generated
      </label>
      <input
        type="number"
        name="householdWaste"
        value={formData.householdWaste || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">
        Recycling and Composting Practices
      </label>
      <input
        type="text"
        name="recyclingPractices"
        value={formData.recyclingPractices || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Type of Waste</label>
      <input
        type="text"
        name="wasteType"
        value={formData.wasteType || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);
}

// WaterForm Component
const WaterForm = ({ formData, handleChange }) =>{
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return(
  <form className="space-y-4">
    <h2 className="text-3xl text-green-500 text-center mb-10 text-bold">Water Usage</h2>
    <div>
      <label className="block text-gray-600">
        Monthly Water Usage (Gallons/Liters)
      </label>
      <input
        type="number"
        name="waterUsage"
        value={formData.waterUsage || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">
        Water Conservation Practices
      </label>
      <input
        type="text"
        name="waterConservation"
        value={formData.waterConservation || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);
}

// GoodsForm Component
const GoodsForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return(
  <form className="space-y-4">
    <h2 className="text-3xl text-green-500 text-center mb-10 text-bold">Goods and Services</h2>
    <div>
      <label className="block text-gray-600">Annual Spending on Goods</label>
      <input
        type="number"
        name="goodsSpending"
        value={formData.goodsSpending || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Type of Goods Purchased</label>
      <input
        type="text"
        name="goodsType"
        value={formData.goodsType || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">
        Frequency of Purchasing New Goods
      </label>
      <input
        type="text"
        name="goodsFrequency"
        value={formData.goodsFrequency || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);
}

// LifestyleForm Component
const LifestyleForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return(
  <form className="space-y-4">
    <h2 className="text-3xl text-green-500 text-center mb-10 text-bold">Lifestyle Choices</h2>
    <div>
      <label className="block text-gray-600">Frequency of Travel</label>
      <input
        type="text"
        name="travelFrequency"
        value={formData.travelFrequency || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
    <div>
      <label className="block text-gray-600">Lifestyle Habits</label>
      <input
        type="text"
        name="lifestyleHabits"
        value={formData.lifestyleHabits || ""}
        onChange={handleChange}
        className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
      />
    </div>
  </form>
);
}

// OffsetsForm Component
const OffsetsForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return (
    <form className="space-y-4">
      <h2 className="text-3xl text-green-500 text-center mb-10 text-bold">Carbon Offsets</h2>
      <div>
        <label className="block text-gray-600">Amount Spent on Offsets</label>
        <input
          type="number"
          id="inp"
          name="offsetsSpent"
          value={formData.offsetsSpent || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">
          Types of Offsets Purchased
        </label>
        <input
          type="text"
          name="offsetsType"
          value={formData.offsetsType || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
    </form>
  );
};

const calculateCarbonFootprint = (formData) => {
  // Implement your calculation logic here
  // Example calculation logic:
  const energyScore = formData.electricityConsumption * 0.5; // Simplified example
  const transportationScore = formData.annualMileage * 0.1; // Simplified example
  const housingScore = formData.residenceSize * 0.3; // Simplified example
  const dietScore = formData.meatDairyConsumption * 0.2; // Simplified example
  const wasteScore = formData.householdWaste * 0.1; // Simplified example
  const waterScore = formData.waterUsage * 0.05; // Simplified example
  const goodsScore = formData.goodsSpending * 0.4; // Simplified example
  const lifestyleScore = formData.lifestyleHabits * 0.3; // Simplified example
  const offsetsScore = formData.offsetsSpent * -0.2; // Simplified example

  return {
    energy: energyScore,
    transportation: transportationScore,
    housing: housingScore,
    diet: dietScore,
    waste: wasteScore,
    water: waterScore,
    goods: goodsScore,
    lifestyle: lifestyleScore,
    offsets: offsetsScore,
  };
};

// Main Ecocalc Component
const Ecocalc = () => {
  const [activeTab, setActiveTab] = useState("energy");
  const [formData, setFormData] = useState({
    electricityConsumption: "",
    electricitySource: "",
    heatingSystem: "",
    heatingFuelConsumption: "",
    coolingSystem: "",
    vehicleType: "",
    fuelType: "",
    annualMileage: "",
    publicTransport: "",
    airTravel: "",
    residenceSize: "",
    housingType: "",
    insulation: "",
    dietaryPreferences: "",
    meatDairyConsumption: "",
    foodWaste: "",
    householdWaste: "",
    recyclingPractices: "",
    wasteType: "",
    waterUsage: "",
    waterConservation: "",
    goodsSpending: "",
    goodsType: "",
    goodsFrequency: "",
    travelFrequency: "",
    lifestyleHabits: "",
    offsetsSpent: "",
    offsetsType: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmit = () => {
    // Calculate scores based on formData
    const scores = calculateCarbonFootprint(formData);

    // Navigate to results page and pass both formData and scores via state
    navigate("/result", {
      state: {
        scores,
        user: { name: "John Doe", email: "john.doe@example.com" }, // You can update this with actual user data
        formData, // Pass the form data to the results page
      },
    });
  };

  return (
    <div>
      <Nav />
      <div className="bg-green-50 min-h-screen w-screen p-6 ecocal">
        <div>
          <h1 className="lg:text-5xl font-bold text-center items-center text-neutral-700">
            <span className="lg:text-5xl text-green-700 font-bold">Eco</span>
            Calc
          </h1>
          <h2 className="lg:text-3xl lg:mt-[20px] mb-[20px] font-bold text-center items-center text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-300 mb-9">
            Greening Corporate Practices
          </h2>
        </div>
        <div className="container w-[60vw] bg-white shadow-md rounded-lg p-8 rounded-[24px] my-[20px]">
          <div className="inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-green-600 text-white rounded px-3 py-2 text-sm font-semibold"
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onClick={toggleMenu}
              >
                Select
                <svg
                  className="-mr-1 h-5 w-5 black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div
                className="absolute z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1 " role="none">
                  <span
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50 "
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={()=>{setActiveTab('energy')
                      setIsOpen(false);
                    }}
                  >
                    Energy
                  </span>
                  <span
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                    onClick={()=>{setActiveTab('transportation')
                      setIsOpen(false);
                    }}
                  >
                    Transportation
                  </span>
                  <span
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50 "
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                    onClick={()=>{setActiveTab('housing')
                      setIsOpen(false);
                    }}
                  >
                    Housing
                  </span>
                  <span
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                    onClick={()=>{setActiveTab('diet')
                      setIsOpen(false);
                    }}
                  >
                    Diet
                  </span>
                  <span
                    className="cursor-pointer block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-green-50"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                    onClick={()=>{setActiveTab('waste')
                      setIsOpen(false);
                    }}
                  >
                    Waste
                  </span>
                  <span
                    className="block px-4 py-2  text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                    role="menuitem"
                    tabIndex="-1"
                    onClick={()=>{setActiveTab('water')
                      setIsOpen(false);
                    }}
                    id="menu-item-2"
                  >
                    Water
                  </span>
                  <span
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                    role="menuitem"
                    tabIndex="-1"
                    onClick={()=>{setActiveTab('goods')
                      setIsOpen(false);
                    }}
                    id="menu-item-2"
                  >
                    Goods
                  </span>
                  <span
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                    role="menuitem"
                    tabIndex="-1"
                    onClick={()=>{setActiveTab('lifestyle')
                      setIsOpen(false);
                    }}
                    id="menu-item-2"
                  >
                    LifeStyle
                  </span>
                  <span                   
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                    role="menuitem"
                    tabIndex="-1"
                    onClick={()=>{setActiveTab('offsets')
                      setIsOpen(false);
                    }}
                    id="menu-item-2"
                  >
                    Offsets
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="mb-6">
            {activeTab === "energy" && (
              <EnergyForm formData={formData} handleChange={handleChange} />
            )}
            {activeTab === "transportation" && (
              <TransportationForm
                formData={formData}
                handleChange={handleChange}
              />
            )}
            {activeTab === "housing" && (
              <HousingForm formData={formData} handleChange={handleChange} />
            )}
            {activeTab === "diet" && (
              <DietForm formData={formData} handleChange={handleChange} />
            )}
            {activeTab === "waste" && (
              <WasteForm formData={formData} handleChange={handleChange} />
            )}
            {activeTab === "water" && (
              <WaterForm formData={formData} handleChange={handleChange} />
            )}
            {activeTab === "goods" && (
              <GoodsForm formData={formData} handleChange={handleChange} />
            )}
            {activeTab === "lifestyle" && (
              <LifestyleForm formData={formData} handleChange={handleChange} />
            )}
            {activeTab === "offsets" && (
              <OffsetsForm formData={formData} handleChange={handleChange} />
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="py-2 px-4 bg-green-600 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ecocalc;
