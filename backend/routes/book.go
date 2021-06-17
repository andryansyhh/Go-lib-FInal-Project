package routes

import (
	"golib/book"
	"golib/handler"

	"github.com/gin-gonic/gin"
)

var (
	bookRepository = book.NewBookRepository(DB)
	bookService    = book.NewBookService(*bookRepository)
	bookHandler    = handler.NewBookHandler(bookService)
)

func BooksRoute(r *gin.Engine) {
	r.GET("/books", handler.Middleware(userService, authService), bookHandler.ShowAllBookHandler)
	r.GET("/books/:id", handler.Middleware(userService, authService), bookHandler.ShowAllBookHandler)

	r.POST("/books", handler.AdminMiddleware(userRepository), bookHandler.CreateBookHandler)
	r.PUT("/books/:id", handler.AdminMiddleware(userRepository), bookHandler.UpdateBookByIDHandler)
	r.DELETE("/books/:id", handler.AdminMiddleware(userRepository), bookHandler.DeleteBookHandler)
}
