import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;
  id: string | undefined;
  post: any;
  constructor(
    private postService: PostService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { 
    this.postForm = new FormGroup({
      title: new FormControl('',Validators.required),
      content: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      status: new FormControl(0)
    })
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.postService.getPost(this.id).subscribe(data => {
        this.post = data
      })
    }else{
      this.post = {
        name: "",
        class: ""
      }
    }
  }
  onSubmit(data: any){
    if (this.id) {
      return this.postService.updatePost(this.id, data).subscribe((obj) => {
        this.router.navigate(['posts', this.id]);
      })
    }
    return this.postService.createPost(data).subscribe((obj) => {
      this.router.navigate(['/posts']);
    });
    
  }

}
