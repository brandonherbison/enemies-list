console.log("My Enemies List!");
console.log("----------------");

const createEnemy = (name, offenses, isReallyHated) => {
    return {
        name: name,
        offenses: offenses,
        isReallyHated: isReallyHated
    }
}

const enemies = [
    createEnemy("Joshua", ["Being a jerk to me in elementary school", "Not being nice to me in elementary school"], true),
    createEnemy("Daniel", ["Not being nice to me in elementary school"], false),
    createEnemy("Brenda", ["Not being nice to me in elementary school"], true),
    createEnemy("Samuel", ["Being a jerk to me in elementary school", "Not being nice to me in elementary school", "Telling on me"], false),
    createEnemy("Betty", ["Being a jerk to me in elementary school", "Not being nice to me in elementary school", "Laughing at me"], true)
]

for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].isReallyHated === true) {
        console.log(`${i + 1}. ${enemies[i].name} (Really, really dislike!)`)
    } else {
        console.log(`${i + 1}. ${enemies[i].name}`)
    }
}

