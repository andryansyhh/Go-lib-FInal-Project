package routes

import (
	"golib/bookDetail"
	"golib/handler"

	"github.com/gin-gonic/gin"
)

var (
	bookDetailRepository = bookDetail.NewRepository(DB)
	bookDetailService    = bookDetail.NewService(bookDetailRepository)
	bookDetailHandler    = handler.NewBookDetailHandler(bookDetailService)
)

func BookDetailRoute(r *gin.Engine) {
	r.POST("/book_detail/:id", handler.Middleware(userService, authService), handler.AdminMiddleware(userRepository), bookDetailHandler.SaveNewUrlFileHandler)
	r.PUT("/book_detail/:id", handler.Middleware(userService, authService), handler.AdminMiddleware(userRepository), bookDetailHandler.UpdateUrlFileByBookIDHandler)
}
