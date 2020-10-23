function openDrawer() {
    document.getElementById("menu").style.width = "300px";
  }
  
  function closeDrawer() {
    document.getElementById("menu").style.width = "0";
  }

// To be modified for HTML functionality
  const characters = [{
    name: 'Alpha',
    traits: ['A1', 'A2', 'A3', 'A4', 'A5']
  }, {
    name: 'Bravo',
    traits: ['B1', 'B2', 'B3', 'B4', 'B5']
  }, {
    name: 'Charlie',
    traits: ['C1', 'C2', 'C3', 'C4', 'C5']
  }, {
    name: 'Delta',
    traits: ['D1', 'D2', 'D3', 'D4', 'D5']
  }];
  
  let scoreboard = new Array(characters.length).fill(0);
  
  function incrementScore(ans) {
    const charIndex = characters.findIndex(char => char.traits.includes(ans));
    if (charIndex !== -1) scoreboard[charIndex] += 1;
  }
  
  function youAre() {
    const highestScore = Math.max(...scoreboard);
    const winnerIndex = scoreboard.indexOf(highestScore);
    return characters[winnerIndex].name;
  }