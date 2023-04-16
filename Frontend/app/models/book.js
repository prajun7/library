import { tracked } from '@glimmer/tracking';

export default class Book {
  @tracked id;
  @tracked title;
  @tracked author;
  @tracked genre;
  @tracked count;

  constructor(
    o = {
      id: 0,
      title: '',
      author: '',
      genre: '',
      count: 0,
    }
  ) {
    this.id = o.id;
    this.title = o.title;
    this.author = o.author;
    this.genre = o.genre;
    this.count = o.count;
  }
}
