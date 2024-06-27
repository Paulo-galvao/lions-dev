const array = [];
for(let i = 0; i <=10; i++) {
    array.push(i);
}

console.log(array.push(11));  // adiciona um elemnto ao final do array
console.log(array.pop()); // remove o último elemento do array
console.log(array.shift());  //  remove o primeiro elemento
console.log(array.unshift([0,1,2,3])); // adiciona um novo elemento ao inicio do array
console.log(array.includes(3));
console.log(array.includes("a"));
console.log(array.indexOf(3));
console.log(array.splice(5, 2, "cinco" ,"seis"));
const newArray = array.splice(8);

console.log(array);
console.log(newArray);

for(let  i = 0; array.length > i; i++) {
    console.log(i);
}

let j = 0;
while(j < array.length) {
    console.log(array[j]);
    j++;
}

let y = 0;
do {
    console.log(array[y]);
    y++;
} while( y < array.length);

array.forEach(function( item, index) {
    console.log(index,':', item);    
});