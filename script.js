//Imgur album where images are stored https://imgur.com/a/M4zfwQ7
const schoolAttended = document.getElementById("schoolAttended");
const rightContent = document.getElementById("right-content");
const projectsSection = document.getElementById("projects-section");

projectsSection.innerHTML = "";

document.addEventListener('DOMContentLoaded', () => {
  //Note to self: maybe find a better way to display this on the page
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

        data.forEach( (project) => {

            projectsSection.innerHTML += `
            
            <div class="inner-tab background project">
                
                <div class="project-inner-upper">
                  <img src="${project.previewImg}" height="69px" width="184px" >
                  <p style="color: white; padding-left: 15px;">${project.title}</p>
                  
                </div>
                
                <div class="project-inner-lower align-items-center">
                  <p style="color:white">Languages Used</p>
                  <p style="padding-left: 8px; padding-right: 8px">5 of 118</p>
                  
                  <div class="proj-languages"></div>
 
                </div>
                
              </div>
            
            `;

        });


    });


const arrow = document.getElementById("setArrow");

const moveArrow = () => {
    arrow.innerHTML = " ▼";
}

arrow.setAttribute("onclick", "moveArrow()");