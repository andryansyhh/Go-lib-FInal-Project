package book

import (
	"golib/entity"
	"time"
)

type BookFormat struct {
	ID         int    `gorm:"primaryKey" json:"id"`
	Title      string `json:"title"`
	UrlFile    string `json:"url_file"`
	UrlVideo   string `json:"url_video"`
	CategoryID int    `json:"category_id"`
}

type DeleteBookformat struct {
	Message    string    `json:"message"`
	TimeDelete time.Time `json:"time_delete"`
}

func FormatBook(book entity.Books) BookFormat {

	var formatBook = BookFormat{
		ID:         book.ID,
		Title:      book.Title,
		UrlFile:    book.UrlFile,
		UrlVideo:   book.UrlVideo,
		CategoryID: book.CategoryID,
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
