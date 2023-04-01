/**
 * Data type
 * Type Assertions
 * sometime compiler does not know the information we do 
 * typescript is not performing any Check to make sure Type assertion is Valid
 * 
 */

let myImg = document.getElementById('my-img') as HTMLImageElement;
console.log(myImg.src);

let myInput = <HTMLInputElement> document.getElementById('my-input');
console.log(myInput.value);