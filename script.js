const schoolAttended = document.getElementById("schoolAttended");
const rightContent = document.getElementById("right-content");

document.addEventListener('DOMContentLoaded', () => {
    schoolAttended.style.left = `${700}px`;
    schoolAttended.style.top = `${document.getElementById("heading").offsetHeight * .25}px`
    console.log("Offsetleft: " + document.getElementById("right-content").offsetLeft);
    console.log("Offsetleft: " + document.getElementById("right-content").parentElement.offsetLeft);
});

//handle JSON projects content
fetch('https://raw.githubusercontent.com/andrewkozinski/andrewkozinski.github.io/main/projects.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

    });