import { Component, signal } from '@angular/core';
import { BookList } from 'app/components/book-list/book-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = signal('Book Finder');
}
