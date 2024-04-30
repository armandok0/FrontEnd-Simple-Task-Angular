import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'pm-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.dataService.fetchCustomers().subscribe(
    data => {
      this.customers = data;
    },
    error => {
      console.error('Error fetching customers:', error);
    }
    );
  }
}
