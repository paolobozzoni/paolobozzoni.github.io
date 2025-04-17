let projects = [
  {
    repname: "ball-shooter",
    title: "Ball Shooter",
    desc: "A ball-shooting game done with the canvas element and some javascript. The game includes a score which gets updated every time an enemy gets eliminated. Enemies spawn at random intervals and at random locations. The game includes a start/end game popup.",
  },
  {
    repname: "js-bmi-calculator",
    title: "BMI Calculator",
    desc: "A simple body mass index calculator that outputs the index and a weight condition.",
  },
  {
    repname: "js-password-generator",
    title: "Password Generator",
    desc: "A simple password generator that can generate random passwords with a length given by the user.",
  },
  {
    repname: "dice-roller",
    title: "Dice Roller",
    desc: "A simple random dice roller with a clearable history of the recent rolls.",
  },
  {
    repname: "js-calculator-app",
    title: "Calculator App",
    desc: "The classic javascript calculator app everybody knows",
  }, 
  {
    repname: "my-first-game",
    title: "My first game",
    desc: "A simple canvas game where you have to collect coins to upgrade your score. It includes a shop where you can buy player upgrades. This project will be updated every time I learn something new.",
  },
  {
    repname: "calcolatore-elo",
    title: "Chess Elo Calculator",
    desc: "A simple chess elo calculator that calculates how much elo you gain depending on the opponent rating and the game result.",
  },
  {
    repname: "chessboard",
    title: "ChessBoard",
    desc: "A static HTML and CSS chessboard that will be the starting point of my upcoming chess project.",
  }
]

const ProjectContainer = document.querySelector('.js-project-container')

let html = ''

projects.forEach((project) => {
  let projectTitle = project.title
  let projectDesc = project.desc

  html += `
          <div class="project-container">
          <h1 class="title">${projectTitle}</h1>
          <p class="desc">
            ${projectDesc}
          </p>
            <div class="details-container">
              <div><p class="js-ptitle details"><a target="_blank" href="https://github.com/paolobozzoni/${project.repname}">Project Repository</a></p></div>
              <div><p class="js-pdesc details"><a target="_blank" href="https://paolobozzoni.github.io/${project.repname}/">Project Link</a></p></div>
            </div>
          </div>
  `
})

ProjectContainer.innerHTML = html