const schoolAttended = document.getElementById("schoolAttended");

document.addEventListener('DOMContentLoaded', () => {
    schoolAttended.style.left = `${document.getElementById("right-content").offsetWidth - 700}px`;
    schoolAttended.style.top = `${document.getElementById("heading").offsetHeight * .25}px`
    console.log("Width: " + document.getElementById("heading").offsetWidth);
});

//handle JSON projects content
fetch('https://raw.githubusercontent.com/andrewkozinski/andrewkozinski.github.io/main/projects.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

    });