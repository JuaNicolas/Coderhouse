<?php
$to = "nicolas_juany@hotmail.com"; // Student e-mail
$from = $_POST['email']; // This is the sender's Email address
$first_name = $_POST['firstName']; // This is the sender's Name
$subject = "Email de Star Wars API";
$comments = $first_name . ' te dijo: ' . $_POST['comments'];
$headers = "From:" . $from;
$email = mail($to,$subject,$comments,$headers);
if(!$email){
  echo "Hubo un error al procesar tu email, detallle del error". $email; 
}
?>