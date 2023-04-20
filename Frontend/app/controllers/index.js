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
    fetch('http://localhost:9090/book', {
      method: 'POST',
      body: JSON.stringify(bookObj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const newBook = new Book(res);
        this.model.pushObject(newBook); // Push the new book to this.model array
        return new Book(res);
      })
      .catch((err) => console.log(err));
  }
}