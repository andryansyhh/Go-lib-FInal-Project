package handler

import (
	"golib/auth"
	"golib/entity"
	"golib/helper"
	"golib/user"

	"github.com/gin-gonic/gin"
)

type userHandler struct {
	userService user.Service
	authService auth.Service
}

func NewUserHandler(userService user.Service, authService auth.Service) *userHandler {
	return &userHandler{userService, authService}
}

func (h *userHandler) ShowUserHandler(c *gin.Context) {
	users, err := h.userService.GetAllUser()

	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", users)
	c.JSON(200, response)
}

func (h *userHandler) CreateUserHandler(c *gin.Context) {
	var inputUser entity.UserInput

	if err := c.ShouldBindJSON(&inputUser); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APINewResponse(400, "Input data required", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	newUser, err := h.userService.SaveNewUser(inputUser)
	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(201, "Create new user succeed", newUser)
	c.JSON(201, response)
}

func (h *userHandler) GetUserByIDHandler(c *gin.Context) {
	id := c.Params.ByName("user_id")

	user, err := h.userService.GetUserByID(id)
	if err != nil {
		responseError := helper.APINewResponse(400, "Input params error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", user)
	c.JSON(200, response)
}

func (h *userHandler) DeleteUserByIDHandler(c *gin.Context) {
	id := c.Params.ByName("user_id")

	user, err := h.userService.DeleteUserByID(id)

	if err != nil {
		responseError := helper.APINewResponse(400, "Input params error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", user)
	c.JSON(200, response)
}

func (h *userHandler) UpdateUserByIDHandler(c *gin.Context) {
	id := c.Params.ByName("user_id")

	var updateUserInput entity.UpdateUserInput

	if err := c.ShouldBindJSON(&updateUserInput); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APINewResponse(400, "Input data required", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	user, err := h.userService.UpdateUserByID(id, updateUserInput)
	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", user)
	c.JSON(200, response)
}

func (h *userHandler) LoginUserHandler(c *gin.Context) {
	var inputLoginUser entity.LoginUserInput

	if err := c.ShouldBindJSON(&inputLoginUser); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APINewResponse(400, "Input data required", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	userData, err := h.userService.LoginUser(inputLoginUser)

	if err != nil {
		responseError := helper.APINewResponse(401, "Input data error", gin.H{"errors": err.Error()})

		c.JSON(401, responseError)
		return
	}

	token, err := h.authService.GenerateToken(userData.ID)
	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(401, responseError)
		return
	}
	response := helper.APINewResponse(200, "Login user succeed", gin.H{"token": token, "role": userData.Role, "user_id": userData.ID})
	c.JSON(200, response)
}
