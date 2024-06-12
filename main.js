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
}

function quitarUltimo() {
    if (carrito.length > 0) {
        let elemento = carrito[carrito.length-1]
        alert(`${elemento} eliminado del carrito`)
        carrito.pop()
    
        console.log(carrito)
        console.log(elemento)
        console.log(carrito[carrito.length-1], carrito.length)
    } else {
        alert('No hay productos en el carrito')
    }

}

function limpiarCarrito() {
    carrito = []
    alert('Carrito limpio 🧹')

    console.log(carrito)
}
