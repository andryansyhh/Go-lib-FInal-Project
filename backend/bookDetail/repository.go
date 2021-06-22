package bookDetail

import (
	"golib/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindByBookID(bookID string) (entity.BookDetail, error)
	CreateUrlFile(bookDetail entity.BookDetail) (entity.BookDetail, error)
	UpdateUrlFile(ID string, dataUpdate map[string]interface{}) (entity.BookDetail, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindByBookID(bookID string) (entity.BookDetail, error) {
	var bookDetail entity.BookDetail

	if err := r.db.Where("book_id = ?", bookID).Find(&bookDetail).Error; err != nil {
		return bookDetail, err
	}

	return bookDetail, nil
}

func (r *repository) CreateUrlFile(bookDetail entity.BookDetail) (entity.BookDetail, error) {
	if err := r.db.Create(&bookDetail).Error; err != nil {
		return bookDetail, err
	}

	return bookDetail, nil
}

func (r *repository) UpdateUrlFile(ID string, dataUpdate map[string]interface{}) (entity.BookDetail, error) {
	var bookDetail entity.BookDetail

	if err := r.db.Model(&bookDetail).Where("id = ?", ID).Updates(dataUpdate).Error; err != nil {
		return bookDetail, err
	}

	if err := r.db.Where("id = ?", ID).Find(&bookDetail).Error; err != nil {
		return bookDetail, err
	}

	return bookDetail, nil
}
