import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import {
  MatNativeDateModule,
  MatSnackBarModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule ,
  MatSortModule, MatTabsModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatMenuModule,
  MatTooltipModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatOptionModule,
  MatSelectModule,
MatTreeModule,
MatChipsModule,
MatBottomSheetModule} from '@angular/material'; // import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5g_QO7b1pBfgl9OtX6vchzZwX1Vmxo2Y' // environment.googleAPIKey,
    }),
    AgmDirectionModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // Main Angular fire module 
    AngularFireDatabaseModule,  // Firebase database module 
    MatTabsModule,
        MatNativeDateModule,
        MatSnackBarModule,
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatOptionModule,
        MatPaginatorModule,
        MatMenuModule,
        MatTooltipModule,
        MatSidenavModule,
        MatListModule,
        MatExpansionModule,
        MatProgressBarModule,
        MatTreeModule,
        MatChipsModule,
        MatDialogModule,
        MatBottomSheetModule,
        MatSelectModule
  ],
  exports: [MatTabsModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSortModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatOptionModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatMenuModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTreeModule,
    MatChipsModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatSelectModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
