import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {
  private API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) {}

  searchBooks(query: string) {
    if (!query.trim()) return of([]);
    const url = `${this.API_URL}intitle:${query}&langRestrict=en`;

    return this.http.get<any>(url).pipe(
      map(res => res.items?.map((item: any) => ({
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        thumbnail: item.volumeInfo.imageLinks?.thumbnail,
        description: item.volumeInfo.description,
        infoLink: item.volumeInfo.infoLink
      })) || []),
      catchError(() => of([]))
    );
  }
}
