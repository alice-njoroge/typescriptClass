"use strict";
//tuples in typescript 
let hsla;
hsla = [200, '100%', '100%', 1];
let coords;
coords = [20.1, 97.4];
function useCoordinates() {
    //some logic to get the coordinates 
    const latitude = 10;
    const longitude = 50;
    return [latitude, longitude];
}
const [lat, long] = useCoordinates();
//named tuples 
let user;
user = ['name', 27];
console.log(user[0]);
