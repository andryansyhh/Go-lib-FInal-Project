package handler

import (
	"golib/auth"
	"golib/user"

	"github.com/gin-gonic/gin"
)

type oauthHandler struct {
	service user.Service
	auth    auth.Service
}

func NewOauthHandler(userService user.Service, authService auth.Service) *oauthHandler {
	return &oauthHandler{userService, authService}
}

func (h *oauthHandler) RegisterOauth(c *gin.Context) {

}
