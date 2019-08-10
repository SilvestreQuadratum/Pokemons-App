import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const pokemons = [
      { 
        id: 1, name: "Beedrill", types: ["Bug","Poison"], height: 1,
        weight: 29.5, genderMale: true, genderFemale: true, category: ["Poison Bee"],        
        abilities: ["Swarm"], weaknesses: ["Fire","Flying","Psychic","Rock"],
        hp: 3, attack: 5, defense: 2,
        specialAttack: 2, specialDefense: 3,
        speed: 4, description: "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
        image: "assets/images/pokemons/Beedrill.png", rarity: "Rare"
      },  
      { 
        id: 2, name: "Pikachu", types: ["Electric"], height: 0.4,
        weight: 6, genderMale: true, genderFemale: true, category: ["Mouse"],        
        abilities: ["Static"], weaknesses: ["Ground"],
        hp: 2, attack: 3, defense: 2,
        specialAttack: 2, specialDefense: 2,
        speed: 5, description: "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
        image: "assets/images/pokemons/Pikachu.png", rarity: "Usual" 
      }, 
      { 
        id: 3, name: "Arcanine", types: ["Fire"], height: 1.9,
        weight: 155, genderMale: true, genderFemale: true, category: ["Legendary"],        
        abilities: ["Intimidate","Flash Fire"], weaknesses: ["Ground","Rock","Water"],
        hp: 4, attack: 6, defense: 4,
        specialAttack: 5, specialDefense: 3,
        speed: 5, description: "Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power.",
        image: "assets/images/pokemons/Arcanine.png", rarity: "Rare" 
      },
      { 
        id: 4, name: "Victreebel", types: ["Grass","Poison"], height: 1.7,
        weight: 15.5, genderMale: true, genderFemale: true, category: ["Flycatcher"],        
        abilities: ["Chlorophyll"], weaknesses: ["Fire","Flying","Ice","Psychic"],
        hp: 3, attack: 5, defense: 3,
        specialAttack: 5, specialDefense: 3,
        speed: 4, description: "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.",
        image: "assets/images/pokemons/Victreebel.png", rarity: "VeryRare" 
      }, 
      { 
        id: 5, name: "Slowbro", types: ["Water","Psychic"], height: 1.6,
        weight: 78.5, genderMale: true, genderFemale: true, category: ["Hermit Crab"],        
        abilities: ["Oblivious","Own Tempo"], weaknesses: ["Bug","Dark","Electric","Ghost","Grass"],
        hp: 4, attack: 4, defense: 5,
        specialAttack: 5, specialDefense: 3,
        speed: 2, description: "Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead.",
        image: "assets/images/pokemons/Slowbro.png", rarity: "Rare" 
      },
      { 
        id: 6, name: "Weezing", types: ["Poison"], height: 1.2,
        weight: 9.5, genderMale: true, genderFemale: true, category: ["Poison Gas"],        
        abilities: ["Levitate"], weaknesses: ["Psychic"],
        hp: 3, attack: 5, defense: 5,
        specialAttack: 4, specialDefense: 3,
        speed: 3, description: "Weezing loves the gases given off by rotted kitchen garbage. This Pokémon will find a dirty, unkempt house and make it its home. At night, when the people in the house are asleep, it will go through the trash.",
        image: "assets/images/pokemons/Weezing.png", rarity: "Usual" 
      }, 
      { 
        id: 7, name: "Pinsir", types: ["Bug"], height: 1.5,
        weight: 55, genderMale: true, genderFemale: true, category: ["Stag Beetle"],        
        abilities: ["Hyper Cutter","Mold Breaker"], weaknesses: ["Fire","Flying","Rock"],
        hp: 3, attack: 6, defense: 4,
        specialAttack: 3, specialDefense: 3,
        speed: 5, description: "Pinsir is astoundingly strong. It can grip a foe weighing twice its weight in its horns and easily lift it. This Pokémon's movements turn sluggish in cold places.",
        image: "assets/images/pokemons/Pinsir.png", rarity: "Rare" 
      },  
      { 
        id: 8, name: "Jolteon", types: ["Electric"], height: 0.8,
        weight: 24.5, genderMale: true, genderFemale: true, category: ["Lightning"],        
        abilities: ["Volt Absorb"], weaknesses: ["Ground"],
        hp: 3, attack: 3, defense: 3,
        specialAttack: 5, specialDefense: 4,
        speed: 7, description: "Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.",
        image: "assets/images/pokemons/Jolteon.png", rarity: "Rare" 
      },
      { 
        id: 9, name: "Dragonite", types: ["Dragon","Flying"], height: 2.2,
        weight: 210, genderMale: true, genderFemale: true, category: ["Dragon"],        
        abilities: ["Inner Focus"], weaknesses: ["Ice","Dragon","Rock","Fairy"],
        hp: 4, attack: 7, defense: 4,
        specialAttack: 5, specialDefense: 4,
        speed: 4, description: "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.",
        image: "assets/images/pokemons/Dragonite.png", rarity: "Epic" 
      }, 
      { 
        id: 10, name: "Ninetales", types: ["Flying"], height: 1.1,
        weight: 19.9, genderMale: true, genderFemale: true, category: ["Fox"],        
        abilities: ["Flash Fire"], weaknesses: ["Ground","Rock","Water"],
        hp: 3, attack: 4, defense: 3,
        specialAttack: 4, specialDefense: 4,
        speed: 5, description: "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.",
        image: "assets/images/pokemons/Ninetales.png", rarity: "Legendary" 
      }        
    ];
    return {pokemons};
  }
  
}
