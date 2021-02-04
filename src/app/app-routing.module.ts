import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DrinkslistComponent} from '../app/drinkslist/drinkslist.component';
import{DrinksDescriptionComponent} from '../app/drinks-description/drinks-description.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cocktail-list' },
  { path: 'cocktail-list', component: DrinkslistComponent },
  { path: 'cocktail-details/:cocktail-id', component: DrinksDescriptionComponent },
  { path: 'drinkdescription', component: DrinksDescriptionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
