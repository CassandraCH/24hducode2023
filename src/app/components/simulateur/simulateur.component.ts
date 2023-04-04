import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { CalculTimeService } from 'src/app/services/calcultime.service';
import { Vehicle } from 'src/app/models/Vehicle';
import { Races } from 'src/app/models/Races';

@Component({
  selector: 'app-simulateur',
  templateUrl: './simulateur.component.html',
  styleUrls: ['./simulateur.component.css']
})
export class SimulateurComponent {

  calculTime: CalculTimeService;
  voiture:string="";
  circuitid:number=1;
  resultat:number=0;

  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJITlhWT3dMMVNwaXRINmh0Q052aVJPSjlrcjFSd05PM3NqckVqbTdlWUswIn0.eyJleHAiOjE2ODA0Mjc5NDgsImlhdCI6MTY4MDQwNjM0OCwianRpIjoiNTkxYzAxMDUtN2FjMi00YmIzLWE4MDEtNWNkMDRiNGY0YTAwIiwiaXNzIjoiaHR0cDovLzE4NS45OC4xMzYuNjA6ODA4MC9yZWFsbXMvY29kZWxlbWFucyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiZjM4YjAxNi1jZTNkLTRjMDMtOTdiNC0yNTYxY2MzNDBiNTMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhcHAtZGVmaS0yNGgiLCJzZXNzaW9uX3N0YXRlIjoiMTA5NDg4ODItY2UzNy00NzQ4LThiNjMtM2IwOGVmZTdhODVkIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtY29kZWxlbWFucyIsInVtYV9hdXRob3JpemF0aW9uIiwidXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjEwOTQ4ODgyLWNlMzctNDc0OC04YjYzLTNiMDhlZmU3YTg1ZCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJsZXMtaW5mb3RlbGllbiIsInRlYW1faWQiOiIxNiIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsInRlYW1fbmFtZSI6IkxlcyBJbmZvdGVsaWVuIn0.YxGTkQrDE0PD5VITH1n7o-PA7nAcwBQBLnAslpOOJ-DqMtjLgeGeIl6jIH2jgqOEdUhbi9EiEaPF-5a9Z5wo5iA92z5oNovPV0q9Fu88pKJjhlSxREwI61nHl-g7LMQH1raEO9RvPIDhcDNUi2pIu9TGMWDCnvJ9o6kbJZsy9a8YvIMyGI2wtAB62g-SszPgjXeJF1V5s_LrcXLuRUCQyaiDFYKmXmmbeRyGSE9WBA3H8Cexco06CN7fl19a4_QW2dYOfbaux8IpbnuoMJTm1tqE_PpmbbdkeLrkXVKQboEs3K5gCnQfpEVQT-_5aj_iI519BAdGNFvn6VfWbTzYGA'
  })

  constructor(private http_client: HttpClient, calculTime : CalculTimeService) {
    this.calculTime=calculTime;
  }

  ngOnInit(): void {

  }

  get<T>(url: string, options : {headers : HttpHeaders}) : Observable<T> {
    return this.http_client
      .get<T>("http://185.98.136.60:9090/" + url, options)
  }

  courrir(): void {
    this.get<Races>("races/"+this.circuitid, {headers : this.header}).subscribe({
      next: (race) => {
        let stat:Vehicle
        if(this.voiture=="voiture1"){
          stat={
            acceleration:1,
            grip:1,
            handlingAbility:1,
            power:1,
            weight:100,
            wear:0,
            energyConsumption:0
          }
        }else{
          stat={
            acceleration:60,
            grip:60,
            handlingAbility:60,
            power:60,
            weight:0,
            wear:0,
            energyConsumption:0
          }
        }
        console.log(stat)
        this.resultat = Math.round(this.calculTime.calculTime(race, stat));

      },
      error: () => {
      },
    });
  }

}
