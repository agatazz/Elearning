import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { from } from 'rxjs';
import { AuthService } from '_services/Auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from '_services/Error';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExercisesListComponent } from './exercises-list/exercises-list.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { StartPageComponent } from './start-page/start-page.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ValuesCardComponent } from './exercises/values-card/values-card.component';
import { ExercisesDetailedComponent } from './exercises/exercises-detailed/exercises-detailed.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ExercisesListComponent,
      AddExerciseComponent,
      StartPageComponent,
      ValuesCardComponent,
      ExercisesDetailedComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
