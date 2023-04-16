import Route from '@ember/routing/route';
import { A } from '@ember/array';
import Book from '../models/book';

// Route files are like useEffect() from React,
// Whenever we go to this page it automatically runs the mode only once and get the
// data from the backend.
// Just like useEffect with empty array, []

export default class extends Route {
  async model() {
    try {
      const response = await fetch('http://localhost:9090/books');
      const data = await response.json();
      const dataMap = data.map((o) => new Book(o));
      const books = A(dataMap);
      console.log(books);
      return books;
    } catch (err) {
      console.log(err);
    }
  }
}
