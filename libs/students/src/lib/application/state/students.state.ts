import { Injectable, Inject } from '@angular/core';
import {
  ADDS_STUDENT_DTO,
  AddsStudentDtoPort,
} from '../ports/secondary/adds-student-dto.port';
import { CreateStudentCommandPort } from '../ports/primary/create-student-command.port';
import { CreateStudentCommand } from '../ports/primary/create-student.command';
import { StudentDTO } from '../ports/secondary/student.dto';
import {
  GETS_ALL_STUDENT_DTO,
  GetsAllStudentDtoPort,
} from '../ports/secondary/gets-all-student-dto.port';
import { ReplaySubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllStudentQueryPort } from '../ports/primary/gets-all-student-query.port';
import { StudentQuery } from '../ports/primary/student.query';
import { LoadAllStudentsCommandPort } from '../ports/primary/load-all-students-command.port';
import { LoadAllStudentsCommand } from '../ports/primary/load-all-students.command';

@Injectable()
export class StudentsState
  implements
    CreateStudentCommandPort,
    GetsAllStudentQueryPort,
    LoadAllStudentsCommandPort
{
  private _allStudentDtoSubject: ReplaySubject<StudentDTO[]> =
    new ReplaySubject<StudentDTO[]>();

  constructor(
    @Inject(ADDS_STUDENT_DTO) private _addsStudent: AddsStudentDtoPort,
    @Inject(GETS_ALL_STUDENT_DTO) private _getsAllStudent: GetsAllStudentDtoPort
  ) {
    this.loadAllStudents(new LoadAllStudentsCommand());
  }

  createStudent(command: CreateStudentCommand): void {
    this._addsStudent.add({ name: command.name, email: command.email });
  }

  getAllStudentQuery(): Observable<StudentQuery[]> {
    return this._allStudentDtoSubject.pipe(
      map((dtos: StudentDTO[]) =>
        dtos.map((dto: StudentDTO) => new StudentQuery(dto.name, dto.email))
      )
    );
  }

  loadAllStudents(command: LoadAllStudentsCommand): void {
    this._getsAllStudent
      .getAll()
      .subscribe((dtos: StudentDTO[]) => this._allStudentDtoSubject.next(dtos));
  }
}
