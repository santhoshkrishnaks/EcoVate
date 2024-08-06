import React from 'react';
import { useLocation } from 'react-router-dom';
import { generatePDF } from './pdfgen'; // Ensure this function is correctly imported

// Dynamic thresholds and recommendations
const thresholds = {
  energy: { high: 100, moderate: 50 },
  transportation: { high: 50, moderate: 25 },
  housing: { high: 150, moderate: 75 },
  diet: { high: 50, moderate: 25 },
  waste: { high: 30, moderate: 15 },
  water: { high: 100, moderate: 50 },
  goods: { high: 75, moderate: 35 },
  lifestyle: { high: 50, moderate: 25 },
  offsets: { high: 0, moderate: 0 }
};

const recommendationsMapping = {
  high: {
    energy: [
      'Consider upgrading to energy-efficient appliances.',
      'Switch to renewable energy sources for your electricity.',
      'Improve home insulation to reduce heating and cooling needs.'
    ],
    transportation: [
      'Explore options for reducing fuel consumption or switch to a hybrid/electric vehicle.',
      'Increase the use of public transport or carpooling.',
      'Consider reducing the frequency of long-distance travel.'
    ],
    housing: [
      'Upgrade to energy-efficient windows and doors.',
      'Consider installing a smart thermostat.',
      'Enhance home insulation and weatherproofing.'
    ],
    diet: [
      'Consider reducing meat and dairy consumption.',
      'Focus on a more plant-based diet.',
      'Minimize food waste by planning meals.'
    ],
    waste: [
      'Increase recycling and composting efforts.',
      'Reduce single-use plastics.',
      'Consider minimizing overall waste production.'
    ],
    water: [
      'Implement water-saving techniques.',
      'Fix leaks and optimize water usage.',
      'Consider using water-efficient appliances.'
    ],
    goods: [
      'Reduce consumption of non-essential goods.',
      'Opt for sustainable and eco-friendly products.',
      'Minimize frequent shopping trips.'
    ],
    lifestyle: [
      'Adopt more sustainable lifestyle habits.',
      'Reduce energy and resource use.',
      'Increase awareness of environmental impacts.'
    ],
    offsets: [
      'Consider increasing your investment in carbon offset projects.',
      'Explore different types of offset programs.',
      'Monitor the impact of your offset investments.'
    ]
  },
  moderate: {
    energy: ['Your energy usage is under control.'],
    transportation: ['Your transportation footprint is under control.'],
    housing: ['Your housing footprint is under control.'],
    diet: ['Your dietary footprint is under control.'],
    waste: ['Your waste management practices are under control.'],
    water: ['Your water footprint is under control.'],
    goods: ['Your goods consumption is under control.'],
    lifestyle: ['Your lifestyle footprint is under control.'],
    offsets: ['Your offsets are minimal. Consider investing in offsets.']
  }
};

// Function to generate recommendations based on scores
const generateRecommendations = (scores) => {
  const recommendations = {};

  Object.keys(scores).forEach((category) => {
    const score = scores[category];
    const { high, moderate } = thresholds[category];

    if (score > high) {
      recommendations[category] = recommendationsMapping.high[category];
    } else if (score > moderate) {
      recommendations[category] = recommendationsMapping.moderate[category];
    } else {
      recommendations[category] = recommendationsMapping.moderate[category];
    }
  });

  return recommendations;
};

// Recommendations Page Component
const Results = () => {
  const location = useLocation();
  const { scores, user } = location.state; // Ensure scores and user are passed correctly

  const recommendations = generateRecommendations(scores);

  const getConclusionText = () => {
    const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
    if (totalScore > 300) {
      return { text: 'High Carbon Footprint', color: 'text-red-600', bgColor: 'bg-red-50' };
    } else if (totalScore > 150) {
      return { text: 'Moderate Carbon Footprint', color: 'text-yellow-600', bgColor: 'bg-yellow-50' };
    } else {
      return { text: 'Low Carbon Footprint', color: 'text-green-600', bgColor: 'bg-green-50' };
    }
  };

  const { text: conclusionText, color, bgColor } = getConclusionText();
  const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
  const footprintColor = totalScore > 300 ? 'text-red-600' : totalScore > 150 ? 'text-yellow-600' : 'text-green-600';

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
          <div className={`p-4 mb-6 rounded-md ${footprintColor}`}>
            <h2 className={`text-2xl font-bold ${footprintColor}`}>Carbon Footprint</h2>
            <p className={`mt-2 ${footprintColor}`}>Total Carbon Footprint Score: {totalScore}</p>
            <p className={`mt-2 ${footprintColor}`}>{conclusionText}</p>
          </div>
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
          <p className={`mt-2 ${color}`}>{conclusionText}</p>
          <p className={`mt-2 ${color}`}>Overall Carbon Footprint Value: {totalScore}</p>
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
