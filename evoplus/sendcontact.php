<?php
$subject = $_POST['subject'];
$number = $_POST['tel'];
$instagram = $_POST['insta'];
$address = 'zakaztest@evo.plus';
$mes = "Контакты \nТелефон: $number\nInstagram: $instagram \n\nОтправлено с сайта http://evo.plus";
$headers_list = "Content-type:text/plain; charset = UTF-8\r\nFrom:EVOPlus<no-reply@evo.plus>\r\nReply-To:$address\r\nReturn-path:$address";
$verify = mail ($address,$subject,$mes,$headers_list);

?>