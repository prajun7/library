import Service, { inject as service } from "@ember/service";
import { tracked } from "@glimmer/tracking";

import { StorageModel } from "./local-storage";

/* 
  * The values must be kept here because we may initialize 
  * and calculate the sort prior to our first render.
  * 
  * Alternatively the controller/component who owns the tableId 
  *  may set these itself. 
*/ 
const DEFAULT_SORT_SETTINGS = {
  billOfLadingList: {
    defaultSortBy: "billOfLadingDate",
    defaultType: "dateReverse",
  },
  billsOfLadingHistoryList: {
    defaultSortBy: "billOfLadingDate",
    defaultType: "dateReverse",
  },
  dataEntryInvoiceList: {
    defaultSortBy: "timeVendorName",
    defaultType: "timeVendorNameSorter",
  },
  invoiceList: { defaultSortBy: "invoiceDate", defaultType: "dateReverse" },
  historicBills: { defaultSortBy: "dueDate", defaultType: "dateReverse" },
  billsList: { defaultSortBy: "dueDate", defaultType: "dateReverse" },
  invoiceCommissaryList: {
    defaultSortBy: "invoiceDate",
    defaultType: "dateReverse",
  },
  electronicInvoiceIssuesList: {
    defaultSortBy: "emailedDate",
    defaultType: "dateReverse",
  },
  ServicesChargesDetailsChecks: {
    defaultSortBy: "voids",
    defaultType: "number",
  },
  ServicesChargesDetailsServers: {
    defaultSortBy: "voids",
    defaultType: "number",
  },
  packetsList: { defaultSortBy: "numberOfFiles", defaultType: "number" },
  DirectorBillsList: { defaultSortBy: "dueDate", defaultType: "dateReverse" },
  directorElectronicInvoiceIssuesList: {
    defaultSortBy: "emailedDate",
    defaultType: "dateReverse",
  },
  schedulesList: { defaultSortBy: "weekDates", defaultType: "dateReverse" },
  schedulesHistoricList: {
    defaultSortBy: "weekDates",
    defaultType: "dateReverse",
  },
};

export class SortOptions extends StorageModel {
  @tracked sortBy = "";
  @tracked reverseSort = false;
  @tracked index = null;
  @tracked isArray = false;
  @tracked type = "default";
  @tracked defaultSortBy = "";
  @tracked defaultType = "default";
}

export default class SortTableService extends Service {
  #settings = {};
  @service localStorage;

  getSortOptions(id) {
    let options = this.#settings[id];

    if (!options) {
      const storageKey = `sortSettings${id}`;
      const settings = this.localStorage.fetchSync(storageKey);
      this.#settings[id] = options = new SortOptions(storageKey);

      if (settings) {
        options.loadData(settings);
      } else {
        const defaults = DEFAULT_SORT_SETTINGS[id];
        if (defaults) {
          const { defaultSortBy, defaultType } = defaults;
          options.loadData({
            type: defaultType,
            sortBy: defaultSortBy,
            defaultType,
            defaultSortBy,
          });
        }
        this.localStorage.save(storageKey, options);
      }
    }

    return options;
  }

  setSortOptions(id, sortOptions) {
    this.#settings[id] = sortOptions;
    return this.saveSortOptions(id);
  }

  async saveSortOptions(id) {
    const options = this.#settings[id];

    if (options) {
      await this.localStorage.save(`sortSettings${id}`, options);
    } else {
      this.localStorage.removeItem(`sortSettings${id}`);
    }
  }
}
