function createTeam(teamName) {
  var players = [];
  return {
    addPlayer: function(playerName) {
      players.push(playerName);
    },
    listPlayers: function () {
      console.log(teamName, players);
    }
  }
}

var sloths = createTeam('sloths');
sloths.addPlayer("Matt");
sloths.addPlayer('Michael');
sloths.addPlayer('Elaine');

var goldenGirls = createTeam('Golden Girls');
goldenGirls.addPlayer('Kyle');
goldenGirls.addPlayer('Jesse');
goldenGirls.addPlayer('Blanche');

sloths.listPlayers();
goldenGirls.listPlayers();

String.prototype.extremeCamelCase = function (str) {
  var temp = str.split('');
  for (var i = 0; i < temp.length; i++) {
    if(i % 2 !== 0) {
      temp[i] = temp[i].toUppercase;
    } else {
      
    }
  } return str.join('');
};
