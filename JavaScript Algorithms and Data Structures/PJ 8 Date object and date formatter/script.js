const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {
    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate.split('-').reverse().join('-')
            break;
        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`
            break;
        default:
            currentDateParagraph.textContent = formattedDate
    }
});

/*.split() gives whole string as first entry of array, adding "" .split("") splits every part of the string in the array,
.reverse() reverses a Array, doing this in the first example of split would do nothing, as there is only 1 entry to the array, doing it in the second however corrects the backwards sentence.
.join also accepts seperators (like .split("")) default is (,) so for our sentence we will use " " to recreate a single string with the values of our array. 

const exampleSentence = "selur pmaCedoCeerf".split("").reverse().join("");
console.log(exampleSentence)*/