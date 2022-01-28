import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllCourseDtoPort } from '../../../application/ports/secondary/gets-all-course-dto.port';
import { CourseDTO } from '../../../application/ports/secondary/course.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsCourseDtoPort } from '../../../application/ports/secondary/adds-course-dto.port';
import { RemovesCourseDtoPort } from '../../../application/ports/secondary/removes-course-dto.port';

@Injectable()
export class FirebaseCoursesService implements GetsAllCourseDtoPort, AddsCourseDtoPort, RemovesCourseDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<CourseDTO>): Observable<CourseDTO[]> {
    return this._client
      .collection<CourseDTO>('courses')
      .valueChanges({ idField: 'id' })
      .pipe(map((data) => filterByCriterion(data, criterion)));
  }

  add(item: Partial<CourseDTO>): void {
    this._client.collection('courses').add(item);
  }

  remove(id: string): void {
    this._client.doc('courses/'+id).delete();
  }
}
