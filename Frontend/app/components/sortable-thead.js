import { inject as service } from "@ember/service";
import Component from "@glimmer/component";
import { cached } from "@glimmer/tracking";

export default class SortableTh extends Component {
  @service("sort-table-service") sortTableService;

  @cached
  get sortOptions() {
    return this.sortTableService.getSortOptions(this.args.tableId);
  }
}