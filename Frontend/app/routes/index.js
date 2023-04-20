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
  // @tracked
  // books = A();

  async model() {
    try {
      const response = await fetch('http://localhost:9090/books');
      if (response.ok) {
        const data = await response.json();
        const dataMap = data.map((o) => new Book(o));
        const books = A(dataMap);
        return books;
      } else {
        throw new Error('Error fetching books: ' + response.statusText);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
