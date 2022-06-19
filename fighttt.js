function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  
    function fight(attacker1, attacker2) {
      while (attacker1.health > 0 && attacker2.health > 0) {
        attacker2.health -= attacker1.damagePerAttack
        console.log(`${attacker1.name} attacks ${attacker2.name}; ${attacker2.name} now has ${attacker2.health} health.`)
        if (attacker2.health <= 0) {
          console.log(`${attacker1.name} wins.`)
          return attacker1.toString()
        }
        attacker1.health -= attacker2.damagePerAttack
        console.log(`${attacker2.name} attacks ${attacker1.name}; ${attacker1.name} now has ${attacker1.health} health.`)
        if (attacker1.health <= 0) {
          console.log(`${attacker2.name} wins.`)
          return attacker2.toString()
        }
      }
    }
    return fighter1.name === firstAttacker ? fight(fighter1, fighter2) : fight(fighter2, fighter1)
}

declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")

declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")

declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")

declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")

declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")

declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")