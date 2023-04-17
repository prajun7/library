/*
The row.js is a component which is being called from index.hbs
The component are reuseable by other template as well.
The code logic is in row.js file while the view part is in row.hbs file.
**/

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class BookComponent extends Component {
  @action
  deleteBook() {
    fetch('http://localhost:9090/book/' + this.args.book.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        this.args.model.removeObject(this.args.book);
      })
      .catch((err) => console.log(err));
  }
  
  @action
  updateBook() {
    console.log(this.args.book);
  }
}
