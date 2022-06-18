const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector('.nav-bar');
const navLink = document.querySelector('.nav-link');
function myFunction() {
  const collection = document.querySelector('.nav-item').children;
  const l = collection.length;
  for (let i = 0; i <= l; i += 1) {
    hamburger.addEventListener('click', () => {
      navLink.classList.toggle('active');
    });
  }
}
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navBar.classList.toggle('active');
    myFunction();
  });
}
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  navBar.classList.remove('active');
  navLink.classList.remove('active');
}));
/* ------------Pop up--------------  */
const workData = [
  {
    project_name: "Tonic",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    short_description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    feature_snapshot: "./src/project-1.jpeg",
    technologies: ["html", "css", "javaScript", "github", "ruby", "Bootstrap"],
    live_version: "https://www.portfolio.com/project1",
    source_link: "https://www.github.com/rominana/tonic",
  },

  {
    project_name: "Multi Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    short_description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    feature_snapshot: "./src/portfolio-snapshot3.jpeg",
    technologies: ["html", "css", "javaScript", "github", "ruby", "Bootstrap"],
    live_version: "https://www.portfolio.com/project2",
    source_link: "https://www.github.com/rominana/multi-post-stories",
  },

  {
    project_name: "Facebook 360",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    short_description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    feature_snapshot: "./src/portfolio-snapshot4.jpeg",
    technologies: ["html", "css", "javaScript", "github", "ruby", "Bootstrap"],
    live_version: "https://www.portfolio.com/project3",
    source_link: "https://www.github.com/rominana/facebook360",
  },

  {
    project_name: "Multi Post Stories",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    short_description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required.",
    feature_snapshot: "./src/portfolio-snapshot3.jpeg",
    technologies: ["html", "css", "javaScript", "github", "ruby", "Bootstrap"],
    live_version: "https://www.portfolio.com/project4",
    source_link: "https://www.github.com/rominana/uber-navigation",
  },
];

let dynamicHtmlContent = "";

for (let i = 0; i < workData.length; i += 1) {
  dynamicHtmlContent = `
  <div class="projects">
  <div>
      <img class="card-picture" src="${workData[i].feature_snapshot}" alt="project snapshot"/>
  </div>
        <div>
            <h2>${workData[i].project_name}</h2>
                <div class="company">
                <ul>
                <li>Canopy</li>
                <li>Back End Dev</li>
                <li>2015</li>
            </ul>
            </div>
                  <p>${workData[i].short_description}</p>
                <div class="tags">
                <ul>
                <li><button type="button">html</button></li>
                <li><button type="button">css</button></li>
                <li><button type="button">javascript</button></li>
            </ul>
            </div>   
                <div>
                <button class="see-projects" type="button" onClick='showPopUp(${i})'>See Project</button>
            </div>
        </div>
    </div>
  </div>`;

  document.getElementsByClassName("work-content")[0].innerHTML +=
    dynamicHtmlContent;
}

function myPopUpFunction(projectNumber) {
  let devTag = "";
  for (let i = 0; i < workData[projectNumber].technologies.length; i++) {
    devTag += `<li><button type="button">${workData[projectNumber].technologies[i]}</button></li>
 `;
  }
  return devTag;
}

/* ------------Form Validation-----*/
const email = document.querySelector('.email');
const button = document.querySelector('.submit');
const errorMessege = document.querySelector('.error');

const validate = (e) => {
  if (email.value !== email.value.toLowerCase()) {
    errorMessege.innerHTML = 'Email must be lowercase. Please Try again';
    errorMessege.style.display = 'block';
    e.preventDefault();
  } else {
    errorMessege.style.display = 'none';
  }
};
button.addEventListener('click', validate);

/* ------------ save data in local storage---------*/
const username = document.querySelector('.name');
const useremail = document.querySelector('.email');
const usermessege = document.querySelector('.message');
function getFormData() {
  const myJSON = {
    name: username.value,
    email: useremail.value,
    message: usermessege.value,
  };

  localStorage.setItem('myJSON', JSON.stringify(myJSON));
}
username.addEventListener('change', () => {
  getFormData();
});
useremail.addEventListener('change', () => {
  getFormData();
});
usermessege.addEventListener('change', () => {
  getFormData();
});

/* ----------- recieve data from local storage------*/

function loadData() {
  if (localStorage.getItem('myJSON') !== null) {
    const input = localStorage.getItem('myJSON');
    const inputParse = JSON.parse(input);
    username.value = inputParse.name;
    useremail.value = inputParse.email;
    usermessege.value = inputParse.message;
  }
}

window.onload = () => {
  loadData();
};
