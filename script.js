function VerileriGetir(kategori) {
    // Önce ekrandaki tüm eski sonuçları temizle (Ders notu mantığı)
    var alanlar = document.querySelectorAll('[id$="-sonuclar"]');
    for (var i = 0; i < alanlar.length; i++) {
        alanlar[i].innerHTML = "";
    }
    
    var hedefId = kategori + "-sonuclar";
    document.getElementById(hedefId).innerHTML = "Yükleniyor...";

    // --- FİLM KATEGORİSİ ---
    if (kategori === 'film') {
        fetch('https://api.tvmaze.com/shows')
            .then(function(resp) { return resp.json(); }) // JSON formatına dönüştür
            .then(function(data) {
                var html = "<div class='row'>";
                for (var j = 0; j < 10; j++) { // İlk 6 film
                    html += "<div class='col-10 text-center'>";
                    html += "<img src='" + data[j].image.medium + "' class='img-fluid rounded'>";
                    html += "<p style='font-size:10px;'><b>" + data[j].name + "</b></p>";
                    html += "</div>";
                }
                html += "</div>";
                document.getElementById(hedefId).innerHTML = html;
            });
    }

    // --- KİTAP KATEGORİSİ ---
    else if (kategori === 'kitap') {
        fetch('https://openlibrary.org/subjects/fiction.json?limit=10')
            .then(function(resp) { return resp.json(); })
            .then(function(data) {
                var html = "<ul class='list-group list-group-flush'>";
                for (var k = 0; k < data.works.length; k++) {
                    html += "<li class='list-group-item' style='font-size:11px;'>" + data.works[k].title + "</li>";
                }
                html += "</ul>";
                document.getElementById(hedefId).innerHTML = html;
            });
    }

    // --- MÜZİK KATEGORİSİ ---
    else if (kategori === 'muzik') {
        fetch('https://itunes.apple.com/search?term=pop&limit=10&entity=song')
            .then(function(resp) { return resp.json(); })
            .then(function(data) {
                var html = "<div>";
                var sonuclar = data.results;
                for (var m = 0; m < sonuclar.length; m++) {
                    html += "<div style='font-size:11px; border-bottom:1px solid #ddd; padding:5px;'>";
                    html += "<b>" + sonuclar[m].trackName + "</b> - " + sonuclar[m].artistName;
                    html += "</div>";
                }
                html += "</div>";
                document.getElementById(hedefId).innerHTML = html;
            });
    }


    
}