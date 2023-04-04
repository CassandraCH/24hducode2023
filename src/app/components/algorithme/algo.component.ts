import {Component} from '@angular/core';
import {Time} from "../../models/Time";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { CalculTimeService } from 'src/app/services/calcultime.service';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.css']
})
export class AlgoComponent {

  times: Time[] = [];

  calculTime: CalculTimeService;

  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJITlhWT3dMMVNwaXRINmh0Q052aVJPSjlrcjFSd05PM3NqckVqbTdlWUswIn0.eyJleHAiOjE2ODA0Mjc5NDgsImlhdCI6MTY4MDQwNjM0OCwianRpIjoiNTkxYzAxMDUtN2FjMi00YmIzLWE4MDEtNWNkMDRiNGY0YTAwIiwiaXNzIjoiaHR0cDovLzE4NS45OC4xMzYuNjA6ODA4MC9yZWFsbXMvY29kZWxlbWFucyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiZjM4YjAxNi1jZTNkLTRjMDMtOTdiNC0yNTYxY2MzNDBiNTMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhcHAtZGVmaS0yNGgiLCJzZXNzaW9uX3N0YXRlIjoiMTA5NDg4ODItY2UzNy00NzQ4LThiNjMtM2IwOGVmZTdhODVkIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtY29kZWxlbWFucyIsInVtYV9hdXRob3JpemF0aW9uIiwidXNlciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjEwOTQ4ODgyLWNlMzctNDc0OC04YjYzLTNiMDhlZmU3YTg1ZCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJsZXMtaW5mb3RlbGllbiIsInRlYW1faWQiOiIxNiIsImdpdmVuX25hbWUiOiIiLCJmYW1pbHlfbmFtZSI6IiIsInRlYW1fbmFtZSI6IkxlcyBJbmZvdGVsaWVuIn0.YxGTkQrDE0PD5VITH1n7o-PA7nAcwBQBLnAslpOOJ-DqMtjLgeGeIl6jIH2jgqOEdUhbi9EiEaPF-5a9Z5wo5iA92z5oNovPV0q9Fu88pKJjhlSxREwI61nHl-g7LMQH1raEO9RvPIDhcDNUi2pIu9TGMWDCnvJ9o6kbJZsy9a8YvIMyGI2wtAB62g-SszPgjXeJF1V5s_LrcXLuRUCQyaiDFYKmXmmbeRyGSE9WBA3H8Cexco06CN7fl19a4_QW2dYOfbaux8IpbnuoMJTm1tqE_PpmbbdkeLrkXVKQboEs3K5gCnQfpEVQT-_5aj_iI519BAdGNFvn6VfWbTzYGA'
  })

  constructor(private http_client: HttpClient, calculTime : CalculTimeService) { 
    this.calculTime=calculTime;
  }

  ngOnInit(): void {
    this.getTimeList();
  }

  get<T>(url: string, options : {headers : HttpHeaders}) : Observable<T[]> {
    return this.http_client
      .get<T[]>("http://185.98.136.60:9090/" + url, options)
  }

  updateCalculated(){
    this.times.forEach(element => {
      element.timeCalculated = this.calculTime.calculTime(element.race, element.stats);
    });
  }

  getTimeList(): void {
    this.get<Time>("teams/16/allTimes", {headers : this.header}).subscribe({
      next: (timeList) => {
        console.log(timeList)
        this.times = timeList;
        this.times.sort((a, b) => a.race.name > b.race.name ? 1 : -1);
        this.updateCalculated();
      },
      error: () => {
      },
    });
  }

}
