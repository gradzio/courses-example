import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsStudentDtoPort } from '../../../application/ports/secondary/adds-student-dto.port';
import { StudentDTO } from '../../../application/ports/secondary/student.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllStudentDtoPort } from '../../../application/ports/secondary/gets-all-student-dto.port';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseStudentsService implements AddsStudentDtoPort, GetsAllStudentDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(student: Partial<StudentDTO>): void {
    this._client.collection('students').add(student);
  }

  getAll(criterion: Partial<StudentDTO> = {}): Observable<StudentDTO[]> {
    return this._client.collection<StudentDTO>('students').valueChanges(({idField: 'id'})).pipe(map(data => filterByCriterion(data, criterion)));
  }
}
