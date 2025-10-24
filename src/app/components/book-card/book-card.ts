import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './book-card.html',
  styleUrls: ['./book-card.css']
})
export class BookCard {
  @Input() book!: any;
}
