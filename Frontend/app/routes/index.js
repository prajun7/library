import Route from '@ember/routing/route';

// Route files are like useEffect() from React,
// Whenever we go to this page it automatically runs the mode only once and get the
// data from the backend.
// Just like useEffect with empty array, []

export default class IndexRoute extends Route {
  model() {
    console.log("we are in the route");
    // return fetch("/books")
    //     .then(res => res.json())
    //     .then(res => res.map(o => new Book(o)))
    //     .then(books => A(books));
    // }
  }
}
