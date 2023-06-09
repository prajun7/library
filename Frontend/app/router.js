/**
 * This file stores all the route.
 */

import EmberRouter from '@ember/routing/router';
import config from 'bookstore/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("book", {path:'book/:book_id'})
  this.route("error", { path: "*path"});
});
 