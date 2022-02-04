import { NgModule } from '@angular/core';
import { FirebaseLessonsService } from './firebase-lessons.service';
import { ADDS_LESSON_DTO } from '../../../application/ports/secondary/adds-lesson-dto.port';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { GETS_ALL_LESSON_DTO } from '../../../application/ports/secondary/gets-all-lesson-dto.port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseLessonsService,
    { provide: ADDS_LESSON_DTO, useExisting: FirebaseLessonsService },
    { provide: ADDS_LESSON_DTO, useExisting: FirebaseLessonsService },
    { provide: GETS_ALL_LESSON_DTO, useExisting: FirebaseLessonsService }
  ],
  exports: [],
})
export class FirebaseLessonsServiceModule {}
