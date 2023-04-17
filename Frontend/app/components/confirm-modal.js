/*
We are pasing title, mesage, confirm function and cancel function from the 
parent component.
We can get those passed filed using, this.args.onConfirm() to call that method,
or
this.args.message to get the messag that we passed from the parent component.
**/

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MyModalComponent extends Component {
  @action
  confirm() {
    // console.log(this.args.message);  // logs the message
    this.args.onConfirm();
  }

  @action
  cancel() {
    this.args.onCancel();
  }
}