//DATA STRUKTUR

/* SEBUAH CARA MENYIMPAN DATA ke memori KOMPUTER

kumpulan data-data dalam sebuah variabel ada 2 metode
1 array
2 object
*/

//ARRAY

const array = [2, 4, 6, 18, 19, 20, "string", "wegodev", true]

console.log(array[6]) //string

//properties length
console.log(array.length)  // akan menghasilkan 9 berguna untuk melooping array


const array = [1, 2, 3, 4, 5]

for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2
}

console.log(array)


// ARRAY METHOD

const array = [1, 2, 3, 4, 5]

console.log(array)

//PUSH METHOD

array.push(6)  //akan menambah sebuah properti atau value baru di belakang array

//POP method
array.pop()   //akan menghilangkan(memanipulasi) value yang dibelakang array

//SHIFT DAN UNSHIFT
array.unshift(0)  //menambahkan sebuah elemen didepan sequence array

array.shift() //menghilangkan didepan sequence array

console.log(array)


//SLICE

const animals =["kucing", "beruang", "jerapah", "gajah", "harimau"];

animals.slice(1, 3)

console.log(animals)

