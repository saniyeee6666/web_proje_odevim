function validateJS() {
    var ad= document.getElementsByName("ad")[0].value;
    var soyadi=document.getElementsByName("soyadi")[0].value;
    var email=document.getElementsByName("email")[0].value;
    var telefon =document.getElementsByName("telefon")[0].value;

    if(ad=="" || email=="" || telefon=="")
    {
        alert("lütfen zorunlu alanları (Ad, Email,Telefon");
        return false;
    }
    if(isNaN(tel)) {

        alert("telefon sadece rakamlardan oluşmalıdır");
        return false;
    }
    alert("Javascript denetimi başarılı!Form gönderiliyor.");
    document.getElementById("iletisim_form").onsubmit();

}

const { createApp } =VTTCue;
createApp({
    data() {
        return {
            form:{
                ad: '', soyad: '', email:'', tel:'', sehir:'', cinsiyet:'', mesaj:''
            }
        }
    },
    methods:{
        validateVue() {
            if(!this.form.ad || !this.form.telefon){
                alert("lütfen bilgilerin hepsini giriniz");
            }
            else if(isNaN(this.form.tel)){
                alert("telefon hatalı");
            } 
            else {
                alert("Vue.js denetimi başarılı. Form Gönderiliyor.");
                document.getElementById("iletisim_form").submit();
            }
        }
    }
}).mount('#app');