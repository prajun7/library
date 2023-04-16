import Route from '@ember/routing/route';
import Book from '../models/book';

export default class BookRoute extends Route {
  async model(params) {
    if (params.book_id > 0) {
      const response = await fetch(
        'http://localhost:9090/book/' + params.book_id
      );
      const data = await response.json();
      const book = new Book(data);
      return book;
    }
    return new Book();
  }
}
