import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MyModalComponent extends Component {
  @action
  confirm() {
    this.args.onConfirm();
  }

  @action
  cancel() {
    this.args.onCancel();
  }
}