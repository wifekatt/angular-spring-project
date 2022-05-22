import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDialogComponent } from './admin/admin-dialog/admin-dialog.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CandidatComponent } from './candidat/candidat/candidat.component';
import { CandidatDialogComponent } from './candidat/candidat-dialog/candidat-dialog.component';
import { CandidatListComponent } from './candidat-list/candidat-list/candidat-list.component';
import { CandidatListDialogComponent } from './candidat-list/candidat-list-dialog/candidat-list-dialog.component';
import { UrnesComponent } from './urnes/urnes/urnes.component';
import { VoteComponent } from './vote/vote/vote.component';
import { VoteDialogComponent } from './vote/vote-dialog/vote-dialog.component';
import { ElecteurComponent } from './electeur/electeur/electeur.component';
import { ElecteurDialogComponent } from './electeur/electeur-dialog/electeur-dialog.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDialogComponent,
    AdminComponent,
    CandidatComponent,
    CandidatDialogComponent,
    CandidatListComponent,
    CandidatListDialogComponent,
    UrnesComponent,
    VoteComponent,
    VoteDialogComponent,
    ElecteurComponent,
    ElecteurDialogComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
