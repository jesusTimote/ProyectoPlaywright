import { Given, Then, When } from "@cucumber/cucumber";
import Prueba1 from "../page-object/ejemplos";

const prueba1 = new Prueba1();
Given('que estoy en la página de inicio de Demoblaze', async function () {
    await prueba1.navigate();
  });

When('verifico que el título de la página es "STORE"',async function () {

});

Then('debería ver la lista de productos disponibles', async function () {

});