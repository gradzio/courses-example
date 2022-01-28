import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { CoursesListComponentModule, CoursesStateModule, FirebaseCoursesServiceModule } from '@courses/courses';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoursesListComponentModule,
    FirebaseCoursesServiceModule,
    CoursesStateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
