import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// Components
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {TeamInfoComponent} from "./components/team-info/team-info.component";
import {RacesComponent} from "./components/races/races.component";
import {ItemsMarketComponent} from "./components/items-market/items-market.component";
import {AlgoComponent} from "./components/algorithme/algo.component";
import {SimulateurComponent} from './components/simulateur/simulateur.component';


// Gestion du routing
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // par défaut
  { path: 'home', component: HomeComponent }, // page d'acceuil
  { path: 'team-info', component: TeamInfoComponent },
  { path: 'races', component: RacesComponent },
  { path: 'items-market', component: ItemsMarketComponent },
  { path: 'algo', component: AlgoComponent },// page des resultats de recherche
  { path: 'simulateur', component: SimulateurComponent },// page des resultats de recherche
  { path: 'not-found', component: NotFoundComponent }, // page d'erreur 404
  { path: '**', redirectTo: '/not-found' } // gestion des erreurs de saisie de l'url => page 404
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
