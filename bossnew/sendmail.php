
<?php

$formdata = $_POST;

$name = $formdata['name'];
$email = $formdata['email'];
$phone = $formdata['phone'];
$company = $formdata['company'];
$text = $formdata['message'];

$to      = 'obbdpu@gmail.com';
$subject = 'Message from website';


$message = '<p>Name: ' . $name . '</p>';
$message .= '<p>Email: ' . $email . '</p>';
$message .= '<p>Phone: ' . $phone . '</p>';
$message .= '<p>Company: ' . $company . '</p>';
$message .= '<p>Message: ' . $text . '</p>';

$headers = 'From: no-reply@bossusa.com' . "\r\n" .
    'Reply-To: ' . $name . '<' . $email . '>' . "\r\n" .
    'Content-Type: text/html; charset=UTF-8' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>
