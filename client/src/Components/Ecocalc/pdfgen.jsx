import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { v4 as uuidv4 } from 'uuid';

// Load the fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// Function to generate and download PDF
export const generatePDF = (scores, recommendations) => {
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const getColorForScore = (score) => {
    if (score > 300) return { text: 'red', bg: 'red' };
    if (score > 150) return { text: 'yellow', bg: 'yellow' };
    return { text: 'green', bg: 'green' };
  };

  const { text: colorText, bg: colorBg } = getColorForScore(totalScore);

  const docDefinition = {
    content: [
      { text: 'EcoCalc', style: 'header' },
      { text: 'Your path to a greener future', style: 'subheader' },
      { text: `\nEcoCalc Report`, style: 'sectionHeader' },
      ...Object.keys(recommendations).map(category => ({
        text: category.charAt(0).toUpperCase() + category.slice(1),
        style: 'categoryHeader',
        margin: [0, 0, 0, 10],
        stack: [
          { ul: recommendations[category].map(rec => ({ text: rec, margin: [0, 5] })) },
          { text: `\n` }
        ]
      })),
      { text: `\nConclusion`, style: 'sectionHeader' },
      {
        text: `Your total carbon footprint score: ${totalScore}`,
        style: 'content',
        color: colorText
      },
      {
        text: totalScore > 300
          ? 'High Carbon Footprint'
          : totalScore > 150
            ? 'Moderate Carbon Footprint'
            : 'Low Carbon Footprint',
        style: 'conclusion',
        background: colorBg,
        color: '#ffffff',
        margin: [0, 10, 0, 0]
      }
    ],
    styles: {
      header: { fontSize: 24, bold: true, alignment: 'center', color: '#4A5568' },
      subheader: { fontSize: 16, italics: true, alignment: 'center', color: '#6B7280' },
      sectionHeader: { fontSize: 18, bold: true, margin: [0, 20, 0, 10], color: '#2D3748' },
      categoryHeader: { fontSize: 16, bold: true, margin: [0, 10, 0, 5], color: '#2D3748' },
      content: { fontSize: 12, color: '#4A5568' },
      conclusion: { fontSize: 16, bold: true, padding: 10 }
    }
  };

  pdfMake.createPdf(docDefinition).download(`EcoCalc_Report_${uuidv4()}.pdf`);
};
