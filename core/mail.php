<?php
// читаем json файл
$json = file_get_contents('../goods.json');
$json = json_decode($json, true);

// письмо
$message = '';
$message .= '<h1>Заказ в магазине</h1>';
$message .= '<p>Телефон: '.$_POST['ephone'].'</p>';
$message .= '<p>Почта: '.$_POST['email'].'</p>';
$message .= '<p>Клиент: '.$_POST['ename'].'</p>';


$cart = $_POST['cart'];

$sum = 0;
foreach ($cart as $id=>$count) {
   $message .= $json[$id]['name'] . ' ';
   $message .= $count . ' шт ';
   $message .= $count * $json[$id]['cost'] . ' руб ';
   $message .= '<br>';
   $sum = $sum + $count * $json[$id]['cost'];
}
$message .= '<b>Итого: '.$sum. ' руб </b>';

//print_r($message);

// отсылка письма

$to = 'captainphp@yandex.ru' . ',';
$to .= $_POST['email'];
$spectext = '<!DOCTYPE HTML><html><head><title>Заказ</title></head><body>';
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-Type: text/html; charset=utf8' . "\r\n";

$m = mail($to, 'Заказ в магазине', $spectext.$message.'</body></html>',$headers);

if ($m) {echo 1;} else {echo 0;}


// $name = trim(htmlspecialchars($_POST['name']));
// $phone = trim(htmlspecialchars($_POST['tel']));
// $message = trim(htmlspecialchars($_POST['text']));

// // указываем адрес отправителя, можно указать адрес на домене Вашего сайта
// $fromMail = 'web1dev.ru';
// $fromName = 'web1dev.ru Форма';

// // Сюда введите Ваш email
// $emailTo = 'captainphp@yandex.ru';
// $subject = 'Форма обратной связи на php';
// $subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
// $headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
// $headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

// // тело письма
// $body = "Получено письмо с сайта web1dev.ru \n Имя: $name\nТелефон: $phone \nСообщение: $message";

// // сообщение будет отправлено в случае, если поле с номером телефона не пустое
// if (strlen($phone) > 0) {
//     $mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );
// }