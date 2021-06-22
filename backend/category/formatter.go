package category

import (
	"golib/entity"
	"time"
)

type CategoryFormat struct {
	ID           int    `json:"id"`
	CategoryName string `json:"category_name"`
}

type DetailCategoryFormat struct {
	ID           int            `json:"id"`
	CategoryName string         `json:"category_name"`
	Books        []entity.Books `json:"books"`
}

type DeleteCategoryFormat struct {
	Message    string    `json:"message"`
	TimeDelete time.Time `json:"delete_time"`
}

func FormattingCategory(category entity.Categories) CategoryFormat {
	categoryFormat := CategoryFormat{
		ID:           category.ID,
		CategoryName: category.CategoryName,
	}

	return categoryFormat
}

func FormattingDetailCategory(category entity.Categories) DetailCategoryFormat {
	categoryFormat := DetailCategoryFormat{
		ID:           category.ID,
		CategoryName: category.CategoryName,
		Books:        category.Books,
	}

	return categoryFormat
}

func FormatDeleteCategory(msg string) DeleteCategoryFormat {
	var deleteFormat = DeleteCategoryFormat{
		Message:    msg,
		TimeDelete: time.Now(),
	}
	return deleteFormat
}
