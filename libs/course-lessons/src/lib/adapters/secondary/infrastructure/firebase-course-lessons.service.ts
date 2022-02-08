import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { SetsCourseLessonsDtoPort } from '../../../application/ports/secondary/sets-course-lessons-dto.port';
import { CourseLessonsDTO } from '../../../application/ports/secondary/course-lessons.dto';

@Injectable()
export class FirebaseCourseLessonsService implements SetsCourseLessonsDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  set(courseLessons: Partial<CourseLessonsDTO>): void {
    this._client.doc('course-lessons/'+courseLessons.id).update(courseLessons);
  }
}
