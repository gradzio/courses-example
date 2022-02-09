import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  CREATE_STUDENT_COMMAND,
  CreateStudentCommandPort,
} from '../../../application/ports/primary/create-student-command.port';
import { CreateStudentCommand } from '../../../application/ports/primary/create-student.command';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-add-student',
  templateUrl: './add-student.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddStudentComponent {
  readonly addForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
  });

  constructor(
    @Inject(CREATE_STUDENT_COMMAND)
    private _createStudent: CreateStudentCommandPort
  ) {}

  onFormSumbited(form: FormGroup): void {
    this._createStudent.createStudent(
      new CreateStudentCommand(
        form.get('name')?.value,
        form.get('email')?.value
      )
    );
    this.addForm.reset();
  }
}
