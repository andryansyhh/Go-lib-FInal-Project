package entity

import "time"

type Categories struct {
	ID           int       `gorm:"primaryKey" json:"id"`
	CategoryName string    `json:"category_name"`
	Books        []Books   `json:"books"`
	CreatedAt    time.Time `json:"created_at"`
	UpdateAt     time.Time `json:"updated_at"`
}

type CategoryInput struct {
	CategoryName string `json:"category_name" binding:"required"`
}
