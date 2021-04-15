//function
function hitungNilai (nilai1, nilai2){
    return nilai1 + nilai2
    } 
    
    const hasil = hitungNilai(14, 8)
    //console.log(hasil)
    
    const buatNasi = (beras, air) =>{
    if(beras){
        console.log('Beras OK')
    }else{
        console.log('Mohon masukan beras')
    }
    if (air){
        console.log('Air OK')
    }else{
        console.log('Mohon masukan air')
    }
    }
    
    buatNasi('beras', 'air')