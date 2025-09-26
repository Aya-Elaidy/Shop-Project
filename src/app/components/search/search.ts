import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule], 
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class Search {
  searchText: string = '';
  products: any[] = [];

  constructor(private http: HttpClient) {}

  search() {
    if (!this.searchText) return;

  this.http.get(`${environment.apiBaseUrl}/search?q=${this.searchText}`)

      .subscribe((res: any) => {
        this.products = res.products;
      });
  }
}
