# Proyecto Base - Playwright

## Instalación de Dependencias

Para instalar todas las dependencias necesarias para este proyecto, sigue los pasos a continuación:

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.
2. Ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias:

    ```bash
    npm install
    ```

## Ejecución de Casos de Prueba

Para ejecutar los casos de prueba, utiliza los siguientes comandos:
1. Crear la carpeta de reportes:

    ```bash
     npm run init
    ```
1. Ejecutar todos los casos de prueba:

    ```bash
    npx playwright test
    ```

2. Ejecutar un caso de prueba específico:

    ```bash
    npm run cucumber-test-uat  --tags="@ho"
    ```
3. Para ejecutar el reporte

    ```bash
     npm run cucumber-report
    ``` 