import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/models/Vehicle';
import { Races } from 'src/app/models/Races';

@Injectable({
  providedIn: 'root'
})
export class CalculTimeService {

  duree: { [type: string] : number } = {
    "Straight": 15,
    "Turn": 30,
    "Sharp turn": 50,
    "Uphill": 35,
    "Downhill": 10
  };

  stand:number=128;
  standpause:number=25;
  maxcap:number=60;
  maxcapweight:number=60;

  constructor() { }

  calculTime(race:Races, vehicle:Vehicle): number{
    let duree : number = 0;
    race.sections.forEach(section => {
      if(section.type=="Straight"){
        duree += this.duree[section.type]
        * (2-((vehicle.power||0)/this.maxcap))
      }
      if(section.type=="Turn"){
        duree += this.duree[section.type]
         * (2-(((vehicle.grip||0)+(vehicle.acceleration||0)+(vehicle.handlingAbility||0))/(this.maxcap*3)))
      }
      if(section.type=="Sharp turn"){
        duree += this.duree[section.type]
         * (2-(((vehicle.handlingAbility||0)+(vehicle.grip||0)+(vehicle.acceleration||0))/(this.maxcap*3)))
      }
      if(section.type=="Uphill"){
        duree += this.duree[section.type]
         * (2-(((vehicle.acceleration||0)+(vehicle.power||0))/this.maxcap*2))
      }
      if(section.type=="Downhill"){
        duree += this.duree[section.type]
         * (2-((vehicle.power||0)/this.maxcap))
      }
    });

    // le poids
    if((vehicle.weight||0)>0){
      duree *= (((vehicle.weight||0)/this.maxcapweight) + 1)
    }
    
    // nombre d'arrêt au stand
    let standtime=(((vehicle.wear || 0)*race.laps)%this.stand)*this.standpause;
    standtime+=(((vehicle.energyConsumption || 0)*race.laps)%this.stand)*this.standpause;

    return duree*race.laps+standtime;
  }

}
