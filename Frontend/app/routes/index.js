import Route from '@ember/routing/route';
import fetch from 'fetch';

// Route files are like useEffect() from React,
// Whenever we go to this page it automatically runs the mode only once and get the
// data from the backend.
// Just like useEffect with empty array, []

export default class IndexRoute extends Route { 
  model() {
    return fetch('http://localhost:9090/books')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }
}
