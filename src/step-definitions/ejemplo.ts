import { Given, Then, When } from "@cucumber/cucumber";
import Prueba1 from "../page-object/ejemplos";

const prueba1 = new Prueba1();
Given('inicio sesion en la pagina OrangeHRM',async function () {
  await prueba1.navigate();
})

Then('ingreso con las credenciales de usuario',async function () {
 await prueba1.singIn();

})

When('valido el inicio de sesion si es exitoso',async function () {
  await prueba1.ValidateDasahboard();
})

Then('selecciono la opcion de PIM en el menu de navegacion y registrto un nuevo empleado',async () => {
  await prueba1.RegisterEmployee();
})
