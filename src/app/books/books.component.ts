import { Component, inject, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from './interfaces/book.interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  bookService: BookService = inject(BookService);
  router: Router = inject(Router);
  books: Book[] = [];
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  deleteBook(bookId: string) {
    this.bookService.deleteBook(bookId).subscribe(() => {
      this.getBooks();
    });
  }

  updateBook(i: number) {
    this.router.navigate(['add-book'], { queryParams: this.books[i] });

    console.log(this.books[i]);
  }
}
