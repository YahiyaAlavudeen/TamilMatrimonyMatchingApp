import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { SelectingMatchesComponent } from './components/selecting-matches/selecting-matches.component';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    ProfileComponent,
    MatchesComponent,
    SelectingMatchesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    MatCardModule,
    MatSnackBarModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    SharedService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
