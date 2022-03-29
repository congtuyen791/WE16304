import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(apiUrl);
  }

  getPost(id: undefined | string) {
    return this.http.get(`${apiUrl}/${id}`);
    // ~ apiUrl + '/' + id
    // ~ 'http://localhost:3000/students/1'
  }

  deletePost(id: number | string) {
    return this.http.delete(`${apiUrl}/${id}`);
    // ~ apiUrl + '/' + id
    // ~ 'http://localhost:3000/students/1'
  }

  createPost(data:  {title: string, content: string, status: number}){
    return this.http.post(apiUrl, data);
  }

  updatePost(id: number | string, data:  {title: string, content: string, status: number}){
    return this.http.put(`${apiUrl}/${id}`, data);
  }
}
