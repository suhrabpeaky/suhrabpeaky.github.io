<?php
    $login = filter_var(trim($_POST['login']),
    FILTER_SANITIZE_STRING);

    $pass = filter_var(trim($_POST['password']),
    FILTER_SANITIZE_STRING);

    $name = filter_var(trim($_POST['name']),
    FILTER_SANITIZE_STRING);

    $surname = $_POST['surname'];

    $phNumber = $_POST['phNumber'];


    if (mb_strlen($login) < 5 || mb_strlen($login) > 90) {
        echo "Your login is not suitable";
        exit();
    } else if (mb_strlen($pass) < 3 || mb_strlen($pass) > 20) {
        echo "Your password is not suitable";
        exit();
    } else if (mb_strlen($name) <= 1 || mb_strlen($name) > 20) {
        echo "Your name is not suitable";
        exit();
    } else if (mb_strlen($surname) <= 1 || mb_strlen($surname) > 20) {
        echo "Your surname is not suitable";
        exit();
    } else if (mb_strlen($phNumber) <= 7 || mb_strlen($phNumber) > 15) {
        echo "Your phNumber is not suitable";
        exit();
    }

    $mysql = new mysqli('localhost', 'root', '', 'dillermerkezi');
    $mysql->query("INSERT INTO `users` (`name`, `surname`, `login`, `password`, `phNumber`) VALUES('$name', '$surname', '$login', '$pass', '$phNumber')");
    $mysql->close();

    header('Location: index.html');
?>