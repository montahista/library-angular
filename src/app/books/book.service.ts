import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './interfaces/book.interface';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(
      'http://195.234.122.131:8220/Controller/all_books'
    );
  }
  deleteBook(bookId: string): Observable<any> {
    return this.http.delete(
      'http://195.234.122.131:8220/Controller/delete_book/' + bookId
    );
  }
  addBook(book: any): Observable<any> {
    const Params: Params = {
      Name: book.bookName,
      Quantity: book.quantity,
      Author: book.authorName,
    };
    return this.http.post(
      'http://195.234.122.131:8220/Controller/add_book',
      null,
      { params: Params }
    );
  }
}
