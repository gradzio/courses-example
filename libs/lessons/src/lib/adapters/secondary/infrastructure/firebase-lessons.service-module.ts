import { NgModule } from '@angular/core';
import { FirebaseLessonsService } from './firebase-lessons.service';
import { ADDS_LESSON_DTO } from '../../../application/ports/secondary/adds-lesson-dto.port';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseLessonsService, { provide: ADDS_LESSON_DTO, useExisting: FirebaseLessonsService }, { provide: ADDS_LESSON_DTO, useExisting: FirebaseLessonsService }],
  	exports: [] })
export class FirebaseLessonsServiceModule {
}
