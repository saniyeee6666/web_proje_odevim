<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    

    $ad       = $_POST['adi'];
    $soyad    = $_POST['soyadi'];
    $email    = $_POST['email'];
    $tel      = $_POST['telefon'];
    $sehir    = $_POST['sehir'];
    $cinsiyet = $_POST['cinsiyet'];
    $mesaj    = $_POST['mesaj'];
    $secilenler = $_POST['ilgi'] ?? []; 
    $ilgi_alanlari = !empty($secilenler) ? implode(", ", $secilenler) : "Seçim yapılmadı";

    echo "<h2>İletişim Formu Sonuçları</h2>";
    echo "<hr>";
    echo "<b>Ad Soyad:</b> " . $ad . " " . $soyad . "<br>";
    echo "<b>E-posta:</b> " . $email . "<br>";
    echo "<b>Telefon:</b> " . $tel . "<br>";
    echo "<b>Şehir:</b> " . $sehir . "<br>";
    echo "<b>Cinsiyet:</b> " . $cinsiyet . "<br>";
    echo "<b>Mesaj:</b> " . $mesaj . "<br>";
    echo "<b>İlgi Alanları:</b> " . $ilgi_alanlari;

    echo "<br><a href='iletisim.html'>Geri Dön</a>";
}
?>