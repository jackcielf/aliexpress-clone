import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MiniCardComponent } from './shared/components/mini-card/mini-card.component';
import { MediumCardComponent } from './shared/components/medium-card/medium-card.component';
import { BigCardComponent } from './shared/components/big-card/big-card.component';
import { OfferFirstPurchaseComponent } from './shared/components/offer-first-purchase/offer-first-purchase.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list'; 
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './shared/components/dialog/dialog.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MiniCardComponent,
    MediumCardComponent,
    BigCardComponent,
    OfferFirstPurchaseComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
