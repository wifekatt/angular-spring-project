import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


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
    SidenavComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
