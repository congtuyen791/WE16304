import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {
      id: 1,
      name: "tuyenvc",
      age: 20,
      phone: "0983358791",
      avatar: "https://upload.wikimedia.org/wikipedia/vi/1/1d/N%C6%A1i_n%C3%A0y_c%C3%B3_anh_-_Single_Cover.jpg"
    },
    {
      id: 2,
      name: "tuyenvc1212",
      age: 22,
      phone: "0983358791",
      avatar: "https://upload.wikimedia.org/wikipedia/vi/1/1d/N%C6%A1i_n%C3%A0y_c%C3%B3_anh_-_Single_Cover.jpg"
    },
    {
      id: 3,
      name: "tuyenvc323",
      age: 23,
      phone: "0983358791",
      avatar: "https://upload.wikimedia.org/wikipedia/vi/1/1d/N%C6%A1i_n%C3%A0y_c%C3%B3_anh_-_Single_Cover.jpg"
    }
  ];
  //dinh nghi 1 mang trung giann luu ket qua seach 
  //de k anh hung den gia tri cua mang users goc
  usersFilter = this.users;
  //mở rộng
  convertVietnameseToUnicode(value: string) {
    const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
    const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')
    return value.toString().toLowerCase()
      .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
      .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
      .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
      .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
      .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
      .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
      .replace(/đ/gi, 'd')
      .replace(/\s+/g, '-')
      .replace(p, c => b.charAt(a.indexOf(c)))
      .replace(/&/g, '-and-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
  }

  //dinh nghia ham khi xoa
  remove(userId: number) {
    this.usersFilter = this.usersFilter.filter(function (user) {
      return user.id !== userId;
    });
  }

  //dinh nghia ham seach sau khi nhap vao o input
  onSeach(event: any) {
    //1. xu ly viec tim kiem chu hoa chu thuong
    // dua ca value va name ve dang chu thuong
    //2. khoang trang dau va cuoi value cua input
    //su dung .trim()
    const value = event.target.value;
    const lowerCaseInputValue = value.toLowerCase();
    const lowerCaseTrimInputValue = lowerCaseInputValue.trim();
    const unicodeValue = this.convertVietnameseToUnicode(lowerCaseTrimInputValue);
    // Gan cho usersFilter de khong thay doi users goc nua
    // Doi hien thi danh sach theo usersFilter
    this.usersFilter = this.users.filter(function (user) {
      const lowerCaseUserName = user.name.toLowerCase();

      return lowerCaseUserName.indexOf(unicodeValue) !== -1;
    });

  }

  //them moi users
  //dinh nghia 1 object trung gian 
  // nhan gtri input dau vao sau khi submit se gan vao gtri goc
  newUser = {
    id: 0,
    name: '',
    age: 0,
    phone: '',
    avatar: ''
  };
  onChange(event: any, key: string) {
    this.newUser = {
      ...this.newUser,
      [key]: event.target.value
    };


    console.log(this.newUser);

  }

  onSubmit() {
    //0. validate
    if (!this.onValidate(this.newUser)) {
      return;
    }
    //1.1 kiem tra xem co phai dang sua khong
    if (this.isEdit) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.newUser.id) {
          this.users[i] = this.newUser;
        }

      }
      this.isEdit = false;
    } else {
      //1. gan them id =  do dai mang + 1
      this.newUser.id = this.users.length + 1;
      //2. push phan tu moi vao mang users
      this.users.push(this.newUser);
    }

    //3. gan lai gia tri goc cho newUser

    this.newUser = {
      id: 0,
      name: '',
      age: 0,
      phone: '',
      avatar: ''
    }

  }

  onValidate(obj: any) {
    if (!obj.name || !obj.age || obj.age <= '0' || !obj.phone || !obj.avatar) {
      return false;
    }
    return true;
  }
  isEdit = false;
  onEdit(obj: any) {
    this.newUser = obj;
    this.isEdit = true;
  }

}
