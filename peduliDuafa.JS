//===//...PENGUBAH WARNA...//==//

function warna(){  //untuk membuat fungsi pengubah warna
     var huruf = '0123456789ABCDEF'.split('');  //membuat array dg isi dg isi hexagonal untuk mengacak warna
     var warna = '#';  //pendefinisian variabel warna yang diawali dg tanda # seperti pendefinisian html.
     for (var i=0; i<6; i++){  //perulangan untuk mengambil huruf hexagonal di variabel warna sebanyak 6.
          warna += huruf[Math.round(Math.random()*15)];  //mengacak pengambilan huruf pada ARRAY 'huruf'. dan hasilnya digabung pada var warna.
     }
    document.getElementById("warni").style.background=warna;  //mengganti warna background div dengan id='warni'
    document.getElementById("panel").style.border="4px solid "+warna;  //mengganti warna background div dengan id='warni'
    document.getElementById("pengingatEror").style.border="4px solid "+warna;  //mengganti warna background div dengan id='warni'
    document.getElementsByClassName("kotakSide").style.border="px solid "+warna;  //mengganti warna background div dengan id='warni'

}
setInterval("warna()", 1500);  //mengatur pemanggilan fungsi 'warna' setiap 1,5 detik sekali. atau 1500 mili sekon sekali.


//===//...CHECKER...//===//


var NAMA = false, GENDER = false, EMAIL = false, TELEPON = false, ALAMAT = false, JUMLAH = false, BANK = false, NOREK = false, TGL =false, BLN = false, THN = false, BUKTI = false, PROGRAM=false, BAYAR=false, TUJUAN=false;


//--pengecekan nama--//
function cekNama(){  //pembuatan fungsi pengecekan nama.
    var penentu = true;  //variabel untuk menentukan benar atau tidak.
    var tester=/[a-z]|[A-Z]|\s/;  //variabel untuk mengecek per karakter

    var data = document.getElementById("n").value;  //untuk mengambil isi dari kolom dengan id 'n' dan disimpan ke dalam var data
    data = data.split(''); //menjadikan data sebagai array per karakter
    if(data.length==0){
        document.getElementById('pn').innerHTML = '*wajib diisi'; //mengubah isi html tag div dengan id 'pn' menjadi '*input salah'
        document.getElementById("pn").className='pengingat'; //mengubah warna 
        NAMA = false; //digunakan untuk pengecek
        document.getElementById("n").style.borderColor="yellow";
        document.getElementById("n").style.backgroundColor="#FFFA94";
        return
    }

    var spasi1=false;
    var spasi2=false;
    for(var l = 0; l < data.length; l++){
        if(spasi1 && data[l]==" "){
            spasi2=true;
        }
        if(data[l]==" "){
            spasi1=true;
        }else{
            spasi1=false;
        }
        if(spasi2){
            document.getElementById('pn').innerHTML = '*double spasi'; //mengubah isi html tag div dengan id 'pn' menjadi '*input salah'
            document.getElementById("pn").className='pengingat'; //mengubah warna 
            NAMA = false; //digunakan untuk pengecek
            document.getElementById("n").style.borderColor="#FF0000";
            document.getElementById("n").style.backgroundColor="#FFB6C1";
            return;
        }
    }
    
    for(var i=0; i<data.length; i++){  //melakukan perulangan sebanyak karakter pada variabel data
        if(tester.test(data[i])){  //mengecek apakah karakter merupakan huruf atau angka
        }else{
            penentu=false;  //jika karakter termasuk angka, maka penentu saya ubah false
            break;  //perulangan saya hentikan
        }
    }

    if(penentu==false){  //mengecek penentu apakah bernilai true
        document.getElementById('pn').innerHTML = '*input salah'; //mengubah isi html tag div dengan id 'pn' menjadi '*input salah'
        document.getElementById("pn").className='pengingat'; //mengubah warna 
        NAMA = false; //digunakan untuk pengecek
        document.getElementById("n").style.borderColor="#FF0000";
        document.getElementById("n").style.backgroundColor="#FFB6C1";
    }
    else if(data.length<2){
        document.getElementById('pn').innerHTML = '*minimal 2 karakter'; //mengubah isi html tag div dengan id 'pn' menjadi '*input salah'
        document.getElementById("pn").className='pengingat'; //mengubah warna 
        NAMA = false; //digunakan untuk pengecek
        document.getElementById("n").style.borderColor="yellow";
        document.getElementById("n").style.backgroundColor="#FFFA94";
    }
    else{  //kondisi false dari penentu
        document.getElementById('pn').innerHTML = '*sudah diisi';  //mengubah isi html tag div dengan id 'pn'menjadi '*input benar'
        document.getElementById("pn").className='pengingat2'; //mengubah warna
        NAMA = true; //digunakan untuk mengecek
        document.getElementById("n").style.borderColor="green";
        document.getElementById("n").style.backgroundColor="#90F8AE";
    }
    pengingat();
}

//--pengecekan radio button gender--//
function cekGender(){  //fungsi untuk mengecek radio button gender
    if(document.getElementById("g1").checked){  //mengecek apakah radio button dengan id 'g1' terpilih atau belum
        document.getElementById('pg').innerHTML = '*sudah diisi';  //mengubah isi html dari tag div menjadi '*benar'
        document.getElementById("pg").className='pengingat2'; //mengubah warna 
        GENDER = true; //digunakan untuk mengecek
    }
    else if(document.getElementById("g2").checked){  //mengecek apakah radio button dengan id 'g2' terpilih
        document.getElementById('pg').innerHTML = '*sudah diisi';  //mengubah isi html dari tag div menjadi '*benar'
        document.getElementById("pg").className='pengingat2'; //mengubah warna 
        GENDER = true; //digunakan untuk mengecek
    }else{  //kondisi jika tidak ada yang terpilih
        document.getElementById('pg').innerHTML = '*wajib diisi';    //mengubah isi html dari tag div menjadi '*salah'
        document.getElementById("pg").className='pengingat'; //mengubah warna 
        GENDER = false; //digunakan untuk mengecek
    }
    pengingat();
}

//--pengecekan kolom Email--//
function cekEmail(){
    var data = document.getElementById('e').value;  //mendapatkan nilai dari kolom dengan id 'e' dan disimpan ke dalam var 'data'
    var penentu=0;  //mendefinisikan var penentu dengan nilai true
    var hasilAt=data.split('@');  //menjadikan sisi kanan dan sisi kiri dari karakter '@' menjadi array
    var tester=/[a-z]|[0-9]|[A-Z]/;
    var t='';
    //window.alert("g");
   
    if (hasilAt.length=='2'){  //mengecek apakah panjang array hasil == 2. atau mengecek apakah ada 1 karakter '@'
        if(hasilAt[0]=='' || hasilAt[1]==''){  //mengecek isian array dari 'hasil' atau juga bisa dikatakan sbg mengecek 2 sisi kanan kiri dari @ kosong atau tidak
            penentu=1;
        }else{  //kondisi jika sisi kanan dan kiri @ tidak kosong
            var kananAt=hasilAt[1].split('.');  //mengubah array hasil pada index 1 menjadi array kembali. dengan data teks di samping kanan dan kiri karakter '.'
            if (kananAt.length==2 || kananAt.length==3){  //mengecek ada titik atau tidak di sisi kanan '@'. dengan asuupan minimal ada satu atau dua titik.
                for(var i=0; i<kananAt.length; i++){ //melakukan perulangan sebanyak panjang array dari var kanan.
                    if(kananAt[i]==''){  //mengecek apakah isi dari kanan kosong.
                        penentu=2;
                    }else{
                        t = kananAt[i].split('');
                        for(var k=0; k<t.length; k++){ 
                            if(tester.test(t[k])){}
                            else{
                                penentu=3;
                            }
                        }
                    }
                }
                
            
            }else{
                penentu=4;
                
            }  //mengubah kondisi penentu menjadi false jika tidak ada tanda titik pada sisi kanan atau titik lebih dari 2.

            var kiriAt = hasilAt[0].split('.');  //mengambil isian sisi kiri dari '@'. yang kemudian di jadikan array kembali dari sisi kanan dan kiri titik.
            for(var i=0; i<kiriAt.length; i++){  //melakukan perulangan sebanyak panjang dari array pada var hasil3
                if(kiriAt[i]==''){  //mengcek apakah salah satu sisi dari sisi kanan tanda '.' bernilai kosong
                    penentu=6;
                }else{
                  var hasilUnscor = kiriAt[i].split('_');
                    for(var j=0; j<hasilUnscor.length; j++){
                        if(hasilUnscor[j]==""){
                            penentu=7;
                        }else{
                            t = hasilUnscor[j].split("");
                            for(var k=0; k<t.length; k++){
                                if(tester.test(t[k])){}
                                else{
                                   penentu=8;
                                }
                            }
                        }
                    }
                }
            }
		}
	}else{
        penentu=9;
	}

    if(data==''){penentu=10;}
    //window.alert('bara');
    
    if(penentu==0){  //mengecek apakah penentu bernilai true
        document.getElementById('a').innerHTML = '*sudah diisi';  //mengubah isi html dari tag div dengan id 'a' menjadi '*benar'
        document.getElementById("a").className='pengingat2'; //mengubah warna 
        EMAIL = true; //digunakan untuk mengecek
        document.getElementById("e").style.borderColor="green";
        document.getElementById("e").style.backgroundColor="#90F8AE";
    }else{  //kondisi jika penentu bernilai false
        if(penentu==10){
            document.getElementById('a').innerHTML = '*wajib diisi';  //mengubah isi html dari tag div dengan id 'a' menjadi '*salah'
            document.getElementById("e").style.borderColor="yellow";
            document.getElementById("e").style.backgroundColor="#FFFA94";
        }else{
            document.getElementById('a').innerHTML = '*Input salah';  //mengubah isi html dari tag div dengan id 'a' menjadi '*salah'            
            document.getElementById("e").style.borderColor="#FF0000";
            document.getElementById("e").style.backgroundColor="#FFB6C1";
        }
        document.getElementById("a").className='pengingat'; //mengubah warna 
        EMAIL = false; //digunakan untuk mengecek
	}
    pengingat();
}

//--pengecekan telepon--//
function validateTel(){  //fungsi pengecekan nilai pada kolom telepon
    var data = document.getElementById('hp').value;  //mengambil isi dari kolom dengan id 'hp' dan disimpan ke dalam var data
	var tester1 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/g;  //menentukan jenis karakter yang benar. yaitu angka sebanyak 12 karakter
    var tester2 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/g;
	var tester3 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/g;  //menentukan jenis karakter yang benar. yaitu angka sebanyak 12 karakter
	var tester4 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/g;  //menentukan jenis karakter yang benar. yaitu angka sebanyak 12 karakter
    var tester5 = /[0-9]/;
    
    var penentu1 = tester1.test(data);  //mengecek data apakah sesuai dengan aturan atau tidak. dan disimpan ke dalam var penentu
    var penentu2 = tester2.test(data);  //mengecek data apakah sesuai dengan aturan atau tidak. dan disimpan ke dalam var penentu
    var penentu3 = tester3.test(data);  //mengecek data apakah sesuai dengan aturan atau tidak. dan disimpan ke dalam var penentu
    var penentu4 = tester4.test(data);  //mengecek data apakah sesuai dengan aturan atau tidak. dan disimpan ke dalam var penentu
    var penentu = false;
        
    if((penentu1 || penentu2) || (penentu3 || penentu4)){ //mengecek apakah penentu bernilai true atau tidak
       document.getElementById('php').innerHTML = '*sudah diisi';  //mengganti isi dari tag div dengan id 'php' menjadi '*benar'
       document.getElementById("php").className='pengingat2'; //mengubah warna
       TELEPON = true; //digunakan untuk mengecek

       document.getElementById("hp").style.borderColor="green";
       document.getElementById("hp").style.backgroundColor="#90F8AE";
    }
    else{  //kondisi jika  penentu bernilai salah
        if(data==""){
            document.getElementById('php').innerHTML = '*wajib diisi';//mengganti isi dari tag div dengan id 'php' menjadi '*salah'}
            document.getElementById("hp").style.borderColor="yellow";
            document.getElementById("hp").style.backgroundColor="#FFFA94";
        }
        else{
            var karakter = data.split('');
            for(var i=0; i<karakter.length; i++){
                if(tester5.test(karakter[i])){}
                else{
                    penentu=true;
                    break;
                }
            }
            if(penentu){
                document.getElementById('php').innerHTML = '*input salah';  //mengganti isi dari tag div dengan id 'php' menjadi '*salah'
                document.getElementById("hp").style.borderColor="#FF0000";
                document.getElementById("hp").style.backgroundColor="#FFB6C1";
            }
            else if(karakter.length<7){
                document.getElementById('php').innerHTML = '*min 7 char untuk no. telp';//mengganti isi dari tag div dengan id 'php' menjadi '*salah'
                document.getElementById("hp").style.borderColor="yellow";
                document.getElementById("hp").style.backgroundColor="#FFFA94";
            }else if(karakter.length<12){
                document.getElementById('php').innerHTML = '*min 11/12/13 char untuk no. hp';//mengganti isi dari tag div dengan id 'php' menjadi '*salah'
                document.getElementById("hp").style.borderColor="yellow";
                document.getElementById("hp").style.backgroundColor="#FFFA94";
            }else{
                document.getElementById('php').innerHTML = '*min 7/11/12/13 char untuk no. hp';//mengganti isi dari tag div dengan id 'php' menjadi '*salah'
                document.getElementById("hp").style.borderColor="yellow";
                document.getElementById("hp").style.backgroundColor="#FFFA94";
            }
	    }
        document.getElementById("php").className='pengingat'; //mengubah warna 
        TELEPON = false; //digunakan untuk mengecek
    }
    pengingat();
}

//--pengecekan alamat--//
function validateAlmt(){  //fungsi untuk pengecekan validasi kolom alamat
	var penentu = 0;  //pendefinisian var penentu dengan nilai true
	var data = document.getElementById('almt').value;  //mengambil data dari kolom dengan id 'almt'.
	data = data.split('');  //mengganti nilai data menjadi array per karakter
    var tester = /[0-9]|[a-z]|[A-Z]|\s|[.,-]/;


    if(data.length==0){penentu=2;}
    else if(data.length<5){penentu=3;}

    for(var i=0; i<data.length; i++){
        if(tester.test(data[i])){}
        else{
            penentu=1;            
        }        
    }

    var spasi1=false;
    var spasi2=false;
    for(var l = 0; l < data.length; l++){
        if(spasi1 && data[l]==" "){
            spasi2=true;
        }
        if(data[l]==" "){
            spasi1=true;
        }else{
            spasi1=false;
        }
        if(spasi2){
            document.getElementById('palmt').innerHTML = '*double spasi'; //mengubah isi html tag div dengan id 'pn' menjadi '*input salah'
            document.getElementById("palmt").className='pengingat'; //mengubah warna 
            ALAMAT = false; //digunakan untuk pengecek
            document.getElementById("almt").style.borderColor="#FF0000";
            document.getElementById("almt").style.backgroundColor="#FFB6C1";
            return;
        }
    }

    if(penentu==0){
        document.getElementById('palmt').innerHTML = '*sudah diisi';  //mengubah is tag dengan id 'palmt' mejadi '*benar'
        document.getElementById("palmt").className='pengingat2'; //mengubah warna 
        ALAMAT = true; //digunakan untuk mengecek
        document.getElementById("almt").style.borderColor="green";
        document.getElementById("almt").style.backgroundColor="#90F8AE";
	} else { //kondisi dimana karakter dari var data lebih besar dari 5
        if(penentu==2){
            document.getElementById('palmt').innerHTML = '*wajib diisi';  //mengubah is tag dengan id 'palmt' mejadi '*salah'
            document.getElementById("almt").style.borderColor="yellow";
            document.getElementById("almt").style.backgroundColor="#FFFA94";
        }else if(penentu==1){
            document.getElementById('palmt').innerHTML = '*input salah';  //mengubah is tag dengan id 'palmt' mejadi '*salah'
            document.getElementById("almt").style.borderColor="#FF0000";
            document.getElementById("almt").style.backgroundColor="#FFB6C1";
        }else if(penentu==3){
            document.getElementById('palmt').innerHTML = '*minimal input 6 karakter';  //mengubah is tag dengan id 'palmt' mejadi '*salah'
            document.getElementById("almt").style.borderColor="yellow";
            document.getElementById("almt").style.backgroundColor="#FFFA94";
        }
        document.getElementById("palmt").className='pengingat'; //mengubah warna 
        ALAMAT = false; //digunakan untuk mengecek
	}
    pengingat();
}

function cekJumlah(){
    var penentu = false;  //variabel untuk menentukan benar atau tidak.
    var tester= /[0-9]/;  //variabel untuk mengecek per karakter

    var data = document.getElementById("jumlah").value;  //untuk mengambil isi dari kolom dengan id 'jumlah' dan disimpan ke dalam var data
    data = data.split(''); //menjadikan data sebagai array per karakter

    for(var i=0; i<data.length; i++){  //melakukan perulangan sebanyak karakter pada variabel data
        if(tester.test(data[i])){  //mengecek apakah karakter merupakan huruf atau angka
        }else{         
            penentu=true;  //jika karakter termasuk angka, maka penentu saya ubah false
            break;  //perulangan saya hentikan
        }
    }

    if(penentu){  //mengecek penentu apakah bernilai true
        document.getElementById('pJumlah').innerHTML = '*input salah'; //mengubah isi html tag div dengan id 'bA' menjadi '*input salah'
        document.getElementById("pJumlah").className='pengingat'; //mengubah warna 
        JUMLAH = false; //digunakan untuk mengecek
        document.getElementById("jumlah").style.borderColor="#FF0000";
        document.getElementById("jumlah").style.backgroundColor="#FFB6C1";
    }
    else if(data.length<3){
        document.getElementById('pJumlah').innerHTML = '*minimal 3 karakter'; //mengubah isi html tag div dengan id 'bA' menjadi '*input salah'
        document.getElementById("pJumlah").className='pengingat'; //mengubah warna 
        JUMLAH = false; //digunakan untuk mengecek
        if(data.length==0){
            document.getElementById('pJumlah').innerHTML = '*wajib diisi'; //mengubah isi html tag div dengan id 'bA' menjadi '*input salah'
        }
        document.getElementById("jumlah").style.borderColor="yellow";
        document.getElementById("jumlah").style.backgroundColor="#FFFA94";
    }
    else{  //kondisi false dari penentu
        document.getElementById('pJumlah').innerHTML = '*sudah diisi';  //mengubah isi html tag div dengan id 'bA' menjadi '*input benar'
        document.getElementById("pJumlah").className='pengingat2'; //mengubah warna 
        JUMLAH = true; //digunakan untuk mengecek

        document.getElementById("jumlah").style.borderColor="green";
        document.getElementById("jumlah").style.backgroundColor="#90F8AE";
    }
    pengingat();
}

function validateBat(){
    var penentu = false;  //variabel untuk menentukan benar atau tidak.
    var tester= /[a-z]|[A-Z]|\s/;  //variabel untuk mengecek per karakter

    var data = document.getElementById("bankAT").value;  //untuk mengambil isi dari kolom dengan id 'bA' dan disimpan ke dalam var data
    data = data.split(''); //menjadikan data sebagai array per karakter

    for(var i=0; i<data.length; i++){  //melakukan perulangan sebanyak karakter pada variabel data
        if(tester.test(data[i])){  //mengecek apakah karakter merupakan huruf atau angka
        }else{                
            penentu=true;  //jika karakter termasuk angka, maka penentu saya ubah false
            break;  //perulangan saya hentikan
        }
    }

    var spasi1=false;
    var spasi2=false;
    for(var l = 0; l < data.length; l++){
        if(spasi1 && data[l]==" "){
            spasi2=true;
        }
        if(data[l]==" "){
            spasi1=true;
        }else{
            spasi1=false;
        }
        if(spasi2){
            document.getElementById('bA').innerHTML = '*double spasi'; //mengubah isi html tag div dengan id 'pn' menjadi '*input salah'
            document.getElementById("bA").className='pengingat'; //mengubah warna 
            BANK = false; //digunakan untuk pengecek
            document.getElementById("bankAT").style.borderColor="#FF0000";
            document.getElementById("bankAT").style.backgroundColor="#FFB6C1";
            return;
        }
    }

    if(penentu){  //mengecek penentu apakah bernilai true
        document.getElementById('bA').innerHTML = '*input salah'; //mengubah isi html tag div dengan id 'bA' menjadi '*input salah'
        document.getElementById("bA").className='pengingat'; //mengubah warna 
        BANK = false; //digunakan untuk mengecek
        document.getElementById("bankAT").style.borderColor="#FF0000";
        document.getElementById("bankAT").style.backgroundColor="#FFB6C1";
    }
    else if(data.length<3){  //memasitkan jika panjang karakter lebih dari 1 huruf
        document.getElementById('bA').innerHTML = '*minimal 3 karakter'; //mengubah isi html tag div dengan id 'bA' menjadi '*input salah'
        if(data.length==0){
            document.getElementById('bA').innerHTML = '*wajib diisi'; //mengubah isi html tag div dengan id 'bA' menjadi '*input salah'
        }
        document.getElementById("bA").className='pengingat'; //mengubah warna 
        BANK = false; //digunakan untuk mengecek        

        document.getElementById("bankAT").style.borderColor="yellow";
        document.getElementById("bankAT").style.backgroundColor="#FFFA94";
    }
    else{  //kondisi false dari penentu
        document.getElementById('bA').innerHTML = '*sudah diisi';  //mengubah isi html tag div dengan id 'bA' menjadi '*input benar'
        document.getElementById("bA").className='pengingat2'; //mengubah warna 
        BANK = true; //digunakan untuk mengecek

        document.getElementById("bankAT").style.borderColor="green";
        document.getElementById("bankAT").style.backgroundColor="#90F8AE";
    }
    pengingat();
}

function cekNorek(){
    var penentu = false;  //variabel untuk menentukan benar atau tidak.
    var tester=/[0-9]/;  //variabel untuk mengecek per karakter

    var data = document.getElementById("noRek").value;  //untuk mengambil isi dari kolom dengan id 'noRek' dan disimpan ke dalam var data
    data = data.split(''); //menjadikan data sebagai array per karakter
    for(var i=0; i<data.length; i++){  //melakukan perulangan sebanyak karakter pada variabel data
        if(tester.test(data[i])){  //mengecek apakah karakter merupakan huruf atau angka
        }else{
            penentu=true;  //jika karakter termasuk angka, maka penentu saya ubah false
            break;  //perulangan saya hentikan
        }
    }

    if(penentu){  //mengecek penentu apakah bernilai true
        document.getElementById('pRekening').innerHTML = '*input salah'; //mengubah isi html tag div dengan id 'pRekening' menjadi '*input salah'
        document.getElementById("pRekening").className='pengingat'; //mengubah warna 
        NOREK = false; //digunakan untuk mengecek
        document.getElementById("noRek").style.borderColor="#FF0000";
        document.getElementById("noRek").style.backgroundColor="#FFB6C1";
    }
    else if(data.length<4){  //memasitkan jika panjang karakter lebih dari 1 huruf
        document.getElementById('pRekening').innerHTML = '*min  4 char'; //mengubah isi html tag div dengan id 'pRekening' menjadi '*input salah'
        if(data.length==0){
            document.getElementById('pRekening').innerHTML = '*wajib diisi'; //mengubah isi html tag div dengan id 'pRekening' menjadi '*input salah'
        }
        document.getElementById("pRekening").className='pengingat'; //mengubah warna 
        NOREK = false; //digunakan untuk mengecek

        document.getElementById("noRek").style.borderColor="yellow";
        document.getElementById("noRek").style.backgroundColor="#FFFA94";
    }
    else{  //kondisi false dari penentu
        document.getElementById('pRekening').innerHTML = '*sudah diisi';  //mengubah isi html tag div dengan id 'pRekening' menjadi '*input benar'
        document.getElementById("pRekening").className='pengingat2'; //mengubah warna 
        NOREK = true; //digunakan untuk mengecek
        document.getElementById("noRek").style.borderColor="green";
        document.getElementById("noRek").style.backgroundColor="#90F8AE";
    }
    pengingat();
}

//--pengecekan tanggal--//
var akses=true;
var sumber=0;
function cekTanggal(){  //fungsi untuk mengecek kolom tanggal
    var data = document.getElementById("tg").value;  //mengambil data dari kolom dengan id 'tg'
    var bulan = document.getElementById("bl").value;    
    if(bulan=='02'){
        var tester = /^([1-9]|[12][0-9])$/g;  //menentukan kententuan atau regex dari tanggal
    }else{
        var tester = /^([1-9]|[12][0-9]|3[01])$/g;  //menentukan kententuan atau regex dari tanggal
    }
    var penentu = tester.test(data);  //mengetes isi dari var data apakah sesuai atau tidak lalu disimpan ke dalam var penentu
    if(penentu){  //mengecek apakah nilai var penentu bernilai true
        document.getElementById('ptg').innerHTML = '*sudah';    //mengubah isi html dari tag div dengan id 'ptg' menjadi '*benar'
        document.getElementById("ptg").className='pengingat2'; //mengubah warna 
        TGL = true; //digunakan untuk mengecek
        document.getElementById("tg").style.borderColor="green";
        document.getElementById("tg").style.backgroundColor="#90F8AE";
    }else{  //kondisi jika penentu bernilai salah atau false
        if(data==''){
            document.getElementById('ptg').innerHTML = '*wajib';

            document.getElementById("tg").style.borderColor="yellow";
            document.getElementById("tg").style.backgroundColor="#FFFA94";
        }else{
            document.getElementById('ptg').innerHTML = '*salah';    //mengubah isi html dari tag div dengan id 'ptg' menjadi '*salah'
            document.getElementById("tg").style.borderColor="#FF0000";
            document.getElementById("tg").style.backgroundColor="#FFB6C1";
        }
        document.getElementById("ptg").className='pengingat'; //mengubah warna 
        TGL = false; //digunakan untuk mengecek
    }
    pengingat();
    sumber=1;
    if(akses){
        cekCocokTgl();
    }else{
        akses=true;
    }
    
}

//--pengecekan tanggal--//
function cekBulan(){   //fungsi untuk mengecek kolom bulan
    var data = document.getElementById("bl").value;  //mengambil isi dari kolom dengan id 'bl'
    var tester = /^([1-9]|1[012])$/g;  //menentukan regex atau ketentuan format bulan
    var penentu = tester.test(data);  //mengecek apakah isi data sesuai dengan format
    if(penentu){  //mengecek apakah penentu bernilai true
        document.getElementById('pbl').innerHTML = '*sudah';  //mengubah isi html dari tag div dengan id 'pbl' menjadi '*benar'
        document.getElementById("pbl").className='pengingat2'; //mengubah warna 
        document.getElementById("bl").style.borderColor="green";
        document.getElementById("bl").style.backgroundColor="#90F8AE";
        BLN = true; //digunakan untuk mengecek
    }else{  //kondisi jika penentu bernilai false
        if(data==''){
            document.getElementById('pbl').innerHTML = '*wajib';
            document.getElementById("bl").style.borderColor="yellow";
            document.getElementById("bl").style.backgroundColor="#FFFA94";
        }else{
            document.getElementById('pbl').innerHTML = '*salah';    //mengubah isi html dari tag div dengan id 'ptg' menjadi '*salah'
            document.getElementById("bl").style.borderColor="#FF0000";
            document.getElementById("bl").style.backgroundColor="#FFB6C1";
        }
        document.getElementById("pbl").className='pengingat'; //mengubah warna 
        BLN = false; //digunakan untuk mengecek
    }
    //cekTanggal();
    pengingat();
    sumber=2;
    if(akses){
        cekCocokTgl();
    }else{
        akses=true;
    }
}

//--pengecekan tahun--//
function cekTahun(){  //fungsi untuk mengecek kolom tahun
    var data = document.getElementById("th").value;  //mengambil isi dari kolom dengan id 'th' dan disimpan ke dalam var data
    var tester = /^((18|19|20)\d\d)$/g;  //menentukan regex dari tahun
    var penentu = tester.test(data);  //mengecek apakah data sesuai dengan regex atau tidak
    if(penentu){  //mengecek apakah penentu bernilai true
        document.getElementById('pth').innerHTML = '*sudah';  //mengubah isi html dari tag div dengan id 'pth' menjadi '*benar'
        document.getElementById("pth").className='pengingat2'; //mengubah warna 
        THN = true; //digunakan untuk mengecek

        document.getElementById("th").style.borderColor="green";
        document.getElementById("th").style.backgroundColor="#90F8AE";
    }else{  //kondisi jika penentu bernilai false
        if(data==''){
            document.getElementById('pth').innerHTML = '*wajib';
            document.getElementById("th").style.borderColor="yellow";
            document.getElementById("th").style.backgroundColor="#FFFA94";
        }else{
            document.getElementById('pth').innerHTML = '*salah';    //mengubah isi html dari tag div dengan id 'ptg' menjadi '*salah'
            document.getElementById("th").style.borderColor="#FF0000";
            document.getElementById("th").style.backgroundColor="#FFB6C1";
        }
        document.getElementById("pth").className='pengingat'; //mengubah warna 
        THN = false; //digunakan untuk mengecek
    }
    sumber=3;
    if(akses){
        cekCocokTgl();
    }else{
        akses=true;
    }
    pengingat();
}

function cekCocokTgl(){
    if((TGL && BLN) && THN){
        var date = new Date();
        var tgl = document.getElementById("tg").value;
        var bln = document.getElementById("bl").value;
        var thn = document.getElementById("th").value;
        //window.alert(date.getDay()+"-"+date.getMonth()+"-"+date.getFullYear());
        if(thn == date.getFullYear()){
            if(bln == date.getMonth()){
                if(tgl > date.getDay()){
                    document.getElementById('ptg').innerHTML = 'tanggal'; 
                    document.getElementById('pbl').innerHTML = ' tidak';
                    document.getElementById('pth').innerHTML = 'boleh melebihi hari ini';

                    document.getElementById("ptg").className='pengingat'; //mengubah warna 
                    document.getElementById("pbl").className='pengingat'; //mengubah warna 
                    document.getElementById("pth").className='pengingat'; //mengubah warna
                    TGL = false;
                    BLN = false;
                    THN = false; 

                    document.getElementById("tg").style.borderColor="#FF0000";
                    document.getElementById("tg").style.backgroundColor="#FFB6C1";
                    document.getElementById("bl").style.borderColor="#FF0000";
                    document.getElementById("bl").style.backgroundColor="#FFB6C1";
                    document.getElementById("th").style.borderColor="#FF0000";
                    document.getElementById("th").style.backgroundColor="#FFB6C1";
                }
            }
            else if(bln > date.getMonth()){
                document.getElementById('ptg').innerHTML = 'bulan';
                document.getElementById('pbl').innerHTML = ' tidak';
                document.getElementById('pth').innerHTML = 'boleh melebihi hari ini';

                document.getElementById("ptg").className='pengingat'; //mengubah warna 
                document.getElementById("pbl").className='pengingat'; //mengubah warna 
                document.getElementById("pth").className='pengingat'; //mengubah warna
                TGL = false;
                BLN = false;
                THN = false;

                document.getElementById("tg").style.borderColor="#FF0000";
                document.getElementById("tg").style.backgroundColor="#FFB6C1";
                document.getElementById("bl").style.borderColor="#FF0000";
                document.getElementById("bl").style.backgroundColor="#FFB6C1";
                document.getElementById("th").style.borderColor="#FF0000";
                document.getElementById("th").style.backgroundColor="#FFB6C1";
            }
        }
        else if(thn > date.getFullYear()){
            document.getElementById('ptg').innerHTML = '&nbsp;tahun';
            document.getElementById('pbl').innerHTML = ' tidak';
            document.getElementById('pth').innerHTML = 'boleh melebihi hari ini';

            document.getElementById("ptg").className='pengingat'; //mengubah warna 
            document.getElementById("pbl").className='pengingat'; //mengubah warna 
            document.getElementById("pth").className='pengingat'; //mengubah warna
            TGL = false;
            BLN = false;
            THN = false;

            document.getElementById("tg").style.borderColor="#FF0000";
            document.getElementById("tg").style.backgroundColor="#FFB6C1";
            document.getElementById("bl").style.borderColor="#FF0000";
            document.getElementById("bl").style.backgroundColor="#FFB6C1";
            document.getElementById("th").style.borderColor="#FF0000";
            document.getElementById("th").style.backgroundColor="#FFB6C1";
        }
    }else{
        akses=false;
        cekTanggal();
        akses=false;
        cekBulan();
        akses=false;
        cekTahun();
    }
}

function gbrBukti(){
    var input = document.getElementById("bukti"); //digunakan untuk mengambil inputan
    var nilai = document.getElementById("bukti").value; //digunakan untuk mengambil value
    var ekstensi = ['jpg', 'jpeg', 'png'];
    
    if(input.files && input.files[0]){
        var getEkstensi = input.files[0].name.split('.').pop().toLowerCase();
        var benarAtauTidak = ekstensi.indexOf(getEkstensi)>-1;
        if (benarAtauTidak){
            var fReader = new FileReader(); //digunakan memanggil fungsi
            fReader.readAsDataURL(input.files[0]); //digunakan untuk menetukan lokasi file
            fReader.onloadend = function(event){ //digunakan untuk ketika load selesai maka dia akan memproses
                var img = document.getElementById("gb"); //mendapatkan gambar
                    img.src = event.target.result; //mengganti lokasi gambar menjadi data yg dipilih
            }

            document.getElementById('pBukti').innerHTML = '*upload berhasil dilakukan';  //mengubah isi html dari tag div dengan id 'pth' menjadi '*benar'
            document.getElementById("pBukti").className='pengingat2'; //mengubah warna 
            BUKTI = true; //digunakan untuk pengecekan
            document.getElementById("bukti").style.borderColor="green";
            document.getElementById("bukti").style.backgroundColor="#90F8AE";
        }else{
            document.getElementById('pBukti').innerHTML = '*file harus berupa gambar (jpg, jpeg, png)';  //mengubah isi html dari tag div dengan id 'pth' menjadi '*salah'
            document.getElementById("pBukti").className='pengingat'; //mengubah warna 
            BUKTI = false; //digunakan untuk pengecekan
            document.getElementById("bukti").style.borderColor="#FF0000";
            document.getElementById("bukti").style.backgroundColor="#FFB6C1";
            var img = document.getElementById("gb"); //mendapatkan gambar
            img.src = ""; //mengganti lokasi gambar menjadi data yg dipilih
        }
    }
    
    pengingat();
}


var hideAtauShow=false; //variabel untuk hide and show

function animateLeft(obj, from, to){ //digunakan untuk membuat fungsi animasi yg ada di sebelah kiri
    if(hideAtauShow){ // jika dia di memenuhi kondisi
        if(from <= to){ //untuk mengecek apakah nilai form kurang dari to
            var box = obj; // membuat var box sebagai objek
            box.style.marginLeft = from + "px"; //untuk mengubah margin
            setTimeout(function(){animateLeft(obj, from + 7, to);}, 25); //untuk mengeset waktunya
	    }
    }else{
        if((from >= to)==false){ //untuk mengecek apakah form lebih dari to
            var box = obj; //membuat var box sebagai objek
            box.style.marginLeft = to + "px"; // untuk menambah margin
            setTimeout(function(){animateLeft(obj, from, to - 7);}, 25); //untuk mengeset waktunya
	    }
    }
}

function animateMe() { //fungsi baru yaitu animated
    if(hideAtauShow){ //jika dia memenuhi kondisi
        hideAtauShow=false; // nilai variabel berubah
        document.getElementById("slideSamping").innerHTML="&raquo;"; //mengubah isi html
	}
    else{
        hideAtauShow=true; //nilai variabel berubah
        document.getElementById("slideSamping").innerHTML="&laquo;"; //mengubah isi html
	}
	animateLeft(document.getElementById('panel'), -322, -177); //digunakan untuk memanggil fungsi diatas
    animateLeft(document.getElementById('slideSamping'), -2, 146); //digunakan untuk memanggil fungsi diatas
}


function cekProgram(){ //fungsi untuk mengecek pilihan program
    var data = document.getElementById('program').value; //untuk mengambil data dari pilihan dari id 
    if(data==0){  //mengecek apakah value nya bernilai 0
        document.getElementById('prg').innerHTML="*wajib diisi";  //mengubah isi html nya menjadi ""silhakan isi data"
        document.getElementById("prg").className='pengingat';
        PROGRAM = false;  //mengubah nilai var PROGRAM menjadi false

        document.getElementById("program").style.borderColor="yellow";
        document.getElementById("program").style.backgroundColor="#FFFA94";

    }else{  //kondisi else jika var data tidak sama dengan 0
        document.getElementById('prg').innerHTML="*sudah diisi";    //mengubah isi html nya menjadi "data sudah di pilih
        document.getElementById("prg").className='pengingat2';
        PROGRAM = true;  //mengubah nilai variabel PROGRAM menjadi false

        document.getElementById("program").style.borderColor="green";
        document.getElementById("program").style.backgroundColor="#90F8AE";
    }
    pengingat();
}


function cekBayar(){ //fungsi untuk mengecek pilihan program
    var data = document.getElementById('bayar').value; //untuk mengambil data dari pilihan dari id 
    if(data==0){  //mengecek apakah value nya bernilai 0
        document.getElementById('byr').innerHTML="*wajib diisi";  //mengubah isi html nya menjadi ""silhakan isi data"
        document.getElementById("byr").className='pengingat';
        BAYAR = false;  //mengubah nilai var PROGRAM menjadi false

        document.getElementById("bayar").style.borderColor="yellow";
        document.getElementById("bayar").style.backgroundColor="#FFFA94";
    }else{  //kondisi else jika var data tidak sama dengan 0
        document.getElementById('byr').innerHTML="*sudah diisi";    //mengubah isi html nya menjadi "data sudah di pilih
        document.getElementById("byr").className='pengingat2';
        BAYAR = true;  //mengubah nilai variabel PROGRAM menjadi false

        document.getElementById("bayar").style.borderColor="green";
        document.getElementById("bayar").style.backgroundColor="#90F8AE";
    }
    pengingat();
}

function cekTujuan(){ //fungsi untuk mengecek pilihan program
    var data = document.getElementById('bTujuan').value; //untuk mengambil data dari pilihan dari id 
    if(data==0){  //mengecek apakah value nya bernilai 0
        document.getElementById('tjn').innerHTML="*wajib diisi";  //mengubah isi html nya menjadi ""silhakan isi data"
        document.getElementById("tjn").className='pengingat';
        TUJUAN = false;  //mengubah nilai var PROGRAM menjadi false

        document.getElementById("bTujuan").style.borderColor="yellow";
        document.getElementById("bTujuan").style.backgroundColor="#FFFA94";
    }else{  //kondisi else jika var data tidak sama dengan 0
        document.getElementById('tjn').innerHTML="*sudah diisi";    //mengubah isi html nya menjadi "data sudah di pilih
        document.getElementById("tjn").className='pengingat2';
        TUJUAN = true;  //mengubah nilai variabel PROGRAM menjadi false

        document.getElementById("bTujuan").style.borderColor="green";
        document.getElementById("bTujuan").style.backgroundColor="#90F8AE";
    }
    pengingat();
}

function pengingat(){
    var isiPengingat = ''; //digunakan untuk membuat variabel pengingat
    if (NAMA==false){ //jika nama salah
        isiPengingat += '<li>Nama</li> '; //digunakan untuk menampung nama jika belum diisi
    }
    if(GENDER==false){ //jika gender salah
        isiPengingat += '<li>Gender</li> '; //digunakan untuk menampung gender jika belum diisi
    }
    if(EMAIL==false){ //jika email salah
        isiPengingat += '<li>Email</li> '; //digunakan untuk menampung email jika belum diisi
    }
    if(TELEPON==false){ //jika telepon salah
        isiPengingat += '<li>No. Telepon</li> '; //digunakan untuk menampung telepon jika belum diisi
    }
    if(ALAMAT==false){ //jika alamat salah
        isiPengingat += '<li>Alamat</li> '; //digunakan untuk menampung alamat jika belum diisi
    }
    if(JUMLAH==false){ //jika jumlah salah
        isiPengingat += '<li>Jumlah Donasi</li> '; //digunakan untuk menampung jumlah jika belum diisi
    }
    if(PROGRAM==false){ //jika program salah
        isiPengingat += '<li>Program Donasi</li> '; //digunakan untuk menampung program jika belum diisi
    }
    if(TUJUAN==false){ //jika tujuan salah
        isiPengingat += '<li>Tujuan Transfer</li> '; //digunakan untuk menampung tujuan jika belum diisi
    }
    if(BAYAR==false){ //jika bayar salah
        isiPengingat += '<li>Jenis Pembayaran</li> '; //digunakan untuk menampung bayar jika belum diisi
    }
    if(NOREK==false){ //jika norek salah
        isiPengingat += '<li>No. Rekening</li> '; //digunakan untuk menampung norek jika belum diisi
    }
    if(BANK==false){ //jika bank salah
        isiPengingat += '<li>Bank asal Transfer</li> '; //digunakan untuk menampung bank asal transfer jika belum diisi
    }
    if(TGL==false){ //jika tanggal salah
        isiPengingat += '<li>Tanggal</li> '; //digunakan untuk menampung tanggal jika belum diisi
    }
    if(BLN==false){ //jika bulan salah
        isiPengingat += '<li>Bulan</li> '; //digunakan untuk menampung bulan jika belum diisi
    }
    if(THN==false){ //jika tahun salah
        isiPengingat += '<li>Tahun</li> '; //digunakan untuk menampung tahun jika belum diisi
    }
    if(BUKTI==false){ //jika bukti salah
        isiPengingat += '<li>Foto Bukti</li> '; //digunakan untuk menampung foto bukti jika belum diisi
    }
    
    if(isiPengingat==""){
        document.getElementById('pengingatEror').innerHTML="<h3>Selamat dan terimakasih, form telah anda isi dengan lengkap. :)</h3>"; //menampilkan pesan eror dibawah
    }else{
        document.getElementById('pengingatEror').innerHTML="<h3>Form yang belum di isi dengan benar : </h3><ol>"+isiPengingat+"</ol>"; //menampilkan pesan eror dibawah\
    }
}

function validasi(){
    cekNama(); //digunakan untuk memanggil fungsi cek nama
    cekGender(); //digunakan untuk memanggil fungsi cek gender
    cekEmail(); //digunakan untuk memanggil fungsi cek email
    validateTel(); //digunakan untuk memanggil fungsi validate tel
    validateAlmt(); //digunakan untuk memanggil fungsi validate alamat
    cekJumlah(); //digunakan untuk memanggil fungsi cek jumlah
    cekTanggal(); //digunakan untuk memanggil fungsi cek tanggal
    cekBulan(); //digunakan untuk memanggil fungsi cek bulan
    cekTahun(); //digunakan untuk memanggil fungsi cek tahun
    validateBat(); //digunakan untuk memanggil fungsi validati bat
    cekNorek(); //digunakan untuk memanggil fungsi no rekening
    cekProgram(); //digunakan untuk memanggil fungsi cek program
    cekBayar(); //digunakan untuk memanggil fungsi cek bayar
    cekTujuan(); //digunakan untuk memanggil fungsi tujuan


    if (NAMA==false){ 
        document.getElementById('n').focus(); //ketika salah dia akan ke elemen dengan id n
        pengingat();
    }
    else if(GENDER==false){
        document.getElementById('g1').focus(); //ketika salah dia akan ke elemen dengan id gender
        pengingat();
    }
    else if(EMAIL==false){
        document.getElementById('e').focus(); //ketika salah dia akan ke elemen dengan id email
        pengingat();
    }
    else if(TELEPON==false){
        document.getElementById('hp').focus(); //ketika salah dia akan ke elemen dengan id telepon
        pengingat();
    }
    else if(ALAMAT==false){
        document.getElementById('almt').focus(); //ketika salah dia akan ke elemen dengan id alamat
        pengingat();
    }
    else if(JUMLAH==false){
        document.getElementById('jumlah').focus(); //ketika salah dia akan ke elemen dengan id jumlah
        pengingat();
    }
    else if(PROGRAM==false){
        document.getElementById('program').focus(); //ketika salah dia akan ke elemen dengan id program
        pengingat();
    }
    else if(TUJUAN==false){
        document.getElementById('bTujuan').focus(); //ketika salah dia akan ke elemen dengan id tujuan
        pengingat();
    }
    else if(BAYAR==false){
        document.getElementById('bayar').focus(); //ketika salah dia akan ke elemen dengan id bayar
        pengingat();
    }
    else if(NOREK==false){
        document.getElementById('noRek').focus(); //ketika salah dia akan ke elemen dengan id norek
        pengingat();
    }
    else if(BANK==false){
        document.getElementById('bankAT').focus(); //ketika salah dia akan ke elemen dengan id bank
        pengingat();
    }
    else if(TGL==false){
        document.getElementById('tg').focus(); //ketika salah dia akan ke elemen dengan id tgl
        pengingat();
    }
    else if(BLN==false){
        document.getElementById('bl').focus(); //ketika salah dia akan ke elemen dengan id bln
        pengingat();
    }
    else if(THN==false){
        document.getElementById('th').focus(); //ketika salah dia akan ke elemen dengan id thn
        pengingat();
    }
    else if(BUKTI==false){ 
        document.getElementById('bukti').focus(); //ketika salah dia akan ke elemen dengan id bukti
        pengingat();
    }
    else{
        document.getElementById('konten').innerHTML = "<div style='background-color:#ddffdd; text-align:center;' id='berhasil'><h2>Selamat...!!!</h2> Confirmasi Donasi anda telah Berhasil dilakukan..<br>Terimakasih kami sampaikan.. semoga di balas oleh yang maha kuasa..<br><a href='./index.html'>Kembali ke home</a><br><br></div>";
        // jika dia benar maka akan membuka halaman baru yang berisi ucapan selamat        
        window.scrollTo(0,0);
    }


}

