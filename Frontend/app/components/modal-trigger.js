import $ from "jquery";

import { action } from "@ember/object";
import Component from "@glimmer/component";
import { cached } from "@glimmer/tracking";

export default class ModalTrigger extends Component {
  @cached
  get bubble() {
    return this.args.bubbles ?? true;
  }

  @cached get linkClass() {
    if (this.args.icon === "fa-trash") {
      return "text-danger";
    }
    return this.args.linkClass;
  }

  @action
  triggerModal() {
    if (this.args.onTrigger) {
      this.args.onTrigger();
    }

    setTimeout(() => {
      if (this.args.modalId) {
        $("#" + this.args.modalId).modal({
          backdrop: this.args.noBackdrop ? false : "static",
        });
      }
    }, 0);
  }
}