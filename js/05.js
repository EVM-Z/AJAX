var btnCargar = document.getElementById('cargar');

function cargarContenidoAjax() {
    //  Crear nuestro XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Abrimos la conexion
    xhr.open("GET", "texto_prueba.txt", true);
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
        //  Verificamos que sea correcta y tenga respuesta
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("Se cargo correctamente");
            var contenido = document.getElementById('contenido');
            contenido.innerHTML = xhr.responseText;
        }
    }
    xhr.send();
}

btnCargar.addEventListener('click', cargarContenidoAjax);