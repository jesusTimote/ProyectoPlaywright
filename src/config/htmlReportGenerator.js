const fs = require("fs");
const path = require("path");
const reporter = require("cucumber-html-reporter");

// Define rutas como constantes
const REPORTS_DIR = path.resolve(__dirname, "../../reports");
const JSON_FILE = path.join(REPORTS_DIR, "cucumber_report.json");
const HTML_FILE = path.join(REPORTS_DIR, "cucumber_report.html");

// Configuración del reporte
const options = {
  brandTitle: "Reporte Test Automation", 
  theme: "bootstrap",
  jsonFile: JSON_FILE,
  output: HTML_FILE,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    Version: "1.0",
    "Test Environment": "Pricing Engine",
    Platform: "WEB",
    MVP: "1",
    Executed: "Remote",
  },
};

// Verifica si el archivo JSON existe antes de generar el reporte
try {
  if (!fs.existsSync(JSON_FILE)) {
    throw new Error(`El archivo JSON no existe: ${JSON_FILE}`);
  }

  // Genera el reporte
  reporter.generate(options);
  console.log("Reporte generado exitosamente:", HTML_FILE);
} catch (error) {
  console.error("Error al generar el reporte:", error.message);
}