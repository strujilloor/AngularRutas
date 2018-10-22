import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import {FormsModule} from '@angular/forms';
import {TaskService} from './services/task.service';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'task-form', component: TaskFormComponent },
    { path: 'task-list', component: TaskListComponent },
    { path: 'task/:title/:description', component: TaskComponent },
    { path: '',
        redirectTo: '/task-form',
        pathMatch: 'full'
    }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TaskComponent,
    TaskListComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
