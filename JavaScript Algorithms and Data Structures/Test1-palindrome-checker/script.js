const resultMsg = document.getElementById("result");
const form = document.getElementById("palindrome-form");
const checkBtn = document.getElementById("check-btn");


function getInput() {
    const originalInput = document.getElementById("text-input").value;
    const cleanedInput = cleanInput(originalInput);
    return {
        original: originalInput,
        cleaned: cleanedInput
    }
}

function cleanInput(input) {
    const regex = /[\W_]+/g;
    return input.replace(regex, '').toLowerCase();
}

/*function reverseInput(prepedInput.cleaned) {
    let reversed = "";

    for (let i = prepedInput.cleaned.length - 1; i >= 0; i--) {
        reversed += prepedInput.cleaned[i];
    }
    return reversed;
} */

function checkPalindrome() {
    const prepedInput = getInput()
    //reverseInput(prepedInput.cleaned)
    const reversed = prepedInput.cleaned.split('').reverse().join('');
    if (prepedInput.cleaned === reversed) {
        resultMsg.innerText = `${prepedInput.original} is a palindrome`
    } else {
        resultMsg.innerText = `${prepedInput.original} is not a palindrome`
    }
}

checkBtn.addEventListener("click", checkPalindrome);


