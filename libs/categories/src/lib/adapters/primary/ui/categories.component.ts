import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADD_CATEGORY_COMMAND,
  AddCategoryCommandPort,
} from '../../../application/ports/primary/add-category-command.port';
import { AddCategoryCommand } from '../../../application/ports/primary/add-category.command';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-categories',
  templateUrl: './categories.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  readonly category: FormGroup = new FormGroup({ name: new FormControl() });

  constructor(
    @Inject(ADD_CATEGORY_COMMAND) private _addCategory: AddCategoryCommandPort
  ) {}

  onFormSubmited(form: FormGroup): void {
    this._addCategory.addCategory(
      new AddCategoryCommand(form.get('name')?.value)
    );
  }
}
