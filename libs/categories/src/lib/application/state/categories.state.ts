import { Injectable, Inject } from '@angular/core';
import {
  ADDS_CATEGORIES_DTO,
  AddsCategoriesDtoPort,
} from '../ports/secondary/adds-categories-dto.port';
import { AddCategoryCommandPort } from '../ports/primary/add-category-command.port';
import { AddCategoryCommand } from '../ports/primary/add-category.command';
import { CategoriesDTO } from '../ports/secondary/categories.dto';
import {
  GETS_ALL_CATEGORIES_DTO,
  GetsAllCategoriesDtoPort,
} from '../ports/secondary/gets-all-categories-dto.port';
import { ReplaySubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllCategoriesQueryPort } from '../ports/primary/gets-all-categories-query.port';
import { CategoriesQuery } from '../ports/primary/categories.query';
import { LoadAllCategoriesCommandPort } from '../ports/primary/load-all-categories-command.port';
import { LoadAllCategoriesCommand } from '../ports/primary/load-all-categories.command';

@Injectable()
export class CategoriesState
  implements
    AddCategoryCommandPort,
    GetsAllCategoriesQueryPort,
    LoadAllCategoriesCommandPort
{
  private _allCategoriesDtoSubject: ReplaySubject<CategoriesDTO[]> =
    new ReplaySubject<CategoriesDTO[]>();
  // name = 'abcd';
  constructor(
    @Inject(ADDS_CATEGORIES_DTO) private _addsCategories: AddsCategoriesDtoPort,
    @Inject(GETS_ALL_CATEGORIES_DTO)
    private _getsAllCategories: GetsAllCategoriesDtoPort
  ) {
    this.loadAllCategories(new LoadAllCategoriesCommand());
  }

  addCategory(command: AddCategoryCommand): void {
    // const a = this.name; to jest jedno z 3 miejsc z których mogę pobrać dane
    this._addsCategories.add({ name: command.name });
  }

  getAllCategoriesQuery(): Observable<CategoriesQuery[]> {
    return this._allCategoriesDtoSubject.pipe(
      map((dtos: CategoriesDTO[]) =>
        dtos.map((dto: CategoriesDTO) => new CategoriesQuery(dto.name))
      )
    );
  }

  loadAllCategories(command: LoadAllCategoriesCommand): void {
    this._getsAllCategories
      .getAll()
      .subscribe((dtos: CategoriesDTO[]) =>
        this._allCategoriesDtoSubject.next(dtos)
      );
  }
}
