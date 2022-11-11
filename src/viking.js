// Soldier
class Soldier {
    
    constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    }

    attack(){
    return this.strength;
    }

    receiveDamage(){
        this.health -= damage;
    }
}

// Viking
class Viking {

    constructor (name, health, strength){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage;
        return this.health <= 0 ? `${this.name} has died in act of combat`:
            `${this.name} has received ${damage} points of damage`;
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier{

    receiveDamage (damage) {
        this.health -= damage;
        return this.health <=0 ? "A Saxon has died in combat" : 
            `A Saxon has received ${damage} points of damage`;
    }

}

// War
class War {}
