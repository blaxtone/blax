<?php

$img = $_GET['new-img'];
$name = $_GET['new-name'];
$description = $_GET['new-description'];


$connect = mysqli_connect('localhost', 'root', '', 'blax');
if ($connect === false)
{
    die("ошибка поключения к бд");
}

$sql = "INSERT INTO blaxtone (`img`, `name`, `description`) VALUES('{$img}', '{$name}', '{$description}')";

$result = mysqli_query($connect, $sql);

header('Location: http://localhost:1234');
exit;

?>