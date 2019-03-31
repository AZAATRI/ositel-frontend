import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactionStatsComponent } from './transaction-stats/transaction-stats.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TransactionStatsComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
