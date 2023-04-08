package com.example.Library.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// Option + Command + A
// https://stackoverflow.com/questions/65643300/why-are-my-classes-marked-in-red-in-intellij-idea?fbclid=IwAR0i0YmE7hpgOPUVAXPX-QExl4QTt9o_7WuQURGvOldkEPbkOSV--DXTxkY#:~:text=It%20means%20that%20the%20files,to%20the%20VCS%20if%20desired

@Entity
public class Book {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String author;
    private String genre;
    private int count;

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
