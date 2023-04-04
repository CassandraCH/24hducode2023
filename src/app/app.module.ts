import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatTableModule, MatTableDataSource} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { ItemsMarketComponent } from './components/items-market/items-market.component';
import { RacesComponent } from './components/races/races.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app.routing";
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import { CommonModule } from '@angular/common';
import { AlgoComponent } from './components/algorithme/algo.component';
import { SimulateurComponent } from './components/simulateur/simulateur.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamInfoComponent,
    ItemsMarketComponent,
    RacesComponent,
    HomeComponent,
    NotFoundComponent,
    AlgoComponent,
    NavbarComponent,
    SimulateurComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
