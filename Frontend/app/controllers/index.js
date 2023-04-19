import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexComponent extends Controller{
  @tracked deleteModal;

  @action
  showModal() {
    this.deleteModal = true;
  }

  @action
  hideModal() {
    this.deleteModal = false;
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
        this.args.model.id = res.id;
        this.clear();
        return new Book(res);
      })
      .catch((err) => console.log(err));
  }
}