<?php
class CConexion{
    function CConexion(){
$host = "localhost";
$dbname = "dbphp";
$user = "postgres";
$password = "unach2025";

try{
    $conn = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);

echo "Conexion Exitosa";
}
    catch (PDOException $e){
        echo ("Error en la conexion: " . $e->getMessage());

    }
    return $conn;
}
}
?>