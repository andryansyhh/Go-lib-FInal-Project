package category

import (
	"golib/entity"

	"gorm.io/gorm"
)

type CategoryRepository interface {
	GetAll() ([]entity.Categories, error)
	NewCategory(category entity.Categories) (entity.Categories, error)
	FindCategoryID(categoryID string) (entity.Categories, error)
	UpdateCategory(categoryID string, dataUpdate map[string]interface{}) (entity.Categories, error)
	DeleteCategory(categoryID string) (string, error)
	LengthCategory() (int, error)
}

type Repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *Repository {
	return &Repository{db}
}

func (r *Repository) GetAll() ([]entity.Categories, error) {
	var Category []entity.Categories

	err := r.db.Find(&Category).Error
	if err != nil {
		return Category, err
	}

	return Category, nil
}

func (r *Repository) NewCategory(category entity.Categories) (entity.Categories, error) {
	if err := r.db.Create(&category).Error; err != nil {
		return category, err
	}

	return category, nil
}

func (r *Repository) FindCategoryID(categoryID string) (entity.Categories, error) {
	var category entity.Categories

	if err := r.db.Where("id = ?", categoryID).Preload("Books.BookDetail").Find(&category).Error; err != nil {
		return category, err
	}

	return category, nil
}

func (r *Repository) UpdateCategory(categoryID string, dataUpdate map[string]interface{}) (entity.Categories, error) {
	var category entity.Categories

	if err := r.db.Model(&category).Where("id = ?", categoryID).Updates(dataUpdate).Error; err != nil {
		return category, err
	}

	if err := r.db.Where("id = ?", categoryID).Find(&category).Error; err != nil {
		return category, err
	}

	return category, nil
}

func (r *Repository) DeleteCategory(categoryID string) (string, error) {
	if err := r.db.Where("id = ?", categoryID).Delete(&entity.Categories{}).Error; err != nil {
		return "error", err
	}

	return "success", nil
}

func (r *Repository) LengthCategory() (int, error) {
	var Category []entity.Categories

	result := r.db.Find(&Category)
	length := result.RowsAffected

	return int(length), nil
}
