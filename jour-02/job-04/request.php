<?php

    function my_insert_student(string $email, string $fullname, string $gender, DateTime $birthdate, int $gradeId) {
            
        $pdo = new PDO("mysql:host=localhost;dbname=lp_official;charset=utf8", "root", "");

        $sql = "INSERT INTO student (grade_id, email, fullname, birthdate, gender) VALUES (?,?,?,?,?)";
        $req = $pdo->prepare($sql);
        $req->execute([$gradeId, $email, $fullname, $birthdate->format("Y/m/d"), $gender]);
    }

    if($_SERVER["REQUEST_METHOD"] == "POST") {

    }
?>