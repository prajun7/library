import { tracked } from '@glimmer/tracking';

export default class Book {
    @tracked id;
    @tracked title;
    @tracked isbn;
    @tracked publishedDate;
    @tracked authorList;

    constructor(o = {
        id: 0,
        title: '',
        author: '',
        genre: '',
        count: 0,
    }) {
        this.id = o.id;
        this.title = o.title;
        this.author = o.author;
        this.genre = o.genre;
        this.count = o.count;
    }

}