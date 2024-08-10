// import square from "./module.mjs";

// console.log(square(5))

/*
// we can write import as cubeThisNumber this is es6 syntax
import { cube as cubeThisNumber } from "./module.mjs";
console.log(cubeThisNumber(6))
*/



/*
imported as below just assumtion

{
    square: function
    cube: function
    num: number
}

*/

//syntax

import * as util from './module.mjs';

console.log(util.cube(5))
