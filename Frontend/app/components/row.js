/*
The row.js is a component which is being called from index.hbs
The component are reuseable by other template as well.
The code logic is in row.js file while the view part is in row.hbs file.
**/

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookComponent extends Component {
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
  deleteBook() {
    fetch('https://library-spring-boot.herokuapp.com/book/' + this.args.book.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      this.args.model.removeObject(this.args.book);
    })
    .catch((err) => console.log(err));
  }
}
