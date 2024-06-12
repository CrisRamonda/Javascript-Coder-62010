let carrito = []

function agregarProducto() {
    let producto = prompt("Ingrese el producto para agregarlo al carrito 🛒")

    if (producto) {
        carrito.push(producto)
        alert(`${producto} agregado al carrito 👍`)
    } else {
        alert(`No se agregó ningún producto... 😢`)
    } 

    console.log(carrito)
}

function verCarrito() {
    if (carrito.length > 0) {
        let lista = ''
        
        for (let i = 0; i < carrito.length; i++) {
            lista += `✅ Prod. ${i+1} ${carrito[i]} \n` 
        }

        alert(lista)
    } else {
        alert('No hay productos en el carrito')
    }

    console.log(carrito.length)
    console.log()
}

