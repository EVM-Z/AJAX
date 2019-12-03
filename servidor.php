<?php
    $tecnologias = array(
        'frontend'=>'html5, css3, js',
        'backend'=>'html5, mysql, apache',
        'fullstack'=>'html5, css3, js, php, mysql, apache'
    );

    // El arreglo se convierte en un json
    echo json_encode($tecnologias);
?>