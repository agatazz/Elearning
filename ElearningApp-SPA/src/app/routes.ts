import {Routes}from'@angular/router';
import { HomeComponent } from './home/home.component';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { StartPageComponent } from './start-page/start-page.component';
import { SecurityGuard } from './routingSecurity/security.guard';
import { ExercisesDetailedComponent } from './exercises/exercises-detailed/exercises-detailed.component';

export const appRoutes:Routes=[
    {path: 'home',component: HomeComponent},
    {path: 'startpage',component: StartPageComponent,canActivate: [SecurityGuard]},
    {path: 'exercises',component: ExercisesListComponent,canActivate: [SecurityGuard]},
    {path: 'exercises/:id',component: ExercisesDetailedComponent,canActivate: [SecurityGuard]},
    {path: 'add',component: AddExerciseComponent,canActivate: [SecurityGuard]},
    {path: '**',redirectTo :'home', pathMatch:'full'},
];
