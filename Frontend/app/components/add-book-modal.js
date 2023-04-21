/*
We are pasing title, mesage, confirm function and cancel function from the 
parent component.
We can get those passed filed using, this.args.onConfirm() to call that method,
or his.args.message to get the messag that we passed from the parent component.
**/

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MyModalComponent extends Component {
  @tracked title = '';
  @tracked author = '';
  @tracked genre = '';
  @tracked count = '';

  @action
  save() {
    const bookObj = {
      title: this.title,
      author: this.author,
      genre: this.genre,
      count: this.count,
    };
    // console.log(this.args.message);  
    // logs the message that is passed from parent component
    this.args.onSave(bookObj);
    this.args.onCancel();
  }

  @action
  cancel() {
    this.title = '';
    this.author = '';
    this.genre = '';
    this.count = 0;
    this.args.onCancel();
  }
}