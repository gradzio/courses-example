import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoriesQuery } from '../../../application/ports/primary/categories.query';
import {
  GETS_ALL_CATEGORIES_QUERY,
  GetsAllCategoriesQueryPort,
} from '../../../application/ports/primary/gets-all-categories-query.port';

@Component({
  selector: 'lib-categories-list',
  templateUrl: './categories-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesListComponent {
  categories$: Observable<CategoriesQuery[]> =
    this._getsAllCategoriesQuery.getAllCategoriesQuery();

  form = new FormGroup({
    name: new FormControl(),
  });

  constructor(
    @Inject(GETS_ALL_CATEGORIES_QUERY)
    private _getsAllCategoriesQuery: GetsAllCategoriesQueryPort
  ) {}
}
