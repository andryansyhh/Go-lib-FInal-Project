package entity

import "time"

type Books struct {
	BookID    int       `gorm:"primaryKey" json:"book_id"`
	Title     string    `json:"title"`
	UrlFile   string    `json:"url_file"`
	UrlVideo  string    `json:"url_video"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type BookDetail struct {
	BookDetailID int    `gorm:"primaryKey" json:"book_detail_id"`
	Description  string `json:"description"`
}

type BookInput struct {
	Title string `json:"title" binding:"required"`
}
