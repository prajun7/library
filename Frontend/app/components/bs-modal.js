import $ from "jquery";

import Component from "@ember/component";
import { action } from "@ember/object";
import { or } from "@ember/object/computed";
import { inject as service } from "@ember/service";

export default Component.extend({
  runloop: service(),
  visible: false,

  // isDanger: computed("btn", function () {
  //  return this.btn == "btn-danger";
  // }),

  didInsertElement() {
    this._super(...arguments);

    const $modal = this.$(".modal");

    // after modal is triggered to show
    $modal.on("show.bs.modal", () => {
      this.set("visible", true);

      if (this.draggableModal && this.modalId) {
        this.$(".modal-content").draggable({
          handle: ".modal-header",
          start: () => {
            this.set("dragging", true);
          },
          stop: () => {
            this.set("dragging", false);
          },
          containment: "#" + this.modalId,
          scroll: false,
        });

        this.runloop.next(() => {
          $(".modal-backdrop").addClass("draggable");
        });

        $modal.on("hidden.bs.modal", () => this.stopDragging());
      }
    });

    // after animation completes
    $modal.on("shown.bs.modal", () =>
      this.runloop.later(() => {
        const $input = this.$("input[autofocus]")[0];
        if ($input) {
          $input.focus();
        }
      }, 300)
    );
  },

  stopDragging() {
    if (this.draggableModal && this.$(".modal-content").attr("style")) {
      this.$(".modal-content").attr("style", "");
      this.runloop.later(() => {
        if (!this.isDestroyed) {
          this.set("dragging", false);
        }
      }, 300);
    }
  },

  // if anything is loading we cannot close the modal
  disableModalClose: or(
    "btnLoading",
    "btn2Loading",
    "disableBackButton",
    "imageUploadInProgress"
  ),

  willDestroyElement() {
    this._super(...arguments);

    this.$(".modal").modal("hide");
    this.$(".modal").off();
  },

  considerCancelClick: action(function (event) {
    const modal = this.element.querySelector(".modal");
    if (event.target === modal) {
      const data = $(modal).data();
      const backdropIsStatic =
        data &&
        (data.backdrop === "static" ||
          data["bs.modal"]?._config?.backdrop === "static");
      const explicitNoBackdrop =
        data?.["bs.modal"]?._config?.backdrop === false;
      const hasNoBackdrop =
        (data && !data["bs.modal"]._backdrop) ||
        explicitNoBackdrop ||
        document.querySelector(".modal-backdrop") === null;

      if (hasNoBackdrop) {
        return true; // do nothing
      } else if (backdropIsStatic) {
        event.stopPropagation();
        event.preventDefault();
      } else {
        this.send("cancelClick");
      }
    }
  }),

  actions: {
    btnClick() {
      this.$(".modal").scrollTop(0);
      this.sendAction("btnClick");
    },

    btn2Click() {
      this.$(".modal").scrollTop(0);
      this.sendAction("btn2Click");
    },

    cancelClick() {
      if (this.cancelClick) {
        this.sendAction("cancelClick");
      }
    },
  },
});

