package handler

import (
	"golib/category"
	"golib/entity"
	"golib/helper"

	"github.com/gin-gonic/gin"
)

type categoryHandler struct {
	categoryService category.CategoryService
}

func NewCategoryHandler(categoryService category.CategoryService) *categoryHandler {
	return &categoryHandler{categoryService}
}

func (h *categoryHandler) ShowAllCategoryHandler(c *gin.Context) {
	categories, err := h.categoryService.GetAllCategories()

	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", categories)
	c.JSON(200, response)
}

func (h *categoryHandler) CreateCategoryHandler(c *gin.Context) {
	var categoryInput entity.CategoryInput

	if err := c.ShouldBindJSON(&categoryInput); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APINewResponse(400, "Input data required", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	response, err := h.categoryService.SaveNewCategory(categoryInput)
	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	newResponse := helper.APINewResponse(200, "Success", response)
	c.JSON(201, newResponse)
}

func (h *categoryHandler) ShowCategoryDetailByID(c *gin.Context) {
	categoryID := c.Param("id")

	category, err := h.categoryService.FindCategoryByID(categoryID)
	if err != nil {
		responseError := helper.APINewResponse(400, "Input params error", gin.H{"error": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", category)
	c.JSON(200, response)
}

func (h *categoryHandler) UpdateCategoryByIDHandler(c *gin.Context) {
	categoryID := c.Param("id")

	var updateInputCategory entity.CategoryInput

	if err := c.ShouldBindJSON(&updateInputCategory); err != nil {
		splitError := helper.SplitErrorInformation(err)
		responseError := helper.APINewResponse(400, "Input params error", gin.H{"errors": splitError})

		c.JSON(400, responseError)
		return
	}

	updateCategory, err := h.categoryService.UpdateCategoryByID(categoryID, updateInputCategory)

	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", updateCategory)
	c.JSON(200, response)
}

func (h *categoryHandler) DeleteCategoryHandler(c *gin.Context) {
	categoryID := c.Param("id")

	category, err := h.categoryService.DeleteCategoryByID(categoryID)

	if err != nil {
		responseError := helper.APINewResponse(400, "Input params error", gin.H{"errors": err.Error()})

		c.JSON(400, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", category)
	c.JSON(200, response)
}

func (h *categoryHandler) LengthCategoryHandler(c *gin.Context) {
	length, err := h.categoryService.LengthAllCategory()

	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", length)
	c.JSON(200, response)

}
