package category

import (
	"errors"
	"fmt"
	"golib/entity"
	"golib/helper"
	"time"
)

type CategoryService interface {
	GetAllCategories() ([]CategoryFormat, error)
	SaveNewCategory(category entity.CategoryInput) (CategoryFormat, error)
	FindCategoryByID(categoryID string) (DetailCategoryFormat, error)
	UpdateCategoryByID(categoryID string, dataInput entity.CategoryInput) (CategoryFormat, error)
	DeleteCategoryByID(categoryID string) (interface{}, error)
	LengthAllCategory() (interface{}, error)
}

type categoryService struct {
	repository CategoryRepository
}

func NewService(repository CategoryRepository) *categoryService {
	return &categoryService{repository}
}

func (s *categoryService) GetAllCategories() ([]CategoryFormat, error) {
	categories, err := s.repository.GetAll()

	var categoriesFormat []CategoryFormat

	for _, category := range categories {
		var categoryFormat = FormattingCategory(category)
		categoriesFormat = append(categoriesFormat, categoryFormat)
	}

	if err != nil {
		return categoriesFormat, err
	}

	return categoriesFormat, nil
}

func (s *categoryService) SaveNewCategory(category entity.CategoryInput) (CategoryFormat, error) {
	var newCategory = entity.Categories{
		CategoryName: category.CategoryName,
	}

	createCategory, err := s.repository.NewCategory(newCategory)
	formatCategory := FormattingCategory(createCategory)

	if err != nil {
		return formatCategory, err
	}

	return formatCategory, nil
}

func (s *categoryService) FindCategoryByID(categoryID string) (DetailCategoryFormat, error) {
	if err := helper.ValidateIDNumber(categoryID); err != nil {
		return DetailCategoryFormat{}, err
	}

	category, err := s.repository.FindCategoryID(categoryID)

	if err != nil {
		return DetailCategoryFormat{}, err
	}

	if category.ID == 0 {
		newError := fmt.Sprintf("category id %s not found", categoryID)
		return DetailCategoryFormat{}, errors.New(newError)
	}

	formatCategory := FormattingDetailCategory(category)
	return formatCategory, nil
}

func (s *categoryService) UpdateCategoryByID(categoryID string, dataInput entity.CategoryInput) (CategoryFormat, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(categoryID); err != nil {
		return CategoryFormat{}, err
	}

	category, err := s.repository.FindCategoryID(categoryID)

	if err != nil {
		return CategoryFormat{}, err
	}

	if category.ID == 0 {
		newError := fmt.Sprintf("category id %s not found", categoryID)
		return CategoryFormat{}, errors.New(newError)
	}

	if dataInput.CategoryName != "" || len(dataInput.CategoryName) != 0 {
		dataUpdate["category_name"] = dataInput.CategoryName
	}

	dataUpdate["updated_at"] = time.Now()

	categoryUpdated, err := s.repository.UpdateCategory(categoryID, dataUpdate)

	if err != nil {
		return CategoryFormat{}, err
	}

	formatCategory := FormattingCategory(categoryUpdated)

	return formatCategory, nil
}

func (s *categoryService) DeleteCategoryByID(categoryID string) (interface{}, error) {
	if err := helper.ValidateIDNumber(categoryID); err != nil {
		return CategoryFormat{}, err
	}

	category, err := s.repository.FindCategoryID(categoryID)

	if err != nil {
		return nil, err
	}

	if category.ID == 0 {
		newError := fmt.Sprintf("category id %s not found", categoryID)
		return nil, errors.New(newError)
	}

	status, err := s.repository.DeleteCategory(categoryID)

	if err != nil {
		return nil, err
	}

	if status == "error" {
		return nil, errors.New("Internal server error")
	}

	msg := fmt.Sprintf("Delete category id %s succeed", categoryID)
	formatDelete := FormatDeleteCategory(msg)

	return formatDelete, nil
}

func (s *categoryService) LengthAllCategory() (interface{}, error) {
	length, err := s.repository.LengthCategory()

	if err != nil {
		return nil, err
	}

	return length, nil
}
