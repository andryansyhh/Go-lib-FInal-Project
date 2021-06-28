package handler

import (
	"fmt"
	"golib/book"
	"golib/entity"
	"golib/helper"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
)

type bookHandler struct {
	bookService book.BookService
}

func NewBookHandler(bookService book.BookService) *bookHandler {
	return &bookHandler{bookService}
}

func (h *bookHandler) ShowAllBookHandler(c *gin.Context) {
	categories, err := h.bookService.GetAllBook()

	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", categories)
	c.JSON(200, response)
}

func (h *bookHandler) ShowBookDetailByID(c *gin.Context) {
	bookID := c.Param("id")

	book, err := h.bookService.GetBookByID(bookID)
	if err != nil {
		responseError := helper.APINewResponse(400, "Input params error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", book)
	c.JSON(200, response)
}

// func (h *bookHandler) CreateBookHandler(c *gin.Context) {
// 	var bookInput entity.BookInput

// 	if err := c.ShouldBindJSON(&bookInput); err != nil {
// 		splitError := helper.SplitErrorInformation(err)
// 		responseError := helper.APINewResponse(400, "Input data required", gin.H{"errors": splitError})

// 		c.JSON(400, responseError)
// 		return
// 	}

// 	response, err := h.bookService.SaveNewBook(bookInput)
// 	if err != nil {
// 		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

// 		c.JSON(500, responseError)
// 		return
// 	}

func (h *bookHandler) CreateBookHandler(c *gin.Context) {
	title := c.PostForm("title")
	urlVideo := c.PostForm("url_video")
	categoryID := c.PostForm("category_id")
	file, err := c.FormFile("file")

	if err != nil {
		responseError := helper.APINewResponse(400, "Input data error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	titleFile := strings.Replace(title, " ", "-", -1)
	fileName := strings.Replace(file.Filename, " ", "-", -1)
	path := fmt.Sprintf("file/%s-%s", titleFile, fileName)

	err = c.SaveUploadedFile(file, path)

	if err != nil {
		responseError := helper.APINewResponse(400, "Status bad request", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	pathFileSave := "https://go-lib.herokuapp.com/" + path
	categoryIDConv, _ := strconv.Atoi(categoryID)
	book, err := h.bookService.SaveNewBook(title, urlVideo, pathFileSave, categoryIDConv)

	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", book)
	c.JSON(200, response)
}

func (h *bookHandler) UpdateBookByIDHandler(c *gin.Context) {
	bookID := c.Param("id")

	var updateInputBook entity.UpdateBookInput

	if err := c.ShouldBindJSON(&updateInputBook); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APINewResponse(400, "Input params error", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	updateBook, err := h.bookService.UpdateBookByID(bookID, updateInputBook)

	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", updateBook)
	c.JSON(200, response)
}

func (h *bookHandler) UpdateFileByIDHandler(c *gin.Context) {
	bookID := c.Param("id")

	file, err := c.FormFile("file")

	if err != nil {
		responseError := helper.APINewResponse(400, "Input data error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	fileName := strings.Replace(file.Filename, " ", "-", -1)
	path := fmt.Sprintf("file/%s", fileName)

	err = c.SaveUploadedFile(file, path)

	if err != nil {
		responseError := helper.APINewResponse(400, "Status bad request", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	pathFileSave := "https://go-lib.herokuapp.com/" + path
	book, err := h.bookService.UpdateFileByID(pathFileSave, bookID)

	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", book)
	c.JSON(200, response)
}

func (h *bookHandler) DeleteBookHandler(c *gin.Context) {
	bookID := c.Param("id")

	book, err := h.bookService.DeleteBookByID(bookID)

	if err != nil {
		responseError := helper.APINewResponse(400, "Input params error", gin.H{"errors": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", book)
	c.JSON(200, response)
}

func (h *bookHandler) LengthBookHandler(c *gin.Context) {
	length, err := h.bookService.LengthAllBooks()

	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", length)
	c.JSON(200, response)

}
