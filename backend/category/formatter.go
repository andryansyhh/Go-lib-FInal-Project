package category

import (
	"golib/entity"
	"time"
)

type CategoryFormat struct {
	ID           int    `json:"id"`
	CategoryName string `json:"category_name"`
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

func FormatDeleteCategory(msg string) DeleteCategoryFormat {
	var deleteFormat = DeleteCategoryFormat{
		Message:    msg,
		TimeDelete: time.Now(),
	}
	return deleteFormat
}
