package migration

import "time"

type User struct {
	ID        int `gorm:"primaryKey"`
	Name      string
	UserName  string
	Email     string `gorm:"unique"`
	Password  string
	CreateAt  time.Time
	UpdateAt  time.Time
	DeletedAt time.Time `gorm:"index"`
}
