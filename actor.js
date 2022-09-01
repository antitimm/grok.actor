const stats_table = [
    ['d8', 'd6', 'd6'],
    ['d6', 'd8', 'd6'],
    ['d6', 'd6', 'd8'],
    ['d10', 'd4', 'd6'],
    ['d10', 'd6', 'd4'],
    ['d6', 'd10', 'd4'],
    ['d4', 'd10', 'd6'],
    ['d6', 'd4', 'd10'],
    ['d4', 'd6', 'd10'],
    ['d12', 'd4', 'd4'],
    ['d4', 'd12', 'd4'],
    ['d4', 'd4', 'd12']
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

const asset1 = [
    'Auto-Aiming Longbow',
    'Bunch of Acid Vials',
    'Blame Thrower',
    'EMP Baton',
    'Pneumatic Exo-Arm',
    'Flying Cape',
    'Gravity Hammer',
    'Devolution Blowgun',
    'Invisible Shield',
    'Mask of Disguise',
    'Sentient Bastard Sword',
    'Canned Heat',
    'Plasma Launcher',
    'Psychic Blundrebuss',
    'Rocket Boots',
    'Unregistered Slugthrower',
    'Vintage Space Helm',
    'X-Ray Monocle',
    'Phaser Sabre',
    'Meat Cannon',   
]

const asset2 = [
    '50ft of Self-Tying Rope',
    'Spontaneous Meat Generator',
    'Book of Illusions',
    'Cold Iron Manacles',
    'Detachable Gills',
    'Fake Identification',
    'Sack of Trail Rations',
    'Local Isle Map',
    'Pheromone Emitter',
    'Mobile Forge',
    'Healing Salve',
    'Telekinetic Glove',
    'Retractable 20ft Pole',
    'Saddled Sauropod',
    'Scroll of Imperceptibility',
    'Set of Locksmith’s Tools',
    'Spell of Lightning Bolt',
    'Vial of Truth Serum',
    'Ward of Protection',
    'Unlocked Datapad',
]

const asset3 = [
    'Plasma Torch',
    'Radiation Calendar',
    'Attache of Forged Documents',
    'Psychic ID Card',
    'Half-Track Motorcycle',
    'Mole Rat Companion',
    'Screw-On Replacement Head',
    'Hired Coachmen',
    'Hired Guard',
    'Hired Torchbearer',
    'Trunk of Costumes',
    'Auto-Inflatable Airship',
    '3D Paint Brush',
    'Cerebral Stack Implant',
    'Large Riding Bird',
    'Pet Nanosaurus',
    'Indentured Laborer',
    'Bottle of Pain Suppressants',
    'Ancient Star Charts',
    'Textbook on Pseudophysics'
]

const asset4 = [
    'Bag of Replenishing Meat',
    'Cloth of Dematerialization',
    'Detachable Mouth',
    'Elastic Limbs',
    'Expandable Belly Button',
    'Flying Tea Saucer',
    'Glyph of Anti-Friction',
    'Gullibility Goop',
    'Inefficient Duplicator',
    'Magic Magnet',
    'Material Transmuter',
    'Permeable Pitons',
    'Reality Virtualizers',
    'Remote-Seeing Eyeball',
    'Sentient Gauntlet',
    'Spell of Mind Melding',
    'Stone of Fog',
    'Teleportation Incantation',
    'Turbo Inhaler',
    'Universal Translator'    
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
    <div style="flex: 1 1 100%;">
    <h2 style="font-size:1.5em">Attributes</h2>
    </div>
    <div style="flex: 1 1 100%;display:flex;flex-direction:row;">
    </div>
    <div style="flex: 1 1 100%;display:flex;flex-direction:row;">
    <div style="flex: 1 1 33%"><h3>Physical</h3><img src=images/${stats[0]}.jpg width="120" height="120"><br>${stats[0]}</div>
    <div style="flex: 1 1 33%"><h3>Mental</h3><img src=images/${stats[1]}.jpg width="120" height="120"><br>${stats[1]}</div>
    <div style="flex: 1 1 33%"><h3>Social</h3><img src=images/${stats[2]}.jpg width="120" height="120"><br>${stats[2]}</div>
    </div>
    <div style="display:flex;flex-direction:row;">
    <div style="flex:1 1 50%"><h2>Traits</h2>
    <div style="text-align:left;flex:50%;padding-left: 20px;">
    &#9679; ${randomItem(trouble_table)}<br>
    &#9679; ${randomItem(personality_table)}<br>
    &#9679; ${randomItem(appearance_table)}<br>
    &#9679; ${randomItem(background_table)}<br>
    &#9679; ${randomItem(motivation_table)}<br>
    </div></div>
    <div style="flex:50%"><h2>Assets</h2>
    <div style="text-align:left;padding-left: 20px;">
    &#9675; ${randomItem(asset1)}<br>
    &#9675; ${randomItem(asset2)}<br>
    &#9675; ${randomItem(asset3)}<br>
    &#9675; ${randomItem(asset4)}<br>
    &#9675; __________________<br>
    &#9675; __________________<br>
    &#9675; __________________<br>
    </div></div></div>
    <div style="min-height:50px;"></div>`;
}


function newActor() {
    var elem = document.getElementById('actorDisplay');
    elem.innerHTML = formatActor();
}