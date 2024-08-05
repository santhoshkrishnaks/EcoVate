import React from 'react';
import { useLocation } from 'react-router-dom';
import { generatePDF } from './pdfgen'; // Ensure this function is correctly imported

// Function to generate recommendations based on scores
const generateRecommendations = (scores) => {
  const recommendations = {};

  if (scores.energy > 100) {
    recommendations.energy = [
      'Consider upgrading to energy-efficient appliances.',
      'Switch to renewable energy sources for your electricity.',
      'Improve home insulation to reduce heating and cooling needs.'
    ];
  } else {
    recommendations.energy = [
      'Your energy usage is within the average range.',
      'Monitor your energy consumption to ensure it remains efficient.',
      'Consider small improvements in home insulation.'
    ];
  }

  if (scores.transportation > 50) {
    recommendations.transportation = [
      'Explore options for reducing fuel consumption or switch to a hybrid/electric vehicle.',
      'Increase the use of public transport or carpooling.',
      'Consider reducing the frequency of long-distance travel.'
    ];
  } else {
    recommendations.transportation = [
      'Your transportation footprint is moderate.',
      'Look into more sustainable travel options.',
      'Consider reducing the use of single-occupancy vehicles.'
    ];
  }

  if (scores.housing > 150) {
    recommendations.housing = [
      'Upgrade to energy-efficient windows and doors.',
      'Consider installing a smart thermostat.',
      'Enhance home insulation and weatherproofing.'
    ];
  } else {
    recommendations.housing = [
      'Your housing footprint is within a reasonable range.',
      'Monitor and optimize your energy use.',
      'Invest in minor home improvements for better efficiency.'
    ];
  }

  // Repeat similar logic for other categories...

  return recommendations;
};

// Recommendations Page Component
const Results = () => {
  const location = useLocation();
  const { scores, user } = location.state; // Ensure scores and user are passed correctly

  const recommendations = generateRecommendations(scores);

  const conclusionText = () => {
    const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
    if (totalScore > 300) {
      return { text: 'High Carbon Footprint', color: 'text-red-600', bgColor: 'bg-red-50' };
    } else if (totalScore > 150) {
      return { text: 'Moderate Carbon Footprint', color: 'text-yellow-600', bgColor: 'bg-yellow-50' };
    } else {
      return { text: 'Low Carbon Footprint', color: 'text-green-600', bgColor: 'bg-green-50' };
    }
  };

  const { text, color, bgColor } = conclusionText();

  return (
    <div className="min-h-screen p-6 bg-green-50 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <header className="flex justify-between mb-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-700">EcoCalc</h1>
            <p className="text-gray-600">"Your path to a greener future"</p>
          </div>
          <div>
            <p className="text-gray-600">Email: info@ecocalc.com</p>
            <p className="text-gray-600">Phone: +1234567890</p>
          </div>
        </header>
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">EcoCalc Report for {user.name}</h2>
          {Object.keys(recommendations).map((category) => (
            <div key={category} className="mb-6">
              <h3 className="text-xl font-bold text-gray-700 capitalize">{category}</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {recommendations[category].map((rec, index) => (
                  <li key={index} className="mt-2">{rec}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section className={`p-4 rounded-md ${bgColor}`}>
          <h2 className={`text-2xl font-bold ${color}`}>Conclusion</h2>
          <p className={`mt-2 ${color}`}>{text}</p>
        </section>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => generatePDF(scores, recommendations)}
            className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
          >
            Download PDF Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
