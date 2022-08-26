const stats_table = [
    ['d8', 'd6', 'd6'],
    ['d6', 'd8', 'd6'],
    ['d6', 'd6', 'd8']
]
const personality_table = [
    'Ambitious',
    'Boisterous',
    'Courageous',
    'Cruel',
    'Cunning',
    'Curious',
    'Distrusting',
    'Entitled',
    'Focused',
    'Generous',
    'Gullible',
    'Honorable',
    'Intolerant',
    'Lackadaisical',
    'Nervous',
    'Patient',
    'Pessimistic',
    'Reckless',
    'Selfish',
    'Stubborn'
]

function randomIndex(list){
    return Math.floor(Math.random() * (list.length))
}

function randomItem(list){
    return list[randomIndex(list)]
}
function formatActor() {
    var stats = randomItem(stats_table)
    var i = Math.floor(Math.random() * (personality_table.length));
    return stats + "<br>" + personality_table[i];
}

function newActor() {
    var elem = document.getElementById('actorDisplay');
    elem.innerHTML = formatActor();
}