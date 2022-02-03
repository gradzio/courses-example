import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { CoursesListComponentModule, CoursesStateModule, FirebaseCoursesServiceModule } from '@courses/courses';
import { AddLessonFormComponentModule} from "@courses/lessons"
import { FirebaseLessonsServiceModule, LessonsStateModule } from '@courses/lessons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoursesListComponentModule,
    FirebaseCoursesServiceModule,
    CoursesStateModule,
    AddLessonFormComponentModule,
    FirebaseLessonsServiceModule,
    LessonsStateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
