package entity

import (
	"time"

	"gorm.io/gorm"
)

type Books struct {
	ID    int    `gorm:"primaryKey" json:"id"`
	Title string `json:"title"`
	UrlFile    string         `json:"url_file"`
	// BookDetail BookDetail     `gorm:"foreignKey:BookID" json:"book_detail"`
	UrlVideo   string         `json:"url_video"`
	CategoryID int            `json:"category_id"`
	CreatedAt  time.Time      `json:"created_at"`
	UpdatedAt  time.Time      `json:"updated_at"`
	Deleted    gorm.DeletedAt `json:"-"`
}

// type BookDetail struct {
// 	BookDetailID int    `gorm:"primaryKey" json:"book_detail_id"`
// 	Description  string `json:"description"`
// }

type BookInput struct {
	Title      string `json:"title" binding:"required"`
	CategoryID int    `json:"category_id" binding:"required"`
	UrlVideo   string `json:"url_video"`
	UrlFile    string `json:"url_file"`
}

type UpdateBookInput struct {
	Title      string `json:"title"`
	CategoryID int    `json:"category_id"`
	UrlVideo   string `json:"url_video"`
	UrlFile    string	`json:"url_file"`
}

type BookDetailOutput struct {
	ID         int         `gorm:"primaryKey" json:"id"`
	Title      string      `json:"title"`
	UrlVideo   string      `json:"url_video"`
	UrlFile    string			`json:"url_file"`
	// BookDetail *BookDetail `json:"book_detail"`
	CategoryID int         `json:"category_id"`
}
