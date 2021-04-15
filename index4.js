//Array

//const listNilai = ['A' , 'B' , 'C']
//console.log(listNilai[2])

const dataMahasiswa = [
    {
        nama: 'andri taufiq',
        npm: '19421030',
        prodi: 'Informatika'
    },
    {
        nama: 'ulul abshar',
        npm: ' 19421030',
        prodi: 'informatika'
    }

]
//console.log(dataMahasiswa[1].npm)

for (let i in dataMahasiswa){
    console.log(dataMahasiswa[i].nama + '-' + dataMahasiswa[i].npm + '-' + dataMahasiswa[i].prodi)