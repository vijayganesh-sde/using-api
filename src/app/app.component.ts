import { Component } from '@angular/core';
import books from './json_files/entertainment_books.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'using-api';
  bookslist:{image:string,name:string,author:string,book_stars:string,img_paths:string}[]=books;
  item:any;
}
