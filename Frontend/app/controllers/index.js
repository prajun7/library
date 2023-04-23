import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import Book from '../models/book';

export default class IndexComponent extends Controller{
  @tracked addModal;

  @action
  showModal() {
    this.addModal = true;
  }

  @action
  hideModal() {
    this.addModal = false;
  }

  @action
  addBook(bookObj) {
    fetch('https://library-spring-boot.herokuapp.com/book', {
      method: 'POST',
      body: JSON.stringify(bookObj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.json())
    .then((res) => {
      const newBook = new Book(res);
      if (!this.model.books) {
        this.model.books = A();
      }
      this.model.books.pushObject(newBook); 
      // Push the new book to this.model array
      // Since in the index.js router file we are returning arrays of data from models,
      // we need to use this.model.books not just this.model
      // we are pushing it to the array, so that we can show it on frontend without 
      // hitting the database.
      return new Book(res);
    })
    .catch((err) => console.log(err));
  }
}