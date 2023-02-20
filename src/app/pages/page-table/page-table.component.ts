import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})
export class PageTableComponent implements OnInit {

  usersList: any[] = [];
  headArray = [
    {'Head': 'User Name', 'FieldName': 'name'},
    {'Head': 'Email', 'FieldName': 'email'},
    {'Head': 'Contact', 'FieldName': 'phone'},
    {'Head': 'Website', 'FieldName': 'website'},
    {'Head': 'Action', 'FieldName': ''}
  ]

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result: any) => {
      this.usersList = result;
    })
  }

  editUser(item: any) {
    console.log(item)
  }

  deletUser(item: any) {
    console.log(item)
  }

}
