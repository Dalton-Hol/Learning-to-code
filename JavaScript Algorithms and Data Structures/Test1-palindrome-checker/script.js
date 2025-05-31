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

function checkPalindrome(event) {
    event.preventDefault();

    const preppedInput = getInput()

    if (preppedInput.original === "") {
        window.alert("Please input a value");
        return; // stop the function so it doesn't continue
    }

    //reverseInput(prepedInput.cleaned)
    const reversed = preppedInput.cleaned.split('').reverse().join('');
    if (preppedInput.cleaned === reversed) {
        resultMsg.innerText = `${preppedInput.original} is a palindrome`
    } else {
        resultMsg.innerText = `${preppedInput.original} is not a palindrome`
    }
}

form.addEventListener("submit", checkPalindrome);


