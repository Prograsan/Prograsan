<?php
if(isset($POST['enviar'])){
    $para = 'prograsanuy@gmail.com';
    $asunto = 'presupuesto';
    $mensaje = "Del sr o sra: " .$POST['nombre']."\n". $_POST['msg'];
    $headers = "From: ".$_POST['email']."\r\n";
    $headers .= "Reply-To: ".$_POST['email']."\r\n";
    $headers .= "Content-type: text/html\r\n";
    mail($para, $asunto, $mensaje, $headers);
}
?>