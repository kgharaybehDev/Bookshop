import { Component } from '@angular/core';
import { book } from '../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books = [
    new book('book1', 'book1 description', 'https://picsum.photos/200/300'),
  ]
}
