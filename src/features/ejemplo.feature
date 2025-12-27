@OrangeHRM
Feature: Navegación 

  Background: Navegacion en OrangeHRM
    Given inicio sesion en la pagina OrangeHRM
     And ingreso con las credenciales de usuario
     Then valido el inicio de sesion si es exitoso


   @RegistroEmpleado
   Scenario: Registro de un nuevo empleado
     And selecciono la opcion de PIM en el menu de navegacion y registrto un nuevo empleado
