import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BookService } from './../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './addBook.component.html',
  styleUrls: ['./addBook.component.css'],
})
export class AddBookComponent implements OnInit {
  bookService: BookService = inject(BookService);
  form: FormBuilder = inject(FormBuilder);
  addBookForm: FormGroup = new FormGroup({});
  dataRow: any;
  isAdded: boolean = false;
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.addBookForm = this.form.group({
      bookName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      quantity: new FormControl('1', Validators.required),
      authorName: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.addBookForm.patchValue(params);
      console.log(params); // should log your book data
    });

    this.isAdded = false;
  }

  submit() {
    this.dataRow = this.addBookForm.value;
    console.log(this.dataRow);
    this.bookService.addBook(this.dataRow).subscribe((next) => {
      this.addBookForm.reset();
      this.isAdded = true;
    });
  }
}
