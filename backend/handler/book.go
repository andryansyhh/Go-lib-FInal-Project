package handler

import (
	"golib/book"
	"golib/entity"
	"golib/helper"

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

func (h *bookHandler) CreateBookHandler(c *gin.Context) {
	var bookInput entity.BookInput

	if err := c.ShouldBindJSON(&bookInput); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APINewResponse(400, "Input data required", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	response, err := h.bookService.SaveNewBook(bookInput)
	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	newResponse := helper.APINewResponse(200, "Success", response)
	c.JSON(201, newResponse)
}

func (h *bookHandler) UpdateBookByIDHandler(c *gin.Context) {
	bookID := c.Param("id")

	var updateInputBook entity.BookInput

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
