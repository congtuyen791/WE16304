import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent implements OnInit {
  // input co the truyen vao ten bien nhan duoc tu cha
  // Neu k truyen thi bien cua input khai bao chinh la ten do
  // Neu truyen thi co the gan 1 ten moi 
  @Input() formField: any;
  @Input() key: string;
  // @Input('message') mess: string;
  constructor() { 
    // this.message = '';
    this.key = '';
    // this.mess = '';
  }

  ngOnInit(): void {
  }

}
