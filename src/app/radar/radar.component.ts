import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {

  @Input() set inPokemon(pokemon:Pokemon){ 
    this.pokemon = pokemon;
    let radarChartData: ChartDataSets[] = [
      { data: [this.pokemon.hp, this.pokemon.attack, this.pokemon.defense, this.pokemon.specialAttack, 
        this.pokemon.specialDefense, this.pokemon.speed], label: this.pokemon.name, 
        backgroundColor: "rgba(179,181,198,0.2)",
        borderColor: "rgba(179,181,198,1)",
        pointBackgroundColor: "rgba(179,181,198,1)",
        pointBorderColor: "#fff",
        lineTension: 0,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(179,181,198,1)"}    
    ];   
    this.radarChartData = null;
    this.radarChartData = radarChartData;       
  }  
  
  pokemon: Pokemon = {
    id: 0, name: "Имя", types: [], height: 0, weight: 0, genderMale: false, genderFemale: false, category: [], abilities: [], weaknesses: [], hp: 10, attack: 10, defense: 10,
    specialAttack: 10, specialDefense: 10, speed: 10, description: "", image: "", rarity: "Usual"
  };
    
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    scale: {      
      ticks: {
        beginAtZero: true,
        fontSize: 18,
        max: 10
      },
      pointLabels: {
        fontSize: 20
      }
    },
    legend: {
      labels: {
        fontSize: 20
      }
    } 
  };

  public radarChartLabels: Label[] = ['Здоровье', 'Атака', 'Защита',
   'Спец.Атака', 'Спец.Защита', 'Скорость'];

  public radarChartData: ChartDataSets[] = [
    { data: [this.pokemon.hp, this.pokemon.attack, this.pokemon.defense, this.pokemon.specialAttack, 
      this.pokemon.specialDefense, this.pokemon.speed], label: this.pokemon.name}, {data: [0]}, {data:[10]}    
  ];

  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {     
  }
    
}
