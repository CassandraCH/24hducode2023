import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiCallerService} from "../../services/api-caller.service";
import {Observable} from "rxjs";
import {Teams} from "../../models/Teams";
import {Vehicle} from "../../models/Vehicle";
import {Items} from "../../models/Items";
import {InventoryItems} from "../../models/InventoryItems";

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent {
  ourTeam : Teams = {};
  vehicle : Vehicle = {};
  iventory : InventoryItems[] = []
  header: HttpHeaders = this.service.getHeader();
  isLoading: boolean = true;


  constructor(private http_client: HttpClient, private service : ApiCallerService) { }

  ngOnInit(){
    this.isLoading = true;
    this.getTeamsInfo();
    this.getInventory();
  }

  get<T>(url: string, options : {headers : HttpHeaders }) : Observable<T> {
    return this.http_client
      .get<T>("http://185.98.136.60:9090/" + url, options)
  }

  getTeamsInfo(): void {
    this.get<any>("teams/16", {headers : this.header}).subscribe({
      next: (team) => {
        this.ourTeam = team;
        this.vehicle = team.vehicle;
      },
      error: () => {
      },
    });
  }

  getInventory(): void {
    this.get<any>("teams/16/inventory", {headers : this.header}).subscribe({
      next: (itemsList) => {
        this.iventory = itemsList.items;
        console.log(this.iventory)
      },
      error: () => {
      },
    }).add(() => {this.isLoading = false;});
  }

  setEquipement(id: number): void{
    console.log(typeof id)
    let url: string = "http://185.98.136.60:9090/teams/16/inventory/equip/"+id.toString()
    this.http_client.put(url, {},{headers : this.header}).subscribe(
      data => console.log(data+" a été équipé!")
    )
  }

}
