// const containerTag = document.getElementsByClassName('container') //panggil dengan class
// const containerOlahraga = document.getElementById('list_olahraga') //panggil dengan id
// const liOlahraga = document.getElementsByTagName('li')  //panggil dengan tag

// const titleTag = document.getElementsByClassName('title')

const containerTagQuery = document.querySelector('.container');
const containerOlahragaQuery = document.querySelector('#list_olahraga');
const liOlahragaQuery = document.querySelector('li');
const liOlahragaQueryAll = document.querySelectorAll('li');



// console.log(containerTagQuery, 'ini menggunakan class')
// console.log(containerOlahragaQuery, 'ini menggunakan id')
// console.log(liOlahragaQuery, 'ini menggunakan tagName')
// console.log(liOlahragaQuery, 'satuan')
// console.log(liOlahragaQueryAll, 'semua')

liOlahragaQuery.innerHTML = "Futsal"






// titleTag[0].innerHTML = "<h1>List Pelajaran Olahraga</h1>"
// titleId.innerHTML = "<h1>List Pelajaran Olahraga Menggunakan Id</h1>"
const titleId = document.getElementById('title_list');

// function onUbah() {
//     titleId.innerHTML = "Judul Pelajaran Olahraga"
//     // console.log('coba test')
// }

function onUbahWarna() {
    titleId.style.color = '#0000FF'
}

function onUbahBackgroundWarna() {
    titleId.style.backgroundColor = '#0000FF'

}



//handle event dengan DOM
const btnUbahJudul = document.getElementById('btn_ubah')

btnUbahJudul.addEventListener('click', function () {
    titleId.innerHTML = "Judul Pelajaran Olahraga"
    console.log('coba test')
})

// console.log(btnUbahJudul)


//Variabel
let nama = "Ronaldo"
let usia = "18";
let isActive = true

let batasUsia = 18;

// console.log(parseInt(usia) === batasUsia, "compare")

// console.log(typeof isActive)
// console.log(typeof nama)




const valueName = document.getElementById("value_nama")
nama = "Messi"

valueName.innerHTML = nama


// let 123Name = "asdsd" //salah
// let return = "asdasd" //salah

// let name123 = "hello"
// let _name = "hello"
// let fullName = "hello"
// let full_name = "hello"






// console.log(firstName)
//Konversi String to Float/Integer
const a = "13.78" //float double 
const b = "10 orang"
const c = "29.55 meter"
// console.log(parseInt(a))
// console.log(parseFloat(a))

// console.log(parseInt(b))
// console.log(parseFloat(b))

// console.log(parseInt(c))
// console.log(parseFloat(c))


//Konversi  Float/Integer to String

const d = 1000.5
const e = 8888
let f = true

console.log(d.toString())
console.log(String(e))
// f = f.toString()

console.log(f.toString() === 'true', 'compare')


let g = "22";
let h = "10";
let i = 10;
let pangkat = 2;

let hasil = 0;

hasil = g - h //pengurangan
hasil = parseInt(g) + parseInt(h) //penjumlahan

console.log(hasil)

hasil = h * i //perkalian
hasil = h / i //pembagian
hasil = i ** pangkat //perpangkatan
hasil = g % h //Modulo






















