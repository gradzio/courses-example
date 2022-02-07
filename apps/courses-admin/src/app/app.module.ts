import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { CoursesStateModule, FirebaseCoursesServiceModule } from '@courses/courses';
import { AddLessonFormComponentModule, FirebaseLessonsServiceModule, LessonsStateModule } from "@courses/lessons";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirebaseCoursesServiceModule,
    CoursesStateModule,
    AddLessonFormComponentModule,
    FirebaseLessonsServiceModule,
    LessonsStateModule,
    AddLessonFormComponentModule,
    FirebaseLessonsServiceModule,
    LessonsStateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
