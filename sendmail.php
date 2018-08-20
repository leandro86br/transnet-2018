<?php

require_once('class.phpmailer.php');

$nome    = $_POST['nome'];
$email      = $_POST['email'];
$msg       = $_POST['msg'];

$htmlContent = '
<h4>Orçamento enviado pelo site Transnet</h4>
<table cellspacing="0" style="width: 400px; height: 180px;">
    <tr>
        <th>Nome:</th><td>'.$nome.'</td>
    </tr>
    <tr style="background-color: #e0e0e0;">
        <th>Email:</th><td>'.$email.'</td>
    </tr>
    <tr>
        <th>Mensagem:</th><td>'.$msg.'</td>
    </tr>
</table>';
 
$mailer = new PHPMailer();

$mailer->IsSMTP();
$mailer->SMTPDebug = 1;
$mailer->Port = 587; 
 
$mailer->Host = 'localhost';
 
$mailer->SMTPAuth = true; 
$mailer->Username = 'info@transnet.net.br'; 
$mailer->Password = 'Transnet@sp2017'; 
$mailer->FromName = ($_POST['nome']); 
$mailer->From = 'info@transnet.net.br'; 
$mailer->AddAddress($_POST['email']);
$mailer->addCC('contato@mkart.com.br');
$mailer->Subject = 'Orcamento do Site - '.date("H:i").'-'.date("d/m/Y");
//$mailer->Body = ($_POST['msg']);
$mailer->Body = ($htmlContent);
$mailer->CharSet = 'utf-8';
$mailer->isHTML(true);    


if(!$mailer->Send())
    {
    echo "<script>alert('Mensagem NAO enviada, entre em contato pelo email info@transnet.net.br')</script>";
    echo "Erro: " . $mailer->ErrorInfo;
    exit;
    }

echo "<script>alert('Mensagem enviada, retornaremos em breve')</script>";
echo "<script>history.go(-1);</script>";

?>