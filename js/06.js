var btnCargar = document.getElementById('cargar');

function cargarContenidoAjax() {
    //  Crear nuestro XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Abrimos la conexion
    xhr.open("GET", "servidor.php", true);
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
        //  Verificamos que sea correcta y tenga respuesta
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            var contenido = document.getElementById('contenido');
            // Mostramos una parte del arreglo en el body
            contenido.innerHTML = json.frontend;
        }
    }
    xhr.send();
}

btnCargar.addEventListener('click', cargarContenidoAjax);