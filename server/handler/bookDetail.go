package handler

import (
	"fmt"
	"golib/bookDetail"
	"golib/helper"
	"strconv"

	"github.com/gin-gonic/gin"
)

type bookDetailHandler struct {
	service bookDetail.Service
}

func NewBookDetailHandler(service bookDetail.Service) *bookDetailHandler {
	return &bookDetailHandler{service}
}

func (h *bookDetailHandler) GetBookdetailByBookIDHandler(c *gin.Context) {
	bookID := c.Param("id")

	bookDetail, err := h.service.GetUrlFileByBookID(bookID)

	if err != nil {
		responseError := helper.APINewResponse(400, "Input params error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", bookDetail)
	c.JSON(200, response)
}

func (h *bookDetailHandler) SaveNewUrlFileHandler(c *gin.Context) {
	bookID := c.Param("id")

	file, err := c.FormFile("file")

	if err != nil {
		responseError := helper.APINewResponse(400, "Input data error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	path := fmt.Sprintf("file/book-%s-%s", bookID, file.Filename)

	err = c.SaveUploadedFile(file, path)

	if err != nil {
		responseError := helper.APINewResponse(400, "Status bad request", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	pathFileSave := "localhost:4444/" + path

	newBookID, _ := strconv.Atoi(bookID)
	bookDetail, err := h.service.SaveNewUrlFile(pathFileSave, newBookID)

	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", bookDetail)
	c.JSON(200, response)
}

func (h *bookDetailHandler) UpdateUrlFileByBookIDHandler(c *gin.Context) {
	bookID := c.Param("id")

	file, err := c.FormFile("file")

	if err != nil {
		responseError := helper.APINewResponse(400, "Input data error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	path := fmt.Sprintf("file/book-%s-%s", bookID, file.Filename)

	err = c.SaveUploadedFile(file, path)

	if err != nil {
		responseError := helper.APINewResponse(400, "Status bad request", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	pathFileSave := "localhost:4444/" + path

	bookDetail, err := h.service.UpdateUrlFileByID(pathFileSave, bookID)

	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", bookDetail)
	c.JSON(200, response)
}
