import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './books/add-book/addBook.component';
import { UpdateComponent } from './books/update-book/update.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'add-book',
    component: AddBookComponent,
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/books',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
