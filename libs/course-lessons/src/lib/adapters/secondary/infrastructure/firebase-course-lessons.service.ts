import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SetsCourseLessonsDtoPort } from '../../../application/ports/secondary/sets-course-lessons-dto.port';
import { CourseLessonsDTO } from '../../../application/ports/secondary/course-lessons.dto';
import { Observable } from 'rxjs';
import { GetsOneCourseLessonsDtoPort } from '../../../application/ports/secondary/gets-one-course-lessons-dto.port';
import { CourseLessonDTO } from '../../../application/ports/secondary/course-lesson.dto';

@Injectable()
export class FirebaseCourseLessonsService
  implements SetsCourseLessonsDtoPort, GetsOneCourseLessonsDtoPort
{
  constructor(private _client: AngularFirestore) {}

  set(courseLessons: Partial<CourseLessonsDTO>): void {
    this._client.doc('course-lessons/' + courseLessons.id).set(courseLessons);
  }

  getOne(id: string): Observable<CourseLessonsDTO | undefined> {
    return this._client
      .doc<CourseLessonsDTO>('course-lessons/' + id)
      .valueChanges({ idField: 'id' });
  }
}
