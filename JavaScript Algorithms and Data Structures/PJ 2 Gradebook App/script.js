function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total = total + scores[i];
    }
    let average = total / scores.length;
    return average
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
    let i = score;
    if (i === 100) {
        return "A++"
    } else if (i >= 90) {
        return "A"
    } else if (i >= 80) {
        return "B"
    } else if (i >= 70) {
        return "C"
    } else if (i >= 60) {
        return "D"
    } else {
        return "F"
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

function hasPassingGrade(score) {
    if (getGrade(score) === "F") {
        return false
    } else {
        return true
    }
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

function studentMsg(totalScores, studentScore) {
    if (hasPassingGrade(studentScore) === true) {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course."
    } else {
        return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course."
    }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19, 100], 100))