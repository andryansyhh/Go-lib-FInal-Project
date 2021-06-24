package handler

import (
	"golib/externalAPI"
	"golib/helper"

	"github.com/gin-gonic/gin"
)

func ShowAllContent(c *gin.Context) {
	articles, err := externalAPI.ExternalAPI()

	if err != nil {
		responseError := helper.APINewResponse(500, "Internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseError)
		return
	}

	response := helper.APINewResponse(200, "Success", articles)
	c.JSON(200, response)

}
