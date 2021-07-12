function gameObject() {
    const game = {
        'home': {
        'teamName': "Brooklyn Nets",
        'colors': ["Black", "White"],
        'players': {
            "Alan Anderson": {
            "number": 0,
            'shoe': 16,
            'points': 22,
            'rebounds': 12,
            'assists': 12,
            'steals': 3,
            'blocks': 1,
            'slamDunks': 1},
       

           "Reggie Evans": {
            'number': 30,
            'shoe': 14,
            'points': 12,
            'rebounds': 12,
            'assists': 12,
            'steals': 12,
            'blocks': 12,
            'slamDunks': 7},

            
            "Brook Lopez": {
            'number': 11,
            'shoe': 17,
            'points': 17,
            'rebounds': 19,
            'assists': 10,
            'steals': 3,
            'blocks': 1,
            'slamDunks': 15},
        
            
            "Mason Plumlee":{
            'number': 1,
            'shoe': 19,
            'points': 26,
            'rebounds': 12,
            'assists': 6,
            'steals': 3,
            'blocks': 8,
            'slamDunks': 5},

            "Jason Terry": {
            'number': 31,
            'shoe': 15,
            'points': 19,
            'rebounds': 2,
            'assists': 2,
            'steals': 4,
            'blocks': 11,
            'slamDunks': 1}
            }
        },
        'away': {
        'teamName': "Charlotte Hornets",
        'colors': ["Turquoise", "Purple"],
        'players': {
            "Jeff Adrien": {
            'number': 4,
            'shoe': 18,
            'points': 10,
            'rebounds': 1,
            'assists': 1,
            'steals': 2,
            'blocks': 7,
            'slamDunks': 2},
       

            "Bismak Biyombo": {
            'number': 0,
            'shoe': 16,
            'points': 12,
            'rebounds': 4,
            'assists': 7,
            'steals': 7,
            'blocks': 15,
            'slamDunks': 10},

            
            "DeSagna Diop": {
            'number': 2,
            'shoe': 14,
            'points': 24,
            'rebounds': 12,
            'assists': 12,
            'steals': 4,
            'blocks': 5,
            'slamDunks': 5},
        
            
            "Ben Gordon": {
            'number': 8,
            'shoe': 15,
            'points': 33,
            'rebounds': 3,
            'assists': 2,
            'steals': 1,
            'blocks': 1,
            'slamDunks': 0},

            "Brendan Haywood": {
            'number': 33,
            'shoe': 15,
            'points': 6,
            'rebounds': 12,
            'assists': 12,
            'steals': 22,
            'blocks': 5,
            'slamDunks': 12}
            }
    }
}
return game
}
// console.log(gameObject())


const homeTeamName = () => gameObject().home.teamName

console.log(homeTeamName())

const awayTeamName = () => gameObject().away.teamName

console.log(awayTeamName())

function numPointsScored(name){
    const data = gameObject()
    
    //for (key in data){
        //for (player in data[key].players){ //key in [] because we just declared it, can't use dot notation
            //if (player === name){
                //return data[key].players[player].points //again key and player are in [] because its a variable we just declared
            //}}}}

    if (data.home.players[name]){
        return data.home.players[name].points
    }
    if (data.away.players[name]){
        return data.away.players[name].points
    }
}

console.log(numPointsScored('Alan Anderson'))

function winningTeam(){
    const data = gameObject();
    const memory = {}
    for (key in data) {
        memory[key] = Object.keys(data[key].players).map(p => {
            return data[key].players[p].points
        }).reduce((a, n) => a + n)
    }
    teams = Object.keys(memory)
    return memory[teams[0]] > memory[teams[1]] ? teams[0] : teams[1]
}

console.log(winningTeam())

const playerWithLongestName = (data = gameObject()) => {
    const memory = {name: ""}
    for (key in data) {
        const team = data[key]
        Object.keys(team.players).forEach(player => {
            if (memory.name.length < player.length) {
                memory.name = player
            } 
        })
    }
    return memory.name
}

console.log(playerWithLongestName())

function findPlayer(name, data = gameObject()) {

    const { home, away } = data
    return home.players[name] ? home.players[name] : away.players[name]
}

const doesLongNameStealATon = () => {
    const data = gameObject()
    const longName = playerWithLongestName(data)
    const longPlayer = findPlayer(longName, data)
    for (key in data) {
        const team = data[key]
        for (player in team.players) {
            const challenger = team.players[player]
            if (longPlayer.steals < challenger.steals) {
                return false
            }
        }
    }
    return true
}

console.log(doesLongNameStealATon())