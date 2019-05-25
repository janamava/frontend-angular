import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { HomeComponent } from './home/home.component';
import { HomeTasksComponent } from './task-manager/home-tasks/home-tasks.component';
import { ExistingComponent } from './task-manager/existing/existing.component';
import { FinishedComponent } from './task-manager/finished/finished.component';

const routes: Routes = [

  { path: 'chessboard', component: ChessboardComponent },
  { path: 'portfolio', component: PortfolioComponent },
  {
    path: 'task-manager', component: TaskManagerComponent, children: [
      { path: '', redirectTo: 'home-tasks', pathMatch: 'full' },
      { path: 'home-tasks', redirectTo: 'task-manager', pathMatch: 'full' },
      { path: 'existing', component: ExistingComponent },
      { path: 'finished', component: FinishedComponent }

    ]
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
