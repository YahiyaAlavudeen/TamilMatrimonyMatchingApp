import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppComponent } from './app.component';
import { SelectingMatchesComponent } from './components/selecting-matches/selecting-matches.component';

const routes: Routes = [
  { path: '', component: HomescreenComponent },
  { path: 'selecting-matches', component: SelectingMatchesComponent },
  { path: 'profile-details', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
