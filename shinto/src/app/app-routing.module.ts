import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
  { path:'home', component: BodyComponent },
  { path:'mine', component: MineComponent },
  { path:'buy', component: BuyComponent },
  { path:'sell', component: SellComponent },
  { path:'browse', component: BrowseComponent },
  { path: '', pathMatch: 'full', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
