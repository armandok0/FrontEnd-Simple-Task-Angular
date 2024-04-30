import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'pm-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  users: any[] = [];
  newUser: any = { name: '', code: '' };

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  addUser(): void {
    if (!this.newUser.name || !this.newUser.code) {
      alert('Provide All Fields');
      return;
    }
    let users = JSON.parse(sessionStorage.getItem('users') || '[]');
    users.push(this.newUser);
    sessionStorage.setItem('users', JSON.stringify(users));
    this.newUser = { name: '', code: '' };
    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}
