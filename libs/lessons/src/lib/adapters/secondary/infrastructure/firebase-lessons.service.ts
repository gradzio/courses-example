import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsLessonDtoPort } from '../../../application/ports/secondary/adds-lesson-dto.port';
import { LessonDTO } from '../../../application/ports/secondary/lesson.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllLessonDtoPort } from '../../../application/ports/secondary/gets-all-lesson-dto.port';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseLessonsService implements AddsLessonDtoPort, GetsAllLessonDtoPort {

  constructor(private _client: AngularFirestore) {}

  add(lesson: Omit<LessonDTO,"id">): void {
    this._client.collection('lessons').add(lesson);
  }

  getAll(criterion: Partial<LessonDTO>): Observable<LessonDTO[]> {
    return this._client.collection<LessonDTO>('lessons').valueChanges(({idField: 'id'})).pipe(map(data => filterByCriterion(data, criterion)));
  }
}
