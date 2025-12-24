function buscar() {
    const inputBuscar = document.getElementById("inputbuscar");
    const valorBuscar = inputBuscar.value.toLowerCase();

    fetch('./file/mensajes.json')
    .then(response => { 
        if (!response.ok) { 
            throw new Error('Error en la respuesta: ' + response.status); 
        } return response.json(); 
    }).then(data => { 
        const hoja = document.getElementById("hoja");
        hoja.innerHTML = obtenerDescripcionPorNombre(data.usuarios, valorBuscar);
    }).catch(error => console.error('Error cargando JSON:', error));
}

function obtenerDescripcionPorNombre(lista, nombreBuscado) { 
    // Normalizamos para evitar problemas de mayúsculas/minúsculas 
    const usuario = lista.find(u => u.nombre.toLowerCase() === nombreBuscado.toLowerCase()); 
    return usuario ? usuario.mensaje : "Usuario no encontrado 🚫"; 
}

function limpiar(){
    const hoja = document.getElementById("hoja");
    const inputbuscar = document.getElementById("inputbuscar");
    inputbuscar.value = '';
    hoja.innerHTML = '';
}