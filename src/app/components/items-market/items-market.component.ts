import {Component} from '@angular/core';
import {Items} from "../../models/Items";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiCallerService} from "../../services/api-caller.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-items-market',
  templateUrl: './items-market.component.html',
  styleUrls: ['./items-market.component.css']
})
export class ItemsMarketComponent {
  raretes: string[] = ["Common", "Rare", "Mythical"];
  items: Items[] = [];
  itemsCopy: Items[] = [];
  statut: string = ""
  header: HttpHeaders = this.service.getHeader();
  title = 'SOPRacing';
  selected: any;
  isLoading: boolean = true;

  constructor(private http_client: HttpClient, private service: ApiCallerService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getItemList();
    this.isLoading = true;
  }

  get<T>(url: string, options: { headers: HttpHeaders }): Observable<T[]> {
    return this.http_client
      .get<T[]>("http://185.98.136.60:9090/" + url, options)
  }

  post<T>(url: string, options: { headers: HttpHeaders }): Observable<T[]> {
    return this.http_client
      .post<T[]>("http://185.98.136.60:9090/" + url, options)
  }

  getItemList(): void {
    this.get<Items>("items", {headers: this.header}).subscribe({
      next: (itemsList) => {
        this.items = itemsList;
        this.items.map((item) =>{
          this.getStatutItem(item.id)
          item.statut = this.statut
          this.statut = ""
        })
        this.itemsCopy = this.items;
      },
      error: () => {
      },
    }).add(() => {this.isLoading = false;});
  }

  vendreItemMarketplace(id: number): void {
    this.post<Object>("items/sell/" + id + "marketplace", {headers: this.header}).subscribe({
      next: () => {
        // @ts-ignore
        this.openSnackBar("Vous avez bien mis en vente votre objet sur le market place", "Fermer");
      },
      error: () => {
      },
    });
  }

  vendreItemTeams(id: number): void {
    this.post<Object>("items/sell/" + id + "/teams", {headers: this.header}).subscribe({
      next: () => {
        // @ts-ignore
        this.openSnackBar("Vous avez bien mis en vente votre objet aux équipes", "Fermer");
      },
      error: () => {
      },
    });
  }

  acheterItem(id: number): void {

    this.post<Object>("items/buy/" + id + "/16", {headers: this.header}).subscribe({
      next: () => {
        // @ts-ignore
        this.openSnackBar("Vous avez bien mis en vente votre objet sur le market place", "Fermer");
      },
      error: () => {
      },
    });
  }

  getStatutItem(id: number): void {

    this.get<Object>("transactions/" + id, {headers: this.header}).subscribe({
      next: () => {
        //this.statut = result.status;
      },
      error: () => {

      },
    })

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSelect() {
    this.itemsCopy = this.items.filter(x => x.rarity == this.selected);
    console.log(this.selected);
    console.log(this.itemsCopy);
  }

  removeFilter() {
    this.selected = 0;
    this.itemsCopy = [...this.items];
  }
}
