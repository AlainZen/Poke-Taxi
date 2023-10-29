class Pokemon {
    constructor(name, attack, defense, hp, luck) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hp = hp;
      this.luck = luck;
    }
  
    isLucky() {
      let i = Math.random();
      if (i < this.luck) {
        return true;
      } else {
        return false;
      }
    }
  
    attackPokemon(target) {
      let damage = this.attack - target.defense;
      damage = Math.max(damage, 0);
      target.hp -= damage;
      console.log(`${this.name} attaque ${target.name} et lui inflige ${damage} dommage.`);
  
      if (target.hp <= 0) {
        console.log(`${target.name} n'a plus de points de vie !`);
      }
    }
  }
  
  let kilian = new Pokemon("Kilian", 79, 57, 300, 12);
  let nicoNicoNIIIII = new Pokemon("nicoNicoNIIIII", 82, 50, 300, 19);
  
  if (kilian.isLucky()) {
    let damageKilian = kilian.attackPokemon(nicoNicoNIIIII);
    nicoNicoNIIIII.hp -= damageKilian;
    console.log(`${kilian.name} attaque ${nicoNicoNIIIII.name} et lui inflige ${damageKilian} dommage.`); 
  } else { 
    console.log(`${kilian.name} a manqué ${nicoNicoNIIIII.name}`);
  
    if (nicoNicoNIIIII.isLucky()) {
      let damageNico = nicoNicoNIIIII.attackPokemon(kilian);
      kilian.hp -= damageNico;
      console.log(`${nicoNicoNIIIII.name} attaque ${kilian.name} et lui inflige ${damageNico} dommage.`); 
    } else { 
      console.log(`${nicoNicoNIIIII.name} a manqué ${kilian.name}`);
    }
  }
  
  if (nicoNicoNIIIII.hp <= 0) {
    console.log(`${nicoNicoNIIIII.name} na plus de points de vie !`);
  }
  
  while (kilian.hp > 0 && nicoNicoNIIIII.hp > 0) {
    kilian.attackPokemon(nicoNicoNIIIII);
    if (nicoNicoNIIIII.hp > 0) {
      nicoNicoNIIIII.attackPokemon(kilian);
    }
  }