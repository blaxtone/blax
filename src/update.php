<?php

$id = $_GET['id_update'];
$img = $_GET['img'];
$name = $_GET['name'];
$description = $_GET['description'];


$connect = mysqli_connect('localhost', 'root', '', 'blax');
if ($connect === false)
{
    die("ошибка поключения к бд");
}

$sql = "UPDATE blaxtone SET `img` = '{$img}', `name` = '{$name}', `description`='{$description}' WHERE `id` = {$id}";

$result = mysqli_query($connect, $sql);

header('Location: http://localhost:1234');
exit;

?>