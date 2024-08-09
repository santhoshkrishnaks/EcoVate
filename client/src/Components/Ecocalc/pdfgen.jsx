import { PDFDocument, rgb } from "pdf-lib";
import { v4 as uuidv4 } from "uuid";

export const pdfgen = async (scores, recommendations) => {
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const getColorForScore = (score) => {
    if (score > 300) return { text: rgb(1, 0, 0), bg: rgb(1, 0, 0) };
    if (score > 150) return { text: rgb(1, 1, 0), bg: rgb(1, 1, 0) };
    return { text: rgb(0, 1, 0), bg: rgb(0, 1, 0) };
  };

  const { text: colorText, bg: colorBg } = getColorForScore(totalScore);

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const { height } = page.getSize();

  const drawText = (text, x, y, size = 12, color = rgb(0, 0, 0)) => {
    page.drawText(text, { x, y, size, color });
  };

  let currentY = height - 40;

  drawText("EcoCalc", 50, currentY, 24, rgb(0.29, 0.33, 0.41));
  currentY -= 30;
  drawText(
    "Your path to a greener future",
    50,
    currentY,
    16,
    rgb(0.42, 0.45, 0.5)
  );
  currentY -= 30;
  drawText("EcoCalc Report", 50, currentY, 18, rgb(0.18, 0.22, 0.28));
  currentY -= 20;

  Object.keys(recommendations).forEach((category) => {
    drawText(
      category.charAt(0).toUpperCase() + category.slice(1),
      50,
      currentY,
      16,
      rgb(0.18, 0.22, 0.28)
    );
    currentY -= 20;
    recommendations[category].forEach((rec) => {
      drawText(rec, 60, currentY, 12, rgb(0.29, 0.33, 0.41));
      currentY -= 15;
    });
    currentY -= 10;
  });

  drawText("Conclusion", 50, currentY, 18, rgb(0.18, 0.22, 0.28));
  currentY -= 20;
  drawText(
    `Your total carbon footprint score: ${totalScore}`,
    50,
    currentY,
    12,
    colorText
  );
  currentY -= 20;
  drawText(
    totalScore > 300
      ? "High Carbon Footprint"
      : totalScore > 150
      ? "Moderate Carbon Footprint"
      : "Low Carbon Footprint",
    50,
    currentY,
    16,
    rgb(1, 1, 1)
  );
  page.drawRectangle({
    x: 45,
    y: currentY - 5,
    width: 300,
    height: 25,
    color: colorBg,
  });

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `EcoCalc_Report_${uuidv4()}.pdf`;
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};