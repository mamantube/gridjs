function tabel () {
    new gridjs.Grid ({
        search : true,
        sort : true,
        pagination : {
            limit : 3
        },
        columns : ["NAMA", "UMUR", "Alamat"],
        data : [
            ["Anton", "27 Tahun", "Kapuk"],
            ["Deren", "23 Tahun", "Bintaro"],
            ["Devin", "25 Tahun", "Pondok Indah"],
            ["Norman", "30 Tahun", "Andara"],
            ["Rose", "24 Tahun", "Green Lake"],
            ["Stella", "23 Tahun", "BSD"]
        ]
    }

    ).render(document.getElementById("tabel"));
}

tabel();

export { tabel };