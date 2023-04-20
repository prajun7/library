import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

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
        this.args.model.id = res.id;
        console.log(this.args.model)
        this.clear();
        return new Book(res);
      })
      .catch((err) => console.log(err));
  }
}