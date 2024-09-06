const schoolAttended = document.getElementById("schoolAttended");

document.addEventListener('DOMContentLoaded', () => {
    schoolAttended.style.left = `${document.getElementById("right-content").offsetWidth}px`;
    schoolAttended.style.top = `${document.getElementById("heading").offsetHeight * .25}px`
    console.log("Width: " + document.getElementById("right-content").clientLeft);
});

//handle JSON projects content
fetch('https://raw.githubusercontent.com/andrewkozinski/andrewkozinski.github.io/main/projects.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

    });