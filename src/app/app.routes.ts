import { Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { DataSharingService } from './data-sharing.service';
export const routes: Routes = [
	{path:'', redirectTo: "home", pathMatch: 'full'},
	{path:'favorites', component: FavoritesComponent},
	{path:'home', component: HomeComponent}

];
export const appRoutingProviders: any[] = [
	DataSharingService // Fornisci il servizio a livello di applicazione
  ];
