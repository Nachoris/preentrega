function obtenerCarrito(){
    const carritoGuardado= localStorage.getItem("carrito");
        if (carritoGuardado === null) {
            return [];
        }
        return JSON.parse(carritoGuardado); // texto a array
}

function guardarCarrito(carrito){
    localStorage.setItem("carrito", JSON.stringify(carrito)); //array a texto
    
    actualizarContador();
}

function agregarProducto(id)
{
    const carrito= obtenerCarrito();

    const bajo = bajos.find(function (p) {
        return p.id === id;
    });

    const itemCarrito =carrito.find(function(item){
        return item.id === id;
    });

    if(itemCarrito) {
        itemCarrito.cantidad = itemCarrito.cantidad + 1;
    } else {
        carrito.push({
            id: bajo.id,
            nombre: bajo.nombre,
            precio: bajo.precio,
            cantidad: 1,
        });
    }

    guardarCarrito(carrito);
    Swal.fire({
        toast:true,
        position: "top-end",
        icon: "succes",
        title: "Agregaste " + bajo.nombre,
        showConfirmButton: false,
        timer: 1500
    });
}

function eliminarProducto(id){
    const carrito = obtenerCarrito();
    const carritoNuevo = carrito.filter(function (item) {
        return item.id !== id;
    });

    guardarCarrito(carritoNuevo);
}

function vaciarCarrito(){
    guardarCarrito([]);
}

function calcularTotal(){
    const carrito = obtenerCarrito();
    let total=0;
    for ( let i=0; i < carrito.length; i++){
        total = total + carrito[i].precio * carrito[i].cantidad;
    }
    return total;
}

function contarProductos(){
    const carrito = obtenerCarrito();
    let cantidad = 0;
    for (let i=0; i < carrito.length; i++){
        cantidad = cantidad + carrito[i].cantidad;
    }
    return cantidad;
}

function actualizarContador(){
    const contador = document.getElementById("contador-carrito");
    contador.textContent = contarProductos();
}

function formatearPrecio(numero){
    return "$" + numero.toLocaleString("es-AR");
}

actualizarContador();