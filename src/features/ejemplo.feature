Feature: Navegación y compra en Demoblaze
    @ho
    Scenario: Navegar a la página de inicio
        Given que estoy en la página de inicio de Demoblaze
        When verifico que el título de la página es "STORE"
        Then debería ver la lista de productos disponibles
    @ho1
    Scenario: Agregar un producto al carrito
        Given que estoy en la página de inicio de Demoblaze
        When selecciono el producto "Samsung galaxy s6"
        And hago clic en "Add to cart"
        Then debería ver un mensaje confirmando que el producto fue agregado

    Scenario: Verificar el carrito de compras
        Given que he agregado un producto al carrito
        When navego al carrito de compras
        Then debería ver el producto "Samsung galaxy s6" en el carrito