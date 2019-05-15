import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { HomeComponent } from './home/home.component';
import { HomeTasksComponent } from './task-manager/home-tasks/home-tasks.component';
import { ExistingComponent } from './task-manager/existing/existing.component';
import { FinishedComponent } from './task-manager/finished/finished.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    TaskManagerComponent,
    ChessboardComponent,
    HomeComponent,
    HomeTasksComponent,
    ExistingComponent,
    FinishedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
