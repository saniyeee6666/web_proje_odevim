function validateLogin() {
    var email = document.getElementById("email").value;
    var sifre = document.getElementById("sifre").value;

    if (email == "" || sifre == "") {
        alert("Lütfen tüm alanları doldurunuz!");
        return false;
    }
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        alert("Lütfen geçerli bir e-posta adresi giriniz!");
        return false;
    }

    return true; 
}