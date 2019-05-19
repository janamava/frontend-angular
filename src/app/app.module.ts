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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { TestComponent } from './task-manager/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    TaskManagerComponent,
    ChessboardComponent,
    HomeComponent,
    HomeTasksComponent,
    ExistingComponent,
    FinishedComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
