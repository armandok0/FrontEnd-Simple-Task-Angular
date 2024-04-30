import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'pm-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.dataService.fetchUsers().subscribe(
      data => {
        this.users = data;
        const sessionUsers = JSON.parse(sessionStorage.getItem('users') || '[]');
        if (sessionUsers.length > 0) {
          // Add newly created users to the users array
          this.users = this.users.concat(sessionUsers);
        }
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

  redirectToCreateUser() {
    this.router.navigate(['/users/create']);
  }

}
