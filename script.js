const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercardbtn = document.getElementById("mastercardbtn");
const paypalbtn = document.getElementById("paypalbtn");
const mysubmit = document.getElementById("mysubmit");
const check = document.getElementById("check");
const rad = document.getElementById("rad");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        check.textContent = "you are subscribed!";
    }
    else{
        check.textContent = "you are not subscribed!";
    }

    if(visabtn.checked){
        rad.textContent = "you are paying with visa card!";
    }
    else if(mastercardbtn.checked){
        rad.textContent = "you are paying with mastercard";
    }
    else if(paypalbtn.checked){
        rad.textContent = "you are paying with pay pal!";
    }
    else{
        rad.textContent = "you must select a payment method!";
    }
}

