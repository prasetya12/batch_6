//Fungsi Mutlak, mengembalikan nilai positif
// const a = -200;


// const nilai = Math.abs(a)

// const nilaiPangkat = Math.pow(4, 2);
// const nilaiKuadrat = Math.sqrt(25)
// const nilaiMax = Math.max(-10, -20, -5, 10)
// const nilaiMin = Math.min(-10, -20, -5, 10)

// const nilaiFloor = Math.floor(5.9);
// const nilaiCeil = Math.ceil(5.2);
// const nilaiRound = Math.round(3.4)
// //mencari nilai bilangan bulat random antara 0 - 10 
// const nilaiRandom = Math.floor(Math.random() * 4) + 20

// const radius = prompt("Masukan nilai jari-jari lingkaran ?");

//Luas Lingkaran L = pi * r2
// const luasLingkaran = Math.PI * Math.pow(radius, 2);


// console.log(Math.PI)
const variabel1 = "INDONESIA"
const variabel2 = "RAYA"
const variabel3 = "MENANG"

const gabung = variabel1 + " " + variabel2 + " " + variabel3
const gabungProp = variabel1.concat(variabel2)
const gabungString = `${variabel1} HASDAS ${variabel2}`


const namaNegara = "INDONESIA RAYA MENANG ";

// I N D O N E S I A   R  A  Y  A
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13
console.log(namaNegara[10])
// const panjang = namaNegara.length

const cariIndex = namaNegara.indexOf("z")

// const perulanganString = namaNegara.repeat(4)
// const menggantiString = namaNegara.replace("A", "M")
// const stringSlice = namaNegara.slice(5, 6)


// const nama = "LaPtop";
// const namaKecil = "LaPtop ";

// console.log(namaKecil.trim().length)
// const convert = nama.toLocaleLowerCase()

// console.log(convert)

// console.log(namaNegara[panjang - 1])

const user = {
    "nama": "Messi",
    "usia": 30,
    "nama_lengkap": "Lionel Messi",
    "is_Admin": true
}

console.log(user)
console.log(Object.keys(user))

Object.keys(user).map((item) => {
    console.log(user[item])
})

// const nama = "Messi";








// userAdmin.password = "123"

// console.log(userAdmin)
// console.log(user["usia"])
// console.log(userAdmin.is_Admin)



const produk = "tas"
const produk2 = "laptop"
const produk3 = "handphone"


// document.write(`${produk} <br/>`)
// document.write(`${produk2} <br/>`)
// document.write(`${produk3} <br/>`)

const dataArray = ["tas", "laptop", "handphone"];
const datArray = ["tas", "laptop", 8, true];

const dataUser = [
    {
        namaLengkap: "Lionel Messi",
        usia: 30,
        role: [
            'admin',
            'user'
        ]
    },
    {
        namaLengkap: "Ronaldo",
        usia: 35,
        role: [
            'stakeholder',
            'lihat'
        ]
    }
]

console.log(Object.keys(dataUser[1]))


// dataUser.map((item) => {
//     document.write(`${item.role[0]} <br/>`)
// })





// dataArray.map((item) => {
//     document.write(`${item} <br/>`)
// })


// document.write("produk1 <br/>")









