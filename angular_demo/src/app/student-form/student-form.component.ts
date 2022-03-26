import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private router: Router
      
  ) { }

  ngOnInit(): void {
  }

  onSubmit(obj: { name: string, class: string }) {
    this.studentService.createStudent(obj).subscribe((data) => {
      this.router.navigate(['/students']);
    })
  }

}
