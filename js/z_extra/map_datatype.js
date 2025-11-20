
const map = new Map()
map.set('In',"india");
map.set('UK',"Britain");
console.log(map);
    //Map(2) { 'In' => 'india', 'UK' => 'Britain' }

for (const key of map) {
    console.log(key);
    //[ 'In', 'india' ]
    //[ 'UK', 'Britain' ]
}
for (const [key,value] of map) {
    console.log(key);
    //In
    //UK
}
for (const key in map) {
    console.log(key); // it is not itreable so no ans  but no error
    
}
