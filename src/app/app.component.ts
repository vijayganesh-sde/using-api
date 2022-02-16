import { Component } from '@angular/core';
import books from './json_files/entertainment_books.json';
import teen_books from './json_files/teen_books.json';
import fantasy_books from './json_files/fantasybooks.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'using-api';
  bookslist:{image:string,name:string,author:string,book_stars:string,img_paths:string}[]=books;
  teen_bookslist:{image:string,name:string,author:string,book_stars:string}[]=teen_books;
  fantasybookslist:{image:string,name:string,author:string,book_stars:string}[]=fantasy_books;
  item:any;
  item1:any;
  item2:any;
}
