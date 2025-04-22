import { BeforeAll, Before, After, AfterAll, AfterStep, setDefaultTimeout } from "@cucumber/cucumber";
import { getEnv } from "../helper/env/env";
import { chromium, firefox, webkit, Browser, LaunchOptions, BrowserContextOptions } from "@playwright/test";
import fs from "fs";
import path from "path";

//setDefaultTimeout(180000);

const TAG = "@chrome";
const REPORTS_DIR = "reports";

// Opciones de configuración para los navegadores
const browserOptions: LaunchOptions = {
  headless: false,
  //timeout: 60000,
  slowMo: 0,
  args: [
    "--use-fake-ui-for-media-stream",
    "--use-fake-device-for-media-stream",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--disable-setuid-sandbox",
    "--no-first-run",
    "--deterministic-fetch",
    "--disable-features=IsolateOrigins",
    "--disable-site-isolation-trials",
    "--disable-web-security",
    "--allow-file-access-from-files",
    "--allow-insecure-localhost",
    "--ignore-certificate-errors",
  ],
  firefoxUserPrefs: {
    "media.navigator.streams.fake": true,
    "media.navigator.permission.disabled": true,
  },
};

// Opciones de configuración para el contexto del navegador
const contextOptions: BrowserContextOptions = {
  ignoreHTTPSErrors: true, // Configuración válida para el contexto
  acceptDownloads: true,
};

// Configuración global
export const config = {
  browserOptions,
  contextOptions,
  IMG_THRESHOLD: { threshold: 0.4 },
};

// Enum para los navegadores soportados
enum BROWSER {
  FIREFOX = "firefox",
  CHROME = "chrome",
  SAFARI = "safari",
}

// Función para inicializar el navegador según el TAG
const initializeBrowser = async (): Promise<Browser> => {
  if (TAG.includes(BROWSER.CHROME)) {
    return chromium.launch(browserOptions);
  } else if (TAG.includes(BROWSER.FIREFOX)) {
    return firefox.launch(browserOptions);
  } else if (TAG.includes(BROWSER.SAFARI)) {
    return webkit.launch(browserOptions);
  }
  return chromium.launch(browserOptions); // Por defecto, usa Chromium
};

// Hooks de Cucumber
BeforeAll(async () => {
  getEnv();
  console.log("Inicializando navegador...");
  global.browser = await initializeBrowser();
});

AfterAll(async () => {
  console.log("Cerrando navegador...");
  await global.browser.close();
});

Before(async () => {
  console.log("Creando nuevo contexto y página...");
  global.context = await global.browser.newContext(contextOptions); // Aplicar opciones del contexto
  global.page = await global.context.newPage();
});

After(async () => {
  console.log("Cerrando página y contexto...");
  await global.page.close();
  await global.context.close();
});

AfterStep(async function (scenario) {
  const screenshotPath = path.join(REPORTS_DIR, `${scenario.pickle}.png`);
  const buffer = await global.page.screenshot({ path: screenshotPath, fullPage: true });
  this.attach(buffer, "image/png");
 // console.log(`Captura de pantalla guardada en: ${screenshotPath}`);
});