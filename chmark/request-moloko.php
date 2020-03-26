<html><head><meta http-equiv=Content-Type content='text/html; charset=UTF-8'></head><body>


    <div class="inner-block">
        <p>Thank you, we got your message</p>
    </div>

<?php

        $to = $_POST['sContactEmail'];
		$email = $_POST['sEmail'];
		$name = $_POST['sName'];
        $subject = 'Contact Form From Site';
        $message = '
                <html>
                    <head>
                        <h2>'. 'Contact Form From Site' . '</h2>
                    </head>
                    <body>
                        <p>Name: '.$_POST['sName'].'</p>
                        <p>Phone: '.$_POST['sPhone'].'</p>
                        <p>Email: '.$_POST['sEmail'].'</p>
                        <p>Company: '.$_POST['sCompany'].'</p>' ;
		if(isset($_POST['sSpecify'])){
			$message .= '<p>Specify: '.$_POST['sSpecify'].'</p>';
		};
	
		if(isset($_POST['sComments'])){
			$message .= '<p>Comments:<br>'.nl2br($_POST['sComments']).'</p>';
		};
		$message .= '<br><br><br><p>This message was sent from http://gsmsystems.com</p>';				
		$message .= '
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: WordPress <no_reply@gsmsystems.com>\r\n";
		$headers .= "Reply-To:$name<$email>\r\n";
		$headers .= "Return-path:$name<$email>";
        mail($to, $subject, $message, $headers); 
	
?>