document.getElementById("password").value = "";
var generateBtn = document.querySelector("#generate");

// Input password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
    var generatePassword = "";
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numeric = '0123456789'
    var specialCharacters = '@#$_^^';
    var strInput = "";
    var len = 0;
    len = prompt("How many characters would you like to contain?");
    var choices = ["lowercase", "uppercase", "numeric", "specialCharacters"];

    for (; len < 8 || len > 128;) {

        len = prompt("Please choose a length of at least 8 characters and no more than 128 characters");

    }


    for (var x in choices) {
        var choice = choices[x];
        var toHave = confirm("Click Ok to confirm to include " + choice);

        if (!toHave) {
            continue;
        }
        if (choice == "lowercase") {
            strInput = strInput.concat(lowercase);
            // console.log(strInput);
            getRandomChar(lowercase);
        }
        else if (choice == "uppercase") {
            strInput = strInput.concat(uppercase);
            // console.log(strInput);
            getRandomChar(uppercase);
        }
        else if (choice == "numeric") {
            strInput = strInput.concat(numeric);
            // console.log(strInput);
            getRandomChar(numeric);
        }
        else if (choice == "specialCharacters") {
            strInput = strInput.concat(specialCharacters);
            // console.log(strInput);
            getRandomChar(specialCharacters);
        }

    }


    function getRandomChar(choice) {

        var indx = Math.floor(Math.random() * choice.length) + 1;
        generatePassword = generatePassword.concat(choice.charAt(indx));

        //console.log(generatePassword.length);

    }

    //console.log(generatePassword.length);

    var remaining = len - generatePassword.length;
    for (var x = 0; x <= remaining; x++) {
        getRandomChar(strInput);
    }


    //console.log(generatePassword.length);
    return generatePassword;

}