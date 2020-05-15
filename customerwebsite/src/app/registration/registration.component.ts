import { Component, OnInit } from '@angular/core';
import {Customer} from '../models/customer';
import {AppConfig} from '../app.config';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  customer: Customer;
  email: string;
  password: string;
  confirmPassword: string;
  result: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  register(): void {
    this.customer = new Customer(this.email, this.password);
    if (this.password === this.confirmPassword) {
      const url = `${AppConfig.ApiBaseURL}${AppConfig.ApiUrls.REGISTER}`;
      this.http.post(url, this.customer).subscribe((data: string) => {
        this.result = data;
      }, error => console.log('oops', error) );
    } else {
      alert('Make sure passwords match.');
    }
  }

}
