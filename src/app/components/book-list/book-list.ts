import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { BookService } from 'app/services/book';
import { BookCard } from '../book-card/book-card';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookCard, SearchBar],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookList implements OnInit {
  books: any[] = [];
  private searchTerms = new Subject<string>();

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.bookService.searchBooks(term))
    ).subscribe(data => this.books = data);
  }

  onSearch(term: string) {
    this.searchTerms.next(term);
  }
}
