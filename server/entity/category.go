package entity

import (
	"time"

	"gorm.io/gorm"
)

type Categories struct {
	ID           int            `gorm:"primaryKey" json:"id"`
	CategoryName string         `json:"category_name"`
	Books        []Books        `gorm:"foreignKey:CategoryID" json:"books"`
	CreatedAt    time.Time      `json:"created_at"`
	UpdatedAt    time.Time      `json:"updated_at"`
	Deleted      gorm.DeletedAt `json:"-"`
}

type CategoryInput struct {
	CategoryName string `json:"category_name" binding:"required"`
}
