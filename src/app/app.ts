import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ProductDetails } from './components/product-details/product-details';
import { Productparent } from "./components/productparent/productparent";
import { Clock } from './components/clock/clock';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet,Clock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Day-2');
  showClock: boolean = true;

  toggleClock() {
    this.showClock = !this.showClock;
  }
}
