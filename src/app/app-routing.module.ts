import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';

const routes: Routes = [
  {path: 'chessboard', component: ChessboardComponent },
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'task-manager', component: TaskManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
