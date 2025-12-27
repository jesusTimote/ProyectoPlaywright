import { expect } from "@playwright/test";

export default class Prueba1 {
  private Elements = {
    txtTitle: "//h5[text()='Login']",
    lblDashboard: "//span[text()='Dashboard']",
    selectUser:"//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div"
  }

  async navigate() {
    await global.page.goto(process.env.URL_BASE, { timeout: 10000 });
    await global.page.waitForSelector(this.Elements.txtTitle)
  }

  async singIn() {
    await global.page.getByPlaceholder('Username').fill(process.env.USERNAME || '');
    await global.page.getByPlaceholder('Password').fill(process.env.PASSWORD || '');

  }

  async ValidateDasahboard() {
    await global.page.getByRole('button', { name: 'Login' }).click();
    await expect(global.page.getByText("Invalid credentials")).not.toBeVisible();
    await global.page.waitForSelector(this.Elements.lblDashboard, { timeout: 10000 });
    await expect(global.page.locator(this.Elements.lblDashboard)).toBeVisible();

  }

  async RegisterEmployee() {
    await global.page.getByRole('link', { name: 'PIM' }).click();
    await global.page.getByRole('button', { name: 'Add' }).click();

    await global.page.getByRole('textbox', { name: 'First Name' }).fill('Juan Carlos');;
    await global.page.getByRole('textbox', { name: 'Middle Name' }).fill('Gonzales');
    await global.page.getByRole('textbox', { name: 'Last Name' }).fill('Prada');

    await global.page.locator('form span').click();
   /* await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
    await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').press('CapsLock');
    await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('J');
    await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').press('CapsLock');
    await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('Juan');
    await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').press('CapsLock');
    await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('JuanC');
    await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').press('CapsLock');
    await page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').fill('JuanCarlos');
    await page.locator('input[type="password"]').first().click();
    await page.locator('input[type="password"]').first().fill('12345678');
    await page.locator('input[type="password"]').first().press('Alt+6');
    await page.locator('div').filter({ hasText: /^PasswordYour password must contain minimum 1 lower-case letter$/ }).getByRole('textbox').press('Alt+4');
    await page.locator('div').filter({ hasText: /^PasswordYour password must contain minimum 1 lower-case letter$/ }).getByRole('textbox').fill('12345678@');
    await page.locator('input[type="password"]').nth(1).click();
    await page.locator('div').filter({ hasText: /^PasswordYour password must contain minimum 1 lower-case letter$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^PasswordYour password must contain minimum 1 lower-case letter$/ }).getByRole('textbox').fill('');
    await page.locator('div').filter({ hasText: /^PasswordYour password must contain minimum 1 lower-case letter$/ }).getByRole('textbox').press('CapsLock');
    await page.locator('div').filter({ hasText: /^PasswordRequired$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^PasswordRequired$/ }).getByRole('textbox').press('CapsLock');
    await page.locator('div').filter({ hasText: /^PasswordRequired$/ }).getByRole('textbox').fill('J');
    await page.locator('div').filter({ hasText: /^PasswordRequired$/ }).getByRole('textbox').press('CapsLock');
    await page.locator('div').filter({ hasText: /^PasswordRequired$/ }).getByRole('textbox').fill('Juan1234');
    await page.locator('input[type="password"]').nth(1).click();
    await page.locator('input[type="password"]').nth(1).press('CapsLock');
    await page.locator('input[type="password"]').nth(1).fill('J');
    await page.locator('input[type="password"]').nth(1).press('CapsLock');
    await page.locator('input[type="password"]').nth(1).fill('Juan1234');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('div').filter({ hasText: /^Employee Full NameEmployee IdEmployee Id already exists$/ }).getByRole('textbox').nth(3).click();
    await page.locator('div').filter({ hasText: /^Employee Full NameEmployee IdEmployee Id already exists$/ }).getByRole('textbox').nth(3).fill('0100');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(1).click();
    await page.getByRole('option', { name: 'Peruvian' }).click();
    await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(2).click();
    await page.getByRole('option', { name: 'Single' }).click();
    await page.locator('div').filter({ hasText: /^Date of BirthGenderMaleFemale$/ }).locator('i').click();
    await page.getByText('25', { exact: true }).click();
    await page.locator('label').filter({ hasText: /^Male$/ }).locator('span').click();
    await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
    await page.locator('form').filter({ hasText: 'Blood Type-- Select --' }).locator('i').click();
    await page.getByRole('option', { name: 'O-' }).click();
    await page.locator('form').filter({ hasText: 'Blood TypeO-Test_Field Save' }).getByRole('button').click();
    await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
    await page.locator('.oxd-loading-spinner').click();
    await page.locator('.oxd-loading-spinner').click();getByRole('textbox', { name: 'Username' })
*/

  }




  async RegisterUserAdmin() {
    await global.page.getByRole('link', { name: 'Admin' }).click();
    await global.page.getByRole('button', { name: 'Add' }).click();
    await expect(global.page.getByText("Add User")).toBeVisible({ timeout: 10000 });
    await global.page.getByText('-- Select --').first().click();
    await global.page.getByRole('option', { name: 'Admin' }).locator('span').click();
    await global.page.locator('form i').nth(1).click();
    await global.page.getByRole('option', { name: 'Enabled' }).click();



  }


} 