import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { StudentQuery } from '../../../application/ports/primary/student.query';
import {
  GETS_ALL_STUDENT_QUERY,
  GetsAllStudentQueryPort,
} from '../../../application/ports/primary/gets-all-student-query.port';

@Component({
  selector: 'lib-students-list',
  templateUrl: './students-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsListComponent {
  listStudent$: Observable<StudentQuery[]> =
    this._getsAllStudentQuery.getAllStudentQuery();

  constructor(
    @Inject(GETS_ALL_STUDENT_QUERY)
    private _getsAllStudentQuery: GetsAllStudentQueryPort
  ) {}
}
