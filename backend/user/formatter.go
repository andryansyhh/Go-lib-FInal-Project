package user

import (
	"golib/entity"
	"time"
)

type UserFormat struct {
	ID       int    `json:"id"`
	Name     string `json:"name"`
	UserName string `json:"user_name"`
	Email    string `json:"email"`
	Role     string `json:"role"`
}

type DeleteFormat struct {
	Message    string    `json:"message"`
	TimeDelete time.Time `json:"time_delete"`
}

func FormatUser(user entity.User) UserFormat {
	var formatUser = UserFormat{
		ID:       user.ID,
		Name:     user.Name,
		UserName: user.UserName,
		Email:    user.Email,
		Role:     user.Role,
	}

	return formatUser
}

func FormatDeleteUser(msg string) DeleteFormat {
	var deleteFormat = DeleteFormat{
		Message:    msg,
		TimeDelete: time.Now(),
	}

	return deleteFormat
}
