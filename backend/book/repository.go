package book

import (
	"golib/entity"

	"gorm.io/gorm"
)

type BookRepository interface {
	GetAll() ([]entity.Books, error)
	NewBook(book entity.Books) (entity.Books, error)
	FindBookID(bookID string) (entity.Books, error)
	UpdateBook(bookID string, dataUpdate map[string]interface{}) (entity.Books, error)
	DeleteBook(bookID string) (string, error)
}

type Repository struct {
	db *gorm.DB
}

func NewBookRepository(db *gorm.DB) *Repository {
	return &Repository{db}
}

func (r *Repository) GetAll() ([]entity.Books, error) {
	var book []entity.Books

	err := r.db.Find(&book).Error
	if err != nil {
		return book, err
	}

	return book, nil
}

func (r *Repository) NewBook(book entity.Books) (entity.Books, error) {
	if err := r.db.Create(&book).Error; err != nil {
		return book, err
	}

	return book, nil
}

func (r *Repository) FindBookID(bookID string) (entity.Books, error) {
	var book entity.Books

	if err := r.db.Where("id = ?", bookID).Preload("Books").Find(&book).Error; err != nil {
		return book, err
	}

	return book, nil
}

func (r *Repository) UpdateBook(bookID string, dataUpdate map[string]interface{}) (entity.Books, error) {
	var book entity.Books

	if err := r.db.Model(&book).Where("id = ?", bookID).Updates(dataUpdate).Error; err != nil {
		return book, err
	}

	if err := r.db.Where("id = ?", bookID).Find(&book).Error; err != nil {
		return book, err
	}

	return book, nil
}

func (r *Repository) DeleteBook(bookID string) (string, error) {
	if err := r.db.Where("id = ?", bookID).Delete(&entity.Books{}).Error; err != nil {
		return "error", err
	}

	return "success", nil
}
