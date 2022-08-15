// Soldier
class Soldier {
    constructor(health, strength){
    this.health = health
    this.strength = strength
    }

    attack(){

        return this.strength

    }

    receiveDamage(damage){

    this.health -= damage

    }


}

// Viking
class Viking extends Soldier{

    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }

   
    receiveDamage(damage){
      
        this.health -= damage

        if (this.health > 0){

          return `${this.name} has received ${damage} points of damage`
        
        } else if(this.health <= 0){

            return `${this.name} has died in act of combat`

        }
        

    }

    battleCry(){

        return "Odin Owns You All!"
        
    }

}

// Saxon
class Saxon extends Soldier{

    constructor(health, strength){
        super(health, strength)
    }
    
    receiveDamage(damage){

        this.health -= damage

        if (this.health > 0){

          return `A Saxon has received ${damage} points of damage`
        
        }else if (this.health <= 0){

            return `A Saxon has died in combat`
          
          }

    }

}

// War
class War {

    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }

   addViking(viking){

    this.vikingArmy.push(viking)

   }

   addSaxon(saxon){

    this.saxonArmy.push(saxon)
    
   }

   vikingAttack(){

    let vattacker = Math.floor(Math.random() * this.saxonArmy.length);
    let sattacker = Math.floor(Math.random() * this.vikingArmy.length);

    let viking = this.vikingArmy[vattacker]
    let saxon = this.saxonArmy[sattacker]

    let result = saxon.receiveDamage(viking.attack())

    if (saxon.health <= 0){

        this.saxonArmy.splice(vattacker,1)
    }

    return result
    
   }

   saxonAttack(){

    let sattacker = Math.floor(Math.random() * this.saxonArmy.length);
    let vattacker = Math.floor(Math.random() * this.vikingArmy.length);

    let saxon = this.vikingArmy[vattacker]
    let viking = this.saxonArmy[sattacker]

    let result = viking.receiveDamage(saxon.attack())

    if (viking.health <= 0){

        this.vikingArmy.splice(vattacker,1)
    }

    return result
    
   }

   showStatus(){

    if(!this.saxonArmy.lenght){

        return "Vikings have won the war of the century!"

    }

    if(!this.vikingArmy.lenght){

        return "Saxons have fought for their lives and survived another day..."

    }

    if(this.vikingArmy.lenght >= 1 && this.saxonArmy.lenght >=1){

        return "Vikings and Saxons are still in the thick of battle."

    }

   }

}

