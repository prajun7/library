import Component from '@glimmer/component';
import { action } from '@ember/object';
import Book from '../models/book';

export default class BookComponent extends Component {
  @action
  setBook() {
    if (this.args.model.id > 0) {
      this.updateBook();
    } else {
      this.addBook();
    }
  }

  addBook() {
    const bookObj = {
      title: this.args.model.title,
      author: this.args.model.author,
      genre: this.args.model.genre,
      count: this.args.model.count,
    };
    fetch('http://localhost:9090/book', {
      method: 'POST',
      body: JSON.stringify(bookObj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.args.model.id = res.id;
        return new Book(res);
      })
      .catch((err) => console.log(err));
  }

  updateBook() {
    const paramId = this.args.model.id;
    const bookObj = {
      id: paramId,
      title: this.args.model.title || '',
      author: this.args.model.author || '',
      genre: this.args.model.genre || '',
      count: this.args.model.count || 0,
    };
    console.log(bookObj);
    fetch('http://localhost:9090/book/' + paramId, {
      method: 'POST',
      body: JSON.stringify(bookObj),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log('Success', res);
      })
      .catch((err) => console.log(err));
  }

  clear() {
    this.args.model.title = null;
    this.args.model.isbn = null;
    this.args.model.publishedDate = null;
    this.args.model.authorList[0].firstName = null;
    this.args.model.authorList[0].lastName = null;
    this.args.model.authorList[0].doB = null;
  }
}
