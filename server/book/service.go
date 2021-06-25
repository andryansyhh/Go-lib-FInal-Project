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
	SaveNewBook(title, urlVideo, urlFile string, categoryID int) (BookFormat, error)
	UpdateBookByID(bookID string, dataInput entity.UpdateBookInput) (BookFormat, error)
	UpdateFileByID(pathFile, bookID string) (BookFormat, error)
	DeleteBookByID(bookID string) (interface{}, error)
	LengthAllBooks() (interface{}, error)
}

type bookService struct {
	repository Repository
}

func NewBookService(repository Repository) *bookService {
	return &bookService{repository}
}

func (s *bookService) GetAllBook() ([]BookFormat, error) {

	books, err := s.repository.GetAll()

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

	book, err := s.repository.FindBookID(bookID)

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

func (s *bookService) SaveNewBook(title, urlVideo, urlFile string, categoryID int) (BookFormat, error) {
	var newBook = entity.Books{
		Title:      title,
		CategoryID: categoryID,
		UrlVideo:   urlVideo,
		UrlFile: 		urlFile,
	}

	createBook, err := s.repository.NewBook(newBook)
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

	book, err := s.repository.FindBookID(bookID)

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

	bookUpdated, err := s.repository.UpdateBook(bookID, dataUpdate)

	if err != nil {
		return BookFormat{}, err
	}

	formatBook := FormatBook(bookUpdated)

	return formatBook, nil
}

func (s *bookService) UpdateFileByID(pathFile, bookID string) (BookFormat, error) {

	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(bookID); err != nil {
		return BookFormat{}, err
	}

	book, err := s.repository.FindBookID(bookID)

	if err != nil {
		return BookFormat{}, err
	}

	if book.ID == 0 {
		newError := fmt.Sprintf("Book id %s not found", bookID)

		return BookFormat{}, errors.New(newError)
	}

	if pathFile != "" || len(pathFile) != 0 {
		dataUpdate["url_file"] = pathFile
	}

	dataUpdate["updated_at"] = time.Now()

	bookUpdated, err := s.repository.UpdateBook(bookID, dataUpdate)

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

	book, err := s.repository.FindBookID(bookID)

	if err != nil {
		return nil, err
	}

	if book.ID == 0 {
		newError := fmt.Sprintf("Book id %s not found", bookID)
		return nil, errors.New(newError)
	}

	status, err := s.repository.DeleteBook(bookID)

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

func (s *bookService) LengthAllBooks() (interface{}, error) {
	length, err := s.repository.LengthBook()

	if err != nil {
		return nil, err
	}

	return length, nil
}
