
function mostrarBajos()
{
    const grilla=document.getElementById("grilla-bajos");
    
    
    
    
    for(let i=0;i<bajos.length;i++){

        let bajo=bajos[i];

        grilla.innerHTML +=`
        
        <article class="card">
                <img src="${bajo.imagen}" alt="${bajo.nombre}">
                <div class="card-info">
                    <span class="categoria">${bajo.categoria}</span>
                    <h3>${bajo.nombre}</h3>
                    <p>${bajo.descripcion}</p>
                    <span class="negrita">$${bajo.precio}</span>
                        <button onclick="AgregarProducto(${bajo.id})">
                        <i class="fa-solid fa-cart-plus"></i> Agregar al carrito
                        </button>
                </div>
        </article>
        
        
        `;

    }

}

function agregarProducto(id) {
    console.log("Agregaste el producto", id);
}

mostrarBajos();