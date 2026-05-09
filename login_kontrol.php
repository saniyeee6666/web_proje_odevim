<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    

    $kullanici_adi = trim($_POST['kullanici_adi']); 
    $sifre = $_POST['sifre'];

    $dogru_kullaniciadi = "b251210056@sakarya.edu.tr"; 
    $dogru_sifre = "251210056"; 

    if ($kullanici_adi == $dogru_kullaniciadi && $sifre == $dogru_sifre) {
        echo "<h1>Hoşgeldiniz " . $dogru_sifre . "</h1>";
        echo "<p><a href='index.html'>Ana Sayfaya Gitmek İçin Tıklayın</a></p>";

    } else {
        header("Location: index.html?hata=1");
        exit();
    }
}
?>