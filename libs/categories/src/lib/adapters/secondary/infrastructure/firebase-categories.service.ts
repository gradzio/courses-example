import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsCategoriesDtoPort } from '../../../application/ports/secondary/adds-categories-dto.port';
import { CategoriesDTO } from '../../../application/ports/secondary/categories.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllCategoriesDtoPort } from '../../../application/ports/secondary/gets-all-categories-dto.port';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseCategoriesService
  implements AddsCategoriesDtoPort, GetsAllCategoriesDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(_categories: Partial<CategoriesDTO>): void {
    this._client.collection('categories').add(_categories);
  }

  getAll(criterion: Partial<CategoriesDTO>): Observable<CategoriesDTO[]> {
    return this._client
      .collection<CategoriesDTO>('categories')
      .valueChanges({ idField: 'id' })
      .pipe(map((data) => filterByCriterion(data, criterion)));
  }
}
