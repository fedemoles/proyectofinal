<?php
//Capturar datos del formulario en variables
$inputName4 = $_POST['inputName4'];
$inputEmail2 = $_POST['inputEmail2'];
$validationTextarea = $_POST['validationTextarea'];
$validationFile = $_FILES['validationFile'];

require("./class.phpmailer.php");
$mail = new PHPMailer();

$mail->From     = $inputEmail2;
$mail->FromName = $inputName4;
//*****Dirección a la que llegaran los mensajes*****
$mail->AddAddress("delpueblopropiedades@gmail.com");
// Aquí van los datos que apareceran en el correo que se envia
$mail->WordWrap = 50;
$mail->IsHTML(true);
$mail->Subject  =  "Contacto";
$mail->Body     =  "Nombre: $inputName4 \n<br />" .
    "Email: $inputEmail2 \n<br />" .
    "Mensaje: $validationTextarea \n<br />";
$mail->AddAttachment($validationFile['tmp_name'], $validationFile['name']);

//*****Datos del servidor SMTP para hacer posible el envio del correo*****
$mail->IsSMTP();
$mail->Host = "ssl://smtp.gmail.com:465"; //Servidor de Salida.
$mail->SMTPAuth = true;
$mail->Username = "xxxxxxxx@gmail.com"; //Correo Electrónico
$mail->Password = "************"; //Contraseña

if ($mail->Send())
    echo "<script>alert('Formulario enviado exitosamente.');</script>";
else
    echo "<script>alert('Error al enviar el formulario');</script>";
