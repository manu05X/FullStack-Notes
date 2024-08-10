function square(num){
    return num ** 2
}
//module.exports = { square } //common js syntax

//es6 Syntax - > 1st way
//export default square

/*
function cube(num){
    return num ** 3
}
// 2nd way -> for multiple export // object looking but not object
export{
    square,
    cube
}
*/

//Now if we change the name from cube to internalCube
function internalCube(num){
    return num ** 3
}

export {
    square,
    // internalCube : cube //wrong syntax it is not js object
    internalCube as cube // this works
} 

export const num = 5