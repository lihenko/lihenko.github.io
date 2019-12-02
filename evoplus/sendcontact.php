<?php
$subject = $_POST['subject'];
$number = $_POST['tel'];
$instagram = $_POST['insta'];
$address = 'obbdpu@gmail.com';
$mes = "Контакты \nТелефон: $number\nInstagram: $instagram \n\nОтправлено с сайта http://evo.plus";
$headers_list = "Content-type:text/plain; charset = UTF-8\r\nFrom:EVOPlus<no-reply@lihenko.com.ua>\r\nReply-To:$address\r\nReturn-path:$address\r\nCc:hook2002@mail.ru";
$verify = mail ($address,$subject,$mes,$headers_list);

?>