import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseCoursesService } from './firebase-courses.service';
import { GETS_ALL_COURSE_DTO } from '../../../application/ports/secondary/gets-all-course-dto.port';
import { ADDS_COURSE_DTO } from '../../../application/ports/secondary/adds-course-dto.port';
import { REMOVES_COURSE_DTO } from '../../../application/ports/secondary/removes-course-dto.port';
import { GETS_ONE_COURSE_DTO } from '../../../application/ports/secondary/gets-one-course-dto.port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseCoursesService,
    { provide: GETS_ALL_COURSE_DTO, useExisting: FirebaseCoursesService },
    { provide: ADDS_COURSE_DTO, useExisting: FirebaseCoursesService },
    { provide: REMOVES_COURSE_DTO, useExisting: FirebaseCoursesService },
    { provide: GETS_ONE_COURSE_DTO, useExisting: FirebaseCoursesService },
    FirebaseCoursesService,
    { provide: GETS_ALL_COURSE_DTO, useExisting: FirebaseCoursesService },
    FirebaseCoursesService,
    { provide: GETS_ALL_COURSE_DTO, useExisting: FirebaseCoursesService },
    FirebaseCoursesService,
    { provide: GETS_ONE_COURSE_DTO, useExisting: FirebaseCoursesService }
  ],
  exports: [],
})
export class FirebaseCoursesServiceModule {}
