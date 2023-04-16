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
