import Component from "@ember/component";
import { observer } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  notifications: service("notification-messages"),
  i18n: service(), 
  auth: service(), 
  store: service(),

 didReceiveAttrs: observer("menulist.isNew", function () { 
  this._super(...arguments); 
  this.set("selectedMarketId", 0); 
  this.set( 
    "btnText", 
    this.get("menulist.isNew") 
      ? this.i18n.t("menulists.new") 
      : this.i18n.t("menulists.update") 
    ); 
  }),

 actions: { 
  saveMenulist() { 
    const isNew = this.get("menulist.isNew"); 
    this.menulist.save().then(() => { 
      this.$(".modal").modal("hide"); 
      if (isNew) { 
        this.notifications.success(this.i18n.t("menulists.created.success"));
       } else { 
        this.notifications.success(this.i18n.t("menulists.updated.success")); 
      } 
    });
   },

 cancelMenulist() {
  this.menulist.rollbackAttributes(); 
  }, 
},
});