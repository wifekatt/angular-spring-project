import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDialogComponent } from './admin/admin-dialog/admin-dialog.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CandidatListComponent } from './candidat-list/candidat-list/candidat-list.component';
import { CandidatComponent } from './candidat/candidat/candidat.component';
import { ElecteurComponent } from './electeur/electeur/electeur.component';
import { HomeComponent } from './home/home.component';
import { UrnesComponent } from './urnes/urnes/urnes.component';
import { VoteComponent } from './vote/vote/vote.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'urnes', component: UrnesComponent },
  { path: 'admins', component: AdminComponent },
  { path: 'electeurs', component: ElecteurComponent },
  { path: 'candidats', component: CandidatComponent },
  { path: 'candidatList', component: CandidatListComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'admindialog', component: AdminDialogComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
