
const formbox = document.getElementById("formbox");
const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const submit = document.getElementById("submit");
const message = document.getElementById("message");

let temp ;

function convert (){
    if(toFahrenheit.checked){
        temp = Number (textbox.value);
        temp =  temp * 9 / 5 + 32;
         message.textContent =temp.toFixed(1) + "•F";
    }
    else if(toCelsius.checked){
        temp = Number ( textbox.value);
        temp = (temp - 32) * (5/9);
        message.textContent =temp.toFixed(1) + ("•C");
    }
    else {
        message.textContent= "Select a unit";
    }
}