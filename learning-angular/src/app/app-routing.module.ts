import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './student-crud/create-student/create-student.component';
import { EditStudentComponent } from './student-crud/edit-student/edit-student.component';
import { ListStudentComponent } from './student-crud/list-student/list-student.component';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full'},
  { path: 'create', component: CreateStudentComponent },
  { path: 'list-student', component: ListStudentComponent },
  { path: 'update-student/:id', component: EditStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
