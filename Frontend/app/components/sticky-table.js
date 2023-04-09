import $ from "jquery";

import Component from "@ember/component";

export default Component.extend({
  classNames: ["table-view"],
  tableStriped: true,

  containsTimes(str, char) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == char) {
        total++;
      }
    }
    return total;
  },

  didInsertElement() {
    this._super(...arguments);
    if (!this.notSticky) {
      if (this.$("occluded-content").length === 0 && this.tableStriped) {
        this.$(".table-sticky").addClass("table-striped");
      }
      const $thead = this.$("thead");
      const $table = this.$(".table");
      const $theadClone = $thead.clone();
      const $ths = $thead.find("th:visible");
      $theadClone.addClass("hidden");
      $thead.parent().prepend($theadClone);
      this.$thead = $thead;
      this.$table = $table;
      this.$theadClone = $theadClone;
      this.$ths = $ths;
      $(window).on(
        "scroll resize",
        this.onScroll.bind(this, $table, $thead, $theadClone, $ths)
      );
      $table
        .parent()
        .on(
          "scroll",
          this.onScroll.bind(this, $table, $thead, $theadClone, $ths)
        );
      $ths.click(() => {
        setTimeout(() => {
          this.onScroll($table, $thead, $theadClone, $ths);
        }, 0);
      });
    }
  },

  onScroll($table, $thead, $theadClone, $ths) {
    const scrollTop = $(window).scrollTop();
    const offset = Math.round($table.offset().top);
    const containerWidth = $table.parent().get(0).getBoundingClientRect().width;
    const { scrollLeft } = $table.parent().get(0);

    if (
      scrollTop >= offset &&
      scrollTop < offset + $table.get(0).getBoundingClientRect().height
    ) {
      if (!$thead.parent().hasClass("thead-wrapper")) {
        $thead.wrap('<div class="thead-wrapper"></div>');
      }

      $theadClone.removeClass("hidden").css("opacity", 0);
      $thead.parent().css("width", containerWidth + "px");
      $thead.find("th:visible").each(function (index) {
        $(this).css("width", $($table.find("td")[index]).width() + 20 + "px");
      });

      let i = 0;
      $theadClone.find("th:visible").each(function () {
        $($ths.get(i)).css(
          "min-width",
          this.getBoundingClientRect().width + "px"
        );
        i++;
      });

      $thead.parent().get(0).scrollLeft = scrollLeft;
    } else {
      $theadClone.addClass("hidden");
      if ($thead.parent().hasClass("thead-wrapper")) {
        $thead.unwrap();
      }
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    
    $(window).off("scroll resize", this.onScroll);
    this.$("th").off("click");
  },
});
