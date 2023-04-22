package com.example.Library.controller;

import com.example.Library.model.Book;
import com.example.Library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    @CrossOrigin
    @GetMapping("/books")
    public ResponseEntity<List<Book>> getAllBooks() {
        try {
            List<Book> books = new ArrayList<>();
            bookRepository.findAll().forEach(books::add);

            if (books.isEmpty()) {
                return new ResponseEntity<>(books, HttpStatus.OK);
            }

            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @CrossOrigin
    @GetMapping("/book/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        Optional<Book> book = bookRepository.findById(id);

        if (book.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(book.get(), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/book")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        Book bookObj = bookRepository.save(book);

        return new ResponseEntity<>(bookObj, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/book/{id}")
    public ResponseEntity<Book> updateBookById(@PathVariable Long id, @RequestBody Book newBook) {
        Optional<Book> oldBook = bookRepository.findById(id);

        if (oldBook.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Book updatedBook = oldBook.get();
        updatedBook.setTitle(newBook.getTitle());
        updatedBook.setAuthor(newBook.getAuthor());
        updatedBook.setGenre(newBook.getGenre());
        updatedBook.setCount(newBook.getCount());

        Book bookObj = bookRepository.save(updatedBook);
        return new ResponseEntity<>(bookObj, HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping("/book/{id}")
    public ResponseEntity<HttpStatus> deleteBookById(@PathVariable Long id) {
        bookRepository.deleteById(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
