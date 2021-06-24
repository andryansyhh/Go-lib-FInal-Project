package routes

import (
	"golib/handler"

	"github.com/gin-gonic/gin"
)

func ContentRoute(r *gin.Engine) {
	r.GET("/contents", handler.ShowAllContent)
}
