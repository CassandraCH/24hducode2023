import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import { environment } from "../environments/environment";
import {Items} from "../models/Items";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = environment.urlRequete;

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    console.log("error")
    console.log(error)
    if (error.status === 0) {
      console.error('Une erreur est survenue : ', error.error);
    }
    else if(error.status === 401){
      console.error(error.message);
      return throwError(
          () => new Error(error.message)
      );
    }
    else {
      console.error(
        `Le backend a retourné une erreur avec le statut ${error.status} : `,
        error.error
      );
    }
    return throwError(
      () => new Error('Une erreur est survenue. Veuillez réessayer plus tard.')
    );
  }

  get<T>(url: string) : Observable<T[]> {
    return this.http
        .get<T[]>(this.apiUrl + url)
        .pipe(catchError(this.handleError));
  }

  getWithOptions<T>(url: string, options : {headers: HttpHeaders}) : Observable<T[]> {
    return this.http
        .get<T[]>(this.apiUrl + url, options)
        .pipe(catchError(this.handleError));
  }

  post(url: string, body : any) : Observable<any> {
    return this.http
        .post(this.apiUrl + url, body)
        .pipe(catchError(this.handleError));
  }

  // GET liste des operations
  getAllItems(): Observable<Items[]> {
    return this.get("items");
  }


  // GET liste opérations d'une personne
  /*getOperationsOfPersonne(personne : string) : Observable<Operation[]> {
    let header = new HttpHeaders();
    header = header.set("personne", personne);
    return this.getWithOptions("operationPersonne", {headers: header});
  }*/

  getPlanification(personne : string,operation : string,competence : string) : any {
    let header = new HttpHeaders();
    header = header.set("personne", personne);
    header = header.set("competence",competence);
    header = header.set("operation",operation);
    return this.getWithOptions("plannificationPersonne", {headers: header});
  }

  getCompetencePersonne(personne : string,competence : string) : any {
    let header = new HttpHeaders();
    header = header.set("personne", personne);
    header = header.set("competence",competence);
    return this.getWithOptions("personne_competence", {headers: header});
  }

}
