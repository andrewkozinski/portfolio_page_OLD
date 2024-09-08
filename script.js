const schoolAttended = document.getElementById("schoolAttended");
const rightContent = document.getElementById("right-content");
const projectsSection = document.getElementById("projects-section");

projectsSection.innerHTML = "";

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

        data.forEach( (project) => {

            console.log(project.title);

            projectsSection.innerHTML += `
            
            <div class="inner-tab background project">
                
                <div class="project-inner-upper">
                  <img src="${project.projImg}" height="69px" width="184px" >
                  <p style="color: white; padding-left: 15px;">${project.title}</p>
                  
                </div>
                
                <div class="project-inner-lower align-items-center">
                  <p style="color:white">Achievement Progress</p>
                  <p style="padding-left: 8px; padding-right: 8px">5 of 118</p>
                  
                  <div class="achievement_progress_bar_ctn">
                    <div class="progress_bar" style="width: 4%;"></div>    
                  </div>
 
                </div>
                
              </div>
            
            `;

        });


    });