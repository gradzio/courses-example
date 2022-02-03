import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsLessonDtoPort } from '../../../application/ports/secondary/adds-lesson-dto.port';
import { LessonDTO } from '../../../application/ports/secondary/lesson.dto';

@Injectable()
export class FirebaseLessonsService implements AddsLessonDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(lesson: Omit<LessonDTO,"id">): void {
    this._client.collection('lessons').add(lesson);
  }
}
