package migration

import "time"

type User struct {
	ID        int `gorm:"primaryKey"`
	Name      string
	UserName  string
	Email     string `gorm:"unique"`
	Password  string
	Role      string
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt time.Time `gorm:"index"`
}
