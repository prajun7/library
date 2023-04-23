import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import Book from '../models/book';

export default class BookComponent extends Component {
  @service router;

  updateBookTitle = "Update Book";

  @action
  updateBook() {
    const paramId = this.args.model.id;
    const bookObj = {
      id: paramId,
      title: this.args.model.title,
      author: this.args.model.author,
      genre: this.args.model.genre,
      count: this.args.model.count,
    };
    fetch('https://library-spring-boot.herokuapp.com/book/' + paramId, {
      method: 'POST',
      body: JSON.stringify(bookObj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.json())
    .then((res) => {
      this.args.model.id = res.id;
      this.clear();
      this.router.transitionTo('index');
      return new Book(res);
    })
      .catch((err) => console.log(err));
  }

  @action
  cancel() {
    this.router.transitionTo("index");
  }

  clear() {
    this.args.model.title = '';
    this.args.model.author = '';
    this.args.model.genre = '';
    this.args.model.count = 0;
  }
}
