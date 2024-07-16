let equal_pressed = 0;
    // include all button
let button_input = document.querySelectorAll(".input-button");
let input =document.getElementById("input");
let clear =document.getElementById("clear");
let erase =document.getElementById("erase");
let equal =document.getElementById("equal");


window.onload = () =>{
    input.value = "";
};
//    access each class
button_input.forEach((button_class) =>{
    button_class.addEventListener("click",() => {
        if(equal_pressed == 1){
            input.value = "";
            equal_pressed = 0; 
        }
        // display value of button
        input.value += button_class.value;
    });
});
//   evaluate input
equal.addEventListener("click",() => {
    equal_pressed = 1;
    let in_val = input.value;
    try{
        // result
        let result = eval( in_val);
        // true for natural number / false for decimal
        if(Number.isInteger(result)){
            input.value = result;
        }
        else {
            input.value = result.toFixed(2);
        }
    } 
    catch(err){
        // wrong input
        alert("Invalid Input");
    }
});

//clear all
clear.addEventListener("click", () => {
    input.value = "";
});

// clear one 
erase.addEventListener("click",  () => {
    input.value = input.value.substr(0, input.value.length-1);
});

// theme change
const theme =document.getElementById("theme");
const icon = document.getElementsByClassName("fa-solid")[0];
theme.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(icon.classList.contains('fa-sun')){
        icon.classList.replace('fa-sun','fa-moon');
    }
    else{
        icon.classList.replace('fa-moon','fa-sun');
    }
}
