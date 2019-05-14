import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ChessboardComponent } from './chessboard/chessboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    TaskManagerComponent,
    ChessboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
