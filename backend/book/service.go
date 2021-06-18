package book

import (
	"errors"
	"fmt"
	"golib/entity"
	"golib/helper"
	"time"
)

type BookService interface {
	GetAllBook() ([]BookFormat, error)
	GetBookByID(bookID string) (BookFormat, error)
	SaveNewBook(book entity.BookInput) (BookFormat, error)
	UpdateBookByID(bookID string, dataInput entity.UpdateBookInput) (BookFormat, error)
	DeleteBookByID(bookID string) (interface{}, error)
}

type bookService struct {
	reposirtory Repository
}

func NewBookService(reposirtory Repository) *bookService {
	return &bookService{reposirtory}
}

func (s *bookService) GetAllBook() ([]BookFormat, error) {

	books, err := s.reposirtory.GetAll()

	var booksFormat []BookFormat

	for _, book := range books {
		var bookFormat = FormatBook(book)
		booksFormat = append(booksFormat, bookFormat)
	}

	if err != nil {
		return booksFormat, err
	}

	return booksFormat, nil
}

func (s *bookService) GetBookByID(bookID string) (BookFormat, error) {

	if err := helper.ValidateIDNumber(bookID); err != nil {
		return BookFormat{}, err
	}

	book, err := s.reposirtory.FindBookID(bookID)

	if err != nil {
		return BookFormat{}, err
	}

	if book.ID == 0 {
		newError := fmt.Sprintf("Book id %s not found", bookID)

		return BookFormat{}, errors.New(newError)
	}

	formatBook := FormatBook(book)
	return formatBook, nil
}

func (s *bookService) SaveNewBook(book entity.BookInput) (BookFormat, error) {

	var newBook = entity.Books{
		Title:      book.Title,
		CategoryID: book.CategoryID,
		UrlVideo:   book.UrlVideo,
	}

	createBook, err := s.reposirtory.NewBook(newBook)
	formatBook := FormatBook(createBook)

	if err != nil {
		return formatBook, err
	}

	return formatBook, nil
}

func (s *bookService) UpdateBookByID(bookID string, dataInput entity.UpdateBookInput) (BookFormat, error) {

	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(bookID); err != nil {
		return BookFormat{}, err
	}

	book, err := s.reposirtory.FindBookID(bookID)

	if err != nil {
		return BookFormat{}, err
	}

	if book.ID == 0 {
		newError := fmt.Sprintf("Book id %s not found", bookID)

		return BookFormat{}, errors.New(newError)
	}

	if dataInput.Title != "" || len(dataInput.Title) != 0 {
		dataUpdate["title"] = dataInput.Title
	}
	if dataInput.CategoryID != 0 {
		dataUpdate["category_id"] = dataInput.CategoryID
	}
	if dataInput.UrlVideo != "" || len(dataInput.UrlVideo) != 0 {
		dataUpdate["url_video"] = dataInput.UrlVideo
	}

	dataUpdate["updated_at"] = time.Now()

	bookUpdated, err := s.reposirtory.UpdateBook(bookID, dataUpdate)

	if err != nil {
		return BookFormat{}, err
	}

	formatBook := FormatBook(bookUpdated)

	return formatBook, nil
}

func (s *bookService) DeleteBookByID(bookID string) (interface{}, error) {

	if err := helper.ValidateIDNumber(bookID); err != nil {
		return BookFormat{}, err
	}

	book, err := s.reposirtory.FindBookID(bookID)

	if err != nil {
		return nil, err
	}

	if book.ID == 0 {
		newError := fmt.Sprintf("Book id %s not found", bookID)
		return nil, errors.New(newError)
	}

	status, err := s.reposirtory.DeleteBook(bookID)

	if err != nil {
		return nil, err
	}

	if status == "error" {
		return nil, errors.New("internal server error")
	}

	msg := fmt.Sprintf("Delete book id %s succeed", bookID)
	formatDelete := FormatDeleteBook(msg)

	return formatDelete, nil
}
