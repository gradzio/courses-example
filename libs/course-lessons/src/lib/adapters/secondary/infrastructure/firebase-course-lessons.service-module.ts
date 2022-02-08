import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseCourseLessonsService } from './firebase-course-lessons.service';
import { SETS_COURSE_LESSONS_DTO } from '../../../application/ports/secondary/sets-course-lessons-dto.port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseCourseLessonsService, { provide: SETS_COURSE_LESSONS_DTO, useExisting: FirebaseCourseLessonsService }],
  	exports: [] })
export class FirebaseCourseLessonsServiceModule {
}
