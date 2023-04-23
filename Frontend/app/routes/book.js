/*
Similar to index.js route, the book.js file also acts like the useEffect with
empty array.

When we go to the 
  this.route("book", {path:'book/:book_id'})
which is defined in router.js file, 
Then the book.js router file kicks off and it makes the call to the backend
and returns the data in the model.
We can access that data form the book.hbs template file by doing 
{{this.model}}
**/

import Route from '@ember/routing/route';
import Book from '../models/book';

export default class BookRoute extends Route {
  async model(params) {
    if (params.book_id > 0) {
      const response = await fetch(
        'https://library-spring-boot.herokuapp.com/book/' + params.book_id
      );
      const data = await response.json();
      const book = new Book(data);
      return book;
    }
    return new Book();
  }
}

/**
 * Backend was deployed to Heroku app, so replacing
 * http://localhost:9090/book/ with https://library-spring-boot.herokuapp.com/book/
 */
