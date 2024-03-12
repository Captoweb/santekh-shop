<?php 
$pdo = new PDO('mysql:host=localhost;dbname=oleg-magaz;charset=utf8', 'root', '');

$sql = "SELECT * FROM goods";
//$sql = "SELECT * FROM `goods` WHERE `category` = 'krepezh'";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$goods = $stmt->fetchAll(PDO::FETCH_ASSOC);
//$goods = $stmt->fetchAll(PDO::FETCH_OBJ);
$res = json_encode($goods, JSON_UNESCAPED_UNICODE);

print_r($res); // без print_r НЕ будет работать !!!

?>
