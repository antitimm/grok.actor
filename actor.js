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

const motivation_table = [
    'Avenging a wrong',
    'Becoming a legend',
    'Creating a strife',
    'Defeating a rival',
    'Defending an ally',
    'Delivering an object',
    'Discovering a truth',
    'Earning great wealth',
    'Escaping something',
    'Fighting an injustice',
    'Finding a person',
    'Forging an alliance',
    'Locating an object',
    'Proving oneself',
    'Reclaiming a home',
    'Repaying a debt',
    'Restoring peace',
    'Seizing power',
    'Solving a mystery',
    'Teaching someone'   
]

const background_table = [
    'Ownerless Automaton',
    'Celestial Cartographer',
    'Changeling Spy',
    'Chrononaut Smuggler',
    'Cosmic Conquistador',
    'Draugr Revenent',
    'Dream Scalper',
    'Dwarven Artisan',
    'Eldritch Summoner',
    'Elven Ranger',
    'Flesh Artist',
    'Halfling Rogue',
    'Hermit Philosophist',
    'Human Vagabond',
    'Cyber-Runner',
    'Orc Barbarian',
    'Paranormal Inquisitor',
    'Quantum Psychologist',
    'Social Influencer',
    'Space-Barge Captain'
]

const trouble_table = [
    'Addicted',
    'Blackmailed',
    'Blinded',
    'Condemned',
    'Deafened',
    'Defrauded',
    'Deluded',
    'Deranged',
    'Discredited',
    'Diseased',
    'Disfigured',
    'Exiled',
    'Framed',
    'Impoverished',
    'Indentured',
    'Possessed',
    'Pursued',
    'Replaced',
    'Ridiculed',
    'Uneducated'    
]

const appearance_table = [
    'Beautiful',
    'Bedraggled',
    'Bloated',
    'Bulbous',
    'Corpulent',
    'Delicate',
    'Diminutive',
    'Drooping',
    'Elongated',
    'Filthy',
    'Gaunt',
    'Hulking',
    'Lean',
    'Massive',
    'Monstrous',
    'Repulsive',
    'Rotund',
    'Semi-translucent',
    'Slumped',
    'Unremarkable' 
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
    return `
    <table>
    <tr>
    <td><h2>Attributes</h2><br>${stats}</td>
    </tr>
    <tr>
    <td><h2>Traits</h2><br>
    ${trouble_table[i]}<br>
    ${personality_table[i]}<br>
    ${appearance_table[i]}<br>
    ${background_table[i]}<br>
    ${motivation_table[i]}<br>
    </td>
    </tr>
    </table>`;
}

function newActor() {
    var elem = document.getElementById('actorDisplay');
    elem.innerHTML = formatActor();
}