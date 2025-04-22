export default class Prueba1{
    private Elements = {

    }

    async navigate() {
        await global.page.goto(process.env.URL_BASE,{timeout: 10000});
      }

} 