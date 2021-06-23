package user

import (
	"errors"
	"fmt"
	"golib/entity"
	"golib/helper"
	"time"

	"golang.org/x/crypto/bcrypt"
)

type Service interface {
	GetAllUser() ([]UserFormat, error)
	SaveNewUser(user entity.UserInput) (UserFormat, error)
	GetUserByID(userID string) (UserFormat, error)
	DeleteUserByID(userID string) (interface{}, error)
	UpdateUserByID(userID string, dataInput entity.UpdateUserInput) (UserFormat, error)
	LoginUser(input entity.LoginUserInput) (entity.User, error)
}

type service struct {
	repository Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) LoginUser(input entity.LoginUserInput) (entity.User, error) {
	user, err := s.repository.FindByEmail(input.Email)

	if err != nil {
		return user, err
	}

	if user.ID == 0 {
		newError := "user is not found"
		return user, errors.New(newError)
	}

	// pengecekan password
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(input.Password)); err != nil {
		return user, errors.New("password invalid")
	}

	return user, nil
}

func (s *service) GetAllUser() ([]UserFormat, error) {
	// melakukan business logic disini
	users, err := s.repository.FindAll()
	var formatUsers []UserFormat

	for _, user := range users {
		formatUser := FormatUser(user)
		formatUsers = append(formatUsers, formatUser)
	}

	if err != nil {
		return formatUsers, err
	}

	return formatUsers, nil
}

func (s *service) SaveNewUser(user entity.UserInput) (UserFormat, error) {
	genPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.MinCost)

	if err != nil {
		return UserFormat{}, err
	}

	var newUser = entity.User{
		Name:      user.Name,
		UserName:  user.UserName,
		Email:     user.Email,
		Password:  string(genPassword),
		Role:      "User",
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	createUser, err := s.repository.Create(newUser)
	formatUser := FormatUser(createUser)

	if err != nil {
		return formatUser, err
	}

	return formatUser, nil
}

func (s *service) GetUserByID(userID string) (UserFormat, error) {
	if err := helper.ValidateIDNumber(userID); err != nil {
		return UserFormat{}, err
	}

	user, err := s.repository.FindByID(userID)

	if err != nil {
		return UserFormat{}, err
	}

	var userData = entity.User{
		ID:        user.ID,
		Name:      user.Name,
		UserName:  user.UserName,
		Email:     user.Email,
		Password:  user.Password,
		Role:      user.Role,
		CreatedAt: user.CreatedAt,
		UpdatedAt: user.UpdatedAt,
	}

	if user.ID == 0 {
		newError := fmt.Sprintf("user id %s not found", userID)
		return UserFormat{}, errors.New(newError)
	}

	formatUser := FormatUser(userData)

	return formatUser, nil
}

func (s *service) DeleteUserByID(userID string) (interface{}, error) {
	if err := helper.ValidateIDNumber(userID); err != nil {
		return nil, err
	}

	user, err := s.repository.FindByID(userID)

	if err != nil {
		return nil, err
	}
	if user.ID == 0 {
		newError := fmt.Sprintf("user id %s not found", userID)
		return nil, errors.New(newError)
	}

	status, err := s.repository.DeleteByID(userID)

	if status == "error" {
		return nil, errors.New("error delete in internal server")
	}

	msg := fmt.Sprintf("success delete user ID : %s", userID)

	formatDelete := FormatDeleteUser(msg)

	return formatDelete, nil
}

//(UserFormat, error)

func (s *service) UpdateUserByID(userID string, dataInput entity.UpdateUserInput) (UserFormat, error) {
	var dataUpdate = map[string]interface{}{}

	if err := helper.ValidateIDNumber(userID); err != nil {
		return UserFormat{}, err
	}

	user, err := s.repository.FindByID(userID)

	if err != nil {
		return UserFormat{}, err
	}

	if user.ID == 0 {
		newError := fmt.Sprintf("user id %s not found", userID)
		return UserFormat{}, errors.New(newError)
	}

	if dataInput.Name != "" || len(dataInput.Name) != 0 {
		dataUpdate["name"] = dataInput.Name
	}
	if dataInput.Email != "" || len(dataInput.Email) != 0 {
		dataUpdate["email"] = dataInput.Email
	}
	if dataInput.UserName != "" || len(dataInput.UserName) != 0 {
		dataUpdate["user_name"] = dataInput.UserName
	}

	dataUpdate["updated_at"] = time.Now()

	// fmt.Println(dataUpdate)

	userUpdated, err := s.repository.UpdateByID(userID, dataUpdate)

	if err != nil {
		return UserFormat{}, err
	}

	formatUser := FormatUser(userUpdated)

	return formatUser, nil
}
