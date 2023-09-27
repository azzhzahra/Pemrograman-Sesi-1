const mahasiswa = {
    nama : " Nurazizah zahra",
    kelas : " TI 22 H",
    NIM : " 20220040089",
};

const nilai = {
    imk : 100,
    rpl : 100,
};

console.log ("nama: ", mahasiswa.nama);
console.log ("kelas: ", mahasiswa.kelas);
console.log ("NIM: ", mahasiswa.NIM);

console.log ("\nNilai");
console.log("interaksi masusia dan komputer",nilai.imk);
console.log("rekayasa perangkat lunak",nilai.rpl);

const rataRata = (nilai.imk + nilai.rpl) / 2;
console.log("rata-rata nilai", rataRata)