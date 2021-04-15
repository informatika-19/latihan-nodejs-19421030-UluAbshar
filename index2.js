const nilai = 80
let nilaiHuruf, ket

//logika bercabang
if(nilai >= 85){
    nilaiHuruf = 'A'
    ket = "Sangat Baik"
}else if(nilai >= 75 && nilai <= 85){
    nilaiHuruf = 'B'
    ket ='Baik'
}else if(nilai >= 65 && nilai <= 65){
    nilaiHuruf = 'C'
    ket = 'Cukup'
}else if(nilai >= 55 && nilai <= 65){
    nilaiHuruf = 'D'
    ket = 'Buruk'
}else{
    nilaiHuruf = 'E'
    ket = 'Sangat Buruk'
}

console.log('Nilai Anda'+ nilaiHuruf + '(' + ket +')')