

function openDrawer() {
  document.getElementById("menu").style.width = "300px";
}

function closeDrawer() {
document.getElementById("menu").style.width = "0";
}

function openResults() {
document.getElementById("resultWindow").style.width = "100%";
}

function incrementScore(characterName) {
const charIndex = characters.findIndex(char => char == characterName);
if (charIndex !== -1) scoreboard[charIndex] += 1;
}

function evaluateAnswers(){
  if (Object.values(answers).includes("")) {
    alert("There are questions that you have left unanswered.");
  } else {
    document.getElementById("submitBtn").disabled = true;
    console.log(Object.values(answers));
    Object.values(answers).map(incrementScore);
    const character = youAre();
    renderCharacterDetails(character); // <- This now handles everything
    openResults();
  }
}


function youAre() {
const highestScore = Math.max(...scoreboard);
const winnerIndex = scoreboard.indexOf(highestScore);
return characters[winnerIndex];
}

function assignAnswer(questionNo, answerVal){ 
answers[questionNo] = answerVal
console.log(answers)
}

function renderCharacterDetails(character) {
  document.getElementById("characterName").innerText = character;
  document.getElementById("tagline").innerText = taglines[character];
  document.getElementById("characterPic").src = pictureDir[character];
  document.getElementById("resultWindow").style.display = "block";

  const data = extraData[character];
  document.getElementById("coreTrait").innerText = data.coreTrait;
  document.getElementById("behaviour").innerText = data.behaviour;
  document.getElementById("quoteVibe").innerText = data.quoteVibe;

  const ctx = document.getElementById("skillChart").getContext("2d");
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Precision', 'Building Speed', 'Structural Stability', 'Narrative Design', 'Mechanical Aptitude', 'Adaptability'],
      datasets: [{
        label: 'Skill Stats',
        data: data.skills,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

const characters = [
"THE ALCHEMIST",
"THE SWASHBUCKLER",
"THE LOREWEAVER",
"THE GEARMASTER"
];

const taglines = {
"THE ALCHEMIST": "Your quest is perfection, transforming bricks into flawless creations through meticulous precision. Every stud must align!",
"THE SWASHBUCKLER": "You build at lightning speed, embracing chaos and fun! Your motto: Build fast, play faster, and improvise your way to epic adventures!",
"THE LOREWEAVER": "You don't just build structures, you build worlds and weave epic tales. Your bricks are the stage where minifig dramas unfold!",
"THE GEARMASTER": "You master movement and mechanics! For you, a build isn't finished until it does something amazing. Function is your ultimate art!"
}

const pictureDir = {
"THE ALCHEMIST":"images/snake.jpg",
"THE SWASHBUCKLER": "images/doomSlayer.jpg",
"THE LOREWEAVER": "images/mario.jpg",
"THE GEARMASTER": "images/steve.png"
}

const extraData = {
  "THE ALCHEMIST": {
    coreTrait: "Precision, accuracy, and adherence to instructions or a perfect vision above all else.",
    behaviour: "Follows instructions step-by-step religiously. If building freely, plans meticulously, sorts pieces obsessively, measures alignments, and gets visibly stressed by asymmetry or mistakes. Their builds are clean, stable, and just right",
    quoteVibe: "Wait, that plate is offset by half a stud... it's RUINED!",
    skills: [100, 70, 90, 30, 40, 20]
  },
  "THE SWASHBUCKLER": {
    coreTrait: "Thrives on speed, action, and immediate results. Process > Perfection.",
    behaviour: "Rips bags open, dumps pieces, builds incredibly fast (often skipping steps or improvising). Prioritizes playability and fun now over aesthetics or stability. Builds might be chaotic, fragile, but full of energy. Loves minifig battles and swooshability.",
    quoteVibe: "Instructions? Who needs 'em! ZOOM! CRASH! Awesome!",
    skills: [30, 90, 20, 90, 30, 90]
  },
  "THE LOREWEAVER": {
    coreTrait: "Focuses on characters, story, and world-building. Bricks are props and sets.",
    behaviour: "Builds scenes, not just structures. Spends more time posing minifigs and creating narratives than on complex building techniques. Might have simpler builds but incredibly rich backstories. Loves creating scenarios, dialogues, and dramatic events.",
    quoteVibe: "And then the space knight said to the dragon... wait, I need a throne room for this!",
    skills: [50, 60, 70, 50, 30, 100]
  },
    "THE GEARMASTER": {
    coreTrait: "Driven by function, mechanics, and solving technical challenges.",
    behaviour: "Fascinated by gears, levers, hinges, and Technic elements. Prioritizes making things work – vehicles that roll smoothly, cranes that lift, doors that open automatically. Aesthetics are secondary to functionality and clever solutions. Might dismantle things just to see how they function.",
    quoteVibe: "Cool castle, but does the drawbridge actually retract with this pulley system I designed?",
    skills: [90, 50, 100, 20, 80, 90]
  },
};


let scoreboard = new Array(characters.length).fill(0);

let answers = {
"q1": "",
"q2": "",
"q3": "",
"q4": "",
"q5": ""
}






