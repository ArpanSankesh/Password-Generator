const inputBox = document.querySelector('.input-box');
const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copy-btn');
const number = document.querySelector('.number');
const uppercase = document.querySelector('.uppercase');
const lowercase = document.querySelector('.lowercase');
const symbol = document.querySelector('.symbol');
const characterLength = document.querySelector('.character-length');

const numberChar = '0123456789';
const uppercaseChar = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
const symbolChar = '~!@#$%^&*()'

let password = '';

const checkChar = function(){
    const length = parseInt(characterLength.value);
    if( isNaN(length) || length < 8 || length > 16 ){
        alert('Please Enter the values between 8-16 ')
    }
    console.log(length);
}

const generatePassword  = function(){
    checkChar()

    if(numberChar){
        password += numberChar;
    }
    if(uppercaseChar){
        password += uppercaseChar;
    }
    if(lowercaseChar){
        password += lowercaseChar;
    }
    if(symbolChar){
        password += symbolChar;
    }
    
    for(i=0; i <= length; i++){
        console.log(i)
        Math.random(password)
    }
    console.log('gen')
    inputBox.value = password;
}

const copyPassword = function(){
    navigator.clipboard.writeText(inputBox.value); 
    // copyBtn.classList.add('btnClicked')
     
}

generateBtn.addEventListener('click', generatePassword)
copyBtn.addEventListener('click', copyPassword)