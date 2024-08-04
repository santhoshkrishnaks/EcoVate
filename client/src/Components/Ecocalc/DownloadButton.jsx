import React from 'react';
import { generatePDF } from './pdfgen'; // Assuming generatePDF is in this file

const DownloadButton = ({ user, scores, recommendations }) => (
  <button
    onClick={() => generatePDF(user, scores, recommendations)}
    className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800"
  >
    Download PDF Report
  </button>
);

export default DownloadButton;
