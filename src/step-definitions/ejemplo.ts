import { Given, Then, When } from "@cucumber/cucumber";
import Prueba1 from "../page-object/ejemplos";

const prueba1 = new Prueba1();
Given('inicio sesion en la pagina OrangeHRM',async function () {
  await prueba1.navigate();
})

Then('ingreso con las credenciales de usuario',async function () {
 await prueba1.singIn();

})

When('selecciono el menu de Admin',async function () {
  await prueba1.ValidateDasahboard();
})
