package book

import (
	"golib/entity"
	"time"
)

type BookFormat struct {
	BookID   int    `gorm:"primaryKey" json:"book_id"`
	Title    string `json:"title"`
	UrlFile  string `json:"url_file"`
	UrlVideo string `json:"url_video"`
}

type DeleteBookformat struct {
	Message    string    `json:"message"`
	TimeDelete time.Time `json:"time_delete"`
}

func FormatBook(book entity.Books) BookFormat {

	var formatBook = BookFormat{
		BookID:   book.BookID,
		Title:    book.Title,
		UrlFile:  book.UrlFile,
		UrlVideo: book.UrlVideo,
	}

	return formatBook
}

func FormatDeleteBook(message string) DeleteBookformat {
	var deleteBookFormat = DeleteBookformat{
		Message:    message,
		TimeDelete: time.Now(),
	}
	return deleteBookFormat
}
