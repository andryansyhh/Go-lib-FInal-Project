package bookDetail

import (
	"golib/entity"
	"golib/helper"
)

type Service interface {
	GetUrlFileByBookID(bookID string) (entity.BookDetail, error)
	SaveNewUrlFile(pathFile string, bookID int) (entity.BookDetail, error)
	UpdateUrlFileByID(pathFile string, bookDetailID string) (entity.BookDetail, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) GetUrlFileByBookID(bookID string) (entity.BookDetail, error) {
	bookDetail, err := s.repository.FindByBookID(bookID)

	if err != nil {
		return bookDetail, err
	}

	return bookDetail, nil
}

func (s *service) SaveNewUrlFile(pathFile string, bookID int) (entity.BookDetail, error) {
	newBookDetail := entity.BookDetail{
		UrlFile: pathFile,
		BookID:  bookID,
	}

	bookDetail, err := s.repository.CreateUrlFile(newBookDetail)

	if err != nil {
		return bookDetail, err
	}

	return bookDetail, nil
}

func (s *service) UpdateUrlFileByID(pathFile string, bookDetailID string) (entity.BookDetail, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(bookDetailID); err != nil {
		return entity.BookDetail{}, err
	}

	dataUpdate["url_file"] = pathFile

	bookDetailUpdate, err := s.repository.UpdateUrlFile(bookDetailID, dataUpdate)

	if err != nil {
		return bookDetailUpdate, err
	}
	return bookDetailUpdate, nil
}
