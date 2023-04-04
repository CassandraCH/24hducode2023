import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Races} from "../../models/Races";
import {ApiCallerService} from "../../services/api-caller.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent {
  name : string = "";
  raceList : Races[] = [];
  header = this.service.getHeader();
  isLoading: boolean = true;
  displayedColumns: string[] = ['ID', 'NOM', 'MEDAILLE' ,'IMAGE', 'Participer'];


  constructor(private http_client: HttpClient, private service : ApiCallerService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getRaceList();
  }

  get<T>(url: string, options : {headers : HttpHeaders}) : Observable<T[]> {
    return this.http_client
      .get<T[]>("http://185.98.136.60:9090/" + url , options)
  }

  getRaceList(): void {
    this.get<Races>("races/all/16", {headers : this.header}).subscribe({
      next: (racesList) => {
        this.raceList = racesList;

        console.log(racesList);
      },
      error: () => {
        this.openSnackBar("ERREUR !", "Fermer");
      },
    }).add(() => {this.isLoading = false;});
  }

  getMedalFromRace(idRace: number): void{
    this.get<Object>("races/" + idRace + "/teamRace/16/allBestTime", {headers : this.header}).subscribe({
      next: (race) => {
        for(let elem of race)
        {
          // @ts-ignore
          if(elem['team']['name'] == "Les Infotelien")
          {
            // @ts-ignore
            this.openSnackBar("Medaille: " + elem['medal'], "Fermer");
          }
        }

      },
      error: () => {
        this.openSnackBar("ERREUR !", "Fermer");
      },
    });
  }

  participerCourse(id: number): void {
    this.get<Object>("races/" + id + "/run/16", {headers : this.header}).subscribe({
      next: (race) => {
        // @ts-ignore
        this.openSnackBar("Vous avez participé a la course " + race['race']['name'] + " avec un temps de " + race['time'] + " secondes.\n Medaille : " +  race['medal'], "Fermer");
      },
      error: (err) => {
        if(err.status == 406){
          this.openSnackBar("ERREUR ! IL MANQUE UNE PIECE A VOTRE VEHICULE !", "Fermer");

        }
      },
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  runAllRaces() {
    for ( let elem of this.raceList)
    {
      this.get<Object>("races/" + elem.id + "/run/16", {headers : this.header}).subscribe({
        next: (race) => {
          // @ts-ignore
          this.openSnackBar("Vous avez participé a la course " + race['race']['name'] + " avec un temps de " + race['time'] + " secondes.\n Medaille : " +  race['medal'], "Fermer");
        },
        error: (err) => {
          if(err.status == 406){
            this.openSnackBar("ERREUR ! IL MANQUE UNE PIECE A VOTRE VEHICULE !", "Fermer");

          }
        },
      });
    }
  }
}
