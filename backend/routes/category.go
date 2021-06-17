package routes

import (
	"golib/category"
	"golib/handler"

	"github.com/gin-gonic/gin"
)

var (
	categoryRepository = category.NewRepository(DB)
	categoryService    = category.NewService(categoryRepository)
	categoryHandler    = handler.NewCategoryHandler(categoryService)
)

func CategoryRoute(r *gin.Engine) {
	r.GET("/categories", handler.Middleware(userService, authService), categoryHandler.ShowAllCategoryHandler)
	r.POST("/categories", handler.AdminMiddleware(userRepository), categoryHandler.CreateCategoryHandler)
	r.GET("/categories/:id", handler.Middleware(userService, authService), categoryHandler.ShowCategoryDetailByID)
	r.PUT("/categories/:id", handler.AdminMiddleware(userRepository), categoryHandler.UpdateCategoryByIDHandler)
	r.DELETE("/categories/:id", handler.AdminMiddleware(userRepository), categoryHandler.DeleteCategoryHandler)
}
