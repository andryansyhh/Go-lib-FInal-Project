package user

import (
	"golib/entity"
	"time"
)

type UserFormat struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

type DeleteFormat struct {
	Message    string    `json:"message"`
	TimeDelete time.Time `json:"time_delete"`
}

func FormatUser(user entity.User) UserFormat {
	var formatUser = UserFormat{
		ID:    user.ID,
		Name:  user.Name,
		Email: user.Email,
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
