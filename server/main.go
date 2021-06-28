package main

import (
	"golib/handler"
	"golib/routes"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()
	// r.Static("/file", "./file")
	r.Use(handler.CorsMiddleware())

	routes.UserRoute(r)
	routes.CategoryRoute(r)
	routes.BooksRoute(r)
	routes.BookDetailRoute(r)
	routes.ContentRoute(r)

	port := os.Getenv("PORT")
	r.Run(":" + port)
}
