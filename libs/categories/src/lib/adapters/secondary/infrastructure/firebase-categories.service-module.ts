import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseCategoriesService } from './firebase-categories.service';
import { ADDS_CATEGORIES_DTO } from '../../../application/ports/secondary/adds-categories-dto.port';
import { GETS_ALL_CATEGORIES_DTO } from '../../../application/ports/secondary/gets-all-categories-dto.port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseCategoriesService, { provide: ADDS_CATEGORIES_DTO, useExisting: FirebaseCategoriesService }, { provide: GETS_ALL_CATEGORIES_DTO, useExisting: FirebaseCategoriesService }],
  	exports: [] })
export class FirebaseCategoriesServiceModule {
}
