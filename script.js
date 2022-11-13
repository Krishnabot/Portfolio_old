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
    project_name: 'Space Travellers Hub ',
    description:
      'A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    short_description:
      'A web application for a company that provides commercial and scientific space travel services.',
    feature_snapshot: './src/Space-Traveller-Hub_snapshot.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'Bootstrap'],
    live_version: 'https://genuine-crostata-d7ce29.netlify.app/Rockets',
    source_link: 'https://github.com/Krishnabot/Space-Traveler-s-Hub',
  },

  {
    project_name: 'Coin Tracker',
    description:
      'Built with React and Redux, Coin Tracker provides real time market-based information and statistics about the top 52 cryptocurrencies in the market.',
    short_description:
      ' An updates  of crytocoins about their market and health; no accounts or sign-ups required.',
    feature_snapshot: './src/cointracker_snapshot.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'Bootstrap'],
    live_version: 'https://zingy-eclair-341d70.netlify.app/',
    source_link: 'https://github.com/Krishnabot/CoinTrackers',
  },

  {
    project_name: 'Foodie App',
    description:
      'A Simple Menu Website. where most Popular American French and Chinese Menu are can be found along with their ingredients and recipe.',
    short_description:
      ' A daily selection of personalized Menus; no accounts or sign-ups required.',
    feature_snapshot: './src/Foodie_App_snapshot.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'API', 'Bootstrap'],
    live_version: 'https://krishnabot.github.io/JavaScript-CapStone/dist/',
    source_link: 'https://github.com/Krishnabot/JavaScript-CapStone',
  },

  {
    project_name: 'Poetry Slam',
    description:
      'A Informative Conference website of Poetry Slam event in NewYork , where all important information regarding the program can be accessed via home page and about page from both desktop and mobile devices',
    short_description:
      ' A responsive Website containing about and home page of POETRY SLAM 2020',
    feature_snapshot: './src/poetry_slam_snapshot.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'Bootstrap'],
    live_version: 'https://krishnabot.github.io/Capstone-Project-Poetry-Page/',
    source_link: 'https://github.com/Krishnabot/Capstone-Project-Poetry-Page',
  },
];

let dynamicHtmlContent = '';

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

  document.getElementsByClassName('work-content')[0].innerHTML
    += dynamicHtmlContent;
}

function myPopUpFunction(projectNumber) {
  let devTag = '';
  for (let i = 0; i < workData[projectNumber].technologies.length; i += 1) {
    devTag += `<li><button type="button">${workData[projectNumber].technologies[i]}</button></li>
 `;
  }
  return devTag;
}

function closePopUp() {
  document.getElementsByTagName('body')[0].classList.remove('pop-up');
  document.getElementsByClassName('work-content')[0].classList.remove('pop-up');
  document.getElementById('pop-up').classList.remove('pop-up');
}

// eslint-disable-next-line no-unused-vars
function showPopUp(cardcount) {
  let paragraphDescription = '';

  if (window.screen.width >= 768) {
    paragraphDescription = workData[cardcount].description;
  } else {
    paragraphDescription = workData[cardcount].short_description;
  }

  const devTag = myPopUpFunction(cardcount);
  const liveVersion = workData[cardcount].live_version;
  const sourceLink = workData[cardcount].source_link;

  const popUpHtml = `
<div id="pop-up">
  <div>
      <div class="card">
            <div>
                <div>
            <h2>${workData[cardcount].project_name}<i class="fa-solid fa-xmark close-pop-up" ></i></h2>
                <div class="company">
                <ul>
                <li>Canopy</li>
                <li>Back End Dev</li>
                <li>2015</li>
            </ul>
            <div>
              </div>
            </div> 
            </div>
            <div class="popup-img">
                <img class="card-picture" src="${workData[cardcount].feature_snapshot}"/>
            </div>
                    <div class="pop-up-columns">
                        <div class="left-column">
                        <p class="card-description">${paragraphDescription}</p>
                        </div>
                        <div class="right-column">
                        <div class="tags">
                <ul>
                 ${devTag}
            </ul>
                          </div>  
                        <div class="pop-up-btn">
                            <button class="see-projects"  type="button"><a href ="${liveVersion}">See Live </a> <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                            <button class="see-projects" type="button"><a href = "${sourceLink}">See Source </a> <i class="fa-brands fa-github"></i></button>
                    </div>
                </div>
            </div>
        </div>
      </div> 
  </div>
</div>
`;

  document.getElementById('pop-up-content').innerHTML = popUpHtml;
  document.getElementsByTagName('body')[0].classList.add('pop-up');
  document.getElementsByClassName('work-content')[0].classList.add('pop-up');
  document.getElementById('pop-up').classList.add('pop-up');
  document
    .getElementsByClassName('close-pop-up')[0]
    .addEventListener('click', () => {
      closePopUp();
    });
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
