import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseStudentsService } from './firebase-students.service';
import { ADDS_STUDENT_DTO } from '../../../application/ports/secondary/adds-student-dto.port';
import { GETS_ALL_STUDENT_DTO } from '../../../application/ports/secondary/gets-all-student-dto.port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseStudentsService, { provide: ADDS_STUDENT_DTO, useExisting: FirebaseStudentsService }, { provide: GETS_ALL_STUDENT_DTO, useExisting: FirebaseStudentsService }],
  	exports: [] })
export class FirebaseStudentsServiceModule {
}
