export default class Prueba1 {
  private Elements = {
    txtTitle: "//h5[text()='Login']"
  }

  async navigate() {
    await global.page.goto(process.env.URL_BASE, { timeout: 10000 });
    await global.page.waitForSelector(this.Elements.txtTitle)
  }

  async singIn() {
    await global.page.fill("//input[@name='username']", process.env.USERNAME);
    await global.page.fill("//input[@name='password']", process.env.PASSWORD);
    await global.page.click("//button[@type='submit']");
    await global.page.waitForSelector("//span[text()='Dashboard']", { timeout: 15000 }); // Espera a que cargue
  }

  async ValidateDasahboard() {
    await global.page.waitForSelector("//span[text()='Dashboard']");
  }

} 