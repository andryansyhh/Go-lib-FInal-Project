package migration

import "time"

type User struct {
	ID        int `gorm:"primaryKey"`
	Name      string
	Email     string `gorm:"unique"`
	Password  string
	Role      string
	UserName  string
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt time.Time `gorm:"index"`
}

type Books struct {
	BookID    int       `gorm:"primaryKey" json:"book_id"`
	Title     string    `json:"title"`
	UrlFile   string    `json:"url_file"`
	UrlVideo  string    `json:"url_video"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

type Categories struct {
	ID           int       `gorm:"primaryKey" json:"id"`
	CategoryName string    `json:"category_name"`
	Books        []Books   `json:"books"`
	CreatedAt    time.Time `json:"created_at"`
	UpdateAt     time.Time `json:"updated_at"`
}

type BookDetail struct {
	ID      int    `json:"id"`
	UrlFile string `json:"url_file"`
	BookID  int    `json:"book_id"`
}
