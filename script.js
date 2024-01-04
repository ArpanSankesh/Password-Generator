const inputBox = document.querySelector(".input-box");
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");
const number = document.querySelector("#btn1");
const uppercase = document.querySelector("#btn2");
const lowercase = document.querySelector("#btn3");
const symbol = document.querySelector("#btn4");
const characterLength = document.querySelector(".character-length");

const numberChar = "0123456789";
const uppercaseChar = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
const symbolChar = "~!@#$%^&*()";

const checkChar = function () {
  const length = parseInt(characterLength.value);
  if (isNaN(length) || length < 8 || length > 16) {
    alert("Please Enter the values between 8-16 ");
    inputBox.value = "";
    process.exit();
  }
};

const generatePassword = function () {
  copyBtn.classList.remove("active");
  checkChar();

  const length = parseInt(characterLength.value);

  inputBox.value = characterLength.value;
  let password = "";

  let newPassword = "";

  if (number.checked) {
    newPassword += numberChar;
  }
  if (uppercase.checked) {
    newPassword += uppercaseChar;
  }
  if (lowercase.checked) {
    newPassword += lowercaseChar;
  }
  if (symbol.checked) {
    newPassword += symbolChar;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * newPassword.length);
    password += newPassword[randomIndex];
    console.log(newPassword);
  }
  inputBox.value = password;
};

const copyPassword = function () {
  navigator.clipboard.writeText(inputBox.value);
  copyBtn.classList.add("active");
};

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
