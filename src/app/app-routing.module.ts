import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DokonekoComponent } from './dokoneko/dokoneko.component';
import { AnotherdayComponent } from './anotherday/anotherday.component';
import { GirlmoriComponent } from './girlmori/girlmori.component';

const routes: Routes = [
{ path: '', component: MainComponent},
{ path: 'main', component: MainComponent},
{ path: "about", component:AboutComponent},
{ path: "portfolio", component:PortfolioComponent},
{ path: "dokoneko", component:DokonekoComponent},
{ path: "anotherday", component:AnotherdayComponent},
{ path: "girlmori", component:GirlmoriComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
