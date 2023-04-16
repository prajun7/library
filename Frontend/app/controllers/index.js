import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default class IndexController extends Controller {
  // Define a computed property to get the number of books
  @computed('model')
  get numberOfBooks() {
    return this.model.length;
  }

  // Define a method to log the number of books
  logNumberOfBooks() {
    console.log(`Number of books: ${this.numberOfBooks}`);
  }
}