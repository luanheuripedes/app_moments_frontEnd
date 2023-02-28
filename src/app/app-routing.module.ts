import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'moments/new', component:NewMomentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
