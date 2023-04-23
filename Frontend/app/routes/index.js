/*
Route files are like useEffect() from React,
Whenever we go to this page it automatically runs the model only once and get the
data from the backend.
Just like useEffect with empty array, []

Inside the model we need to return the data which we get from the backend.
This data can be used by index.hbs file which is in template folder by 
doing {{this.model}}.
The name of the file in route and template should always match.
If we want to have some action of methods in template file we need to 
define those in controller folder and the name of the file should also be 
index.js.

That is the name of the file for route, template and controller should match.
**/

import Route from '@ember/routing/route';
import { A } from '@ember/array';
import Book from '../models/book';
import { tracked } from '@glimmer/tracking';

export default class extends Route {
  @tracked
  books = A();

  async model() {
    try {
      const response = await fetch('https://library-spring-boot.herokuapp.com/books');
      if (response.ok) {
        const data = await response.json();
        const dataMap = data.map((o) => new Book(o));
        this.books = A(dataMap);
        return { books: this.books }; 
        // Return the array as a value in an object
      } else {
        throw new Error('Error fetching books: ' + response.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

/**
 * From the model we are returning the array of objects by doing, return { books: this.books }; 
 * We want to track the books array, so that we can add the new book to that array.
 * This will prevent us from refershing the page every time we add the new book.
 * If we don't push the new book into the addBook() function in index.js controller file
 * we have to refresh the page to see the newly added book.
 */
