<?php 


    $data = "Testing ";
    
    use PHPMailer\PHPMailer\PHPMailer;
    function sendmail(){
        $name = "Mail Test";  // Name of your website or yours
        $to = "shanmucode27@gmail.com";  // mail of reciever
        $subject = "Tutorial or any subject";
        $body = "Empty data " + $data;
        $from = "mshanmu2905@outlook.com";  // you mail
        $password = "Shanmu2905";  // your mail password

        // Ignore from here

        require_once "PHPMailer/PHPMailer.php";
        require_once "PHPMailer/SMTP.php";
        require_once "PHPMailer/Exception.php";
        $mail = new PHPMailer();

        // To Here

        //SMTP Settings
        $mail->IsSMTP();
        $mail->SMTPDebug = 3; // Keep It commented this is used for debugging                          
        $mail->Host = "smtp-mail.outlook.com"; // smtp address of your email
        $mail->SMTPAuth = true;
        $mail->Username = $from;
        $mail->Password = $password;
        $mail->Port = 587;  // port
        $mail->SMTPSecure = "tls";  // tls or ssl
        $mail->smtpConnect([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
            ]
        ]);

        //Email Settings
        $mail->isHTML(true);
        $mail->setFrom($from, $name);
        $mail->addAddress($to); // enter email address whom you want to send
        $mail->Subject = ("$subject");
        $mail->Body = $body;
        if ($mail->send()) {
            echo "Email is sent!";
        } else {
            echo "Something is wrong: <br><br>" . $mail->ErrorInfo;
        }
    }


?>