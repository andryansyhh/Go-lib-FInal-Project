package handler

import (
	"golib/auth"
	"golib/helper"
	"golib/user"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

func Middleware(userService user.Service, authService auth.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")

		if authHeader == "" || len(authHeader) == 0 {
			errorResponse := helper.APINewResponse(401, "Unauthorized user", gin.H{"error": "unauthorize user"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		// eksekusi code untuk mengecek apakah token itu valid dari server kita atau tidak
		token, err := authService.ValidateToken(authHeader)

		if err != nil {
			errorResponse := helper.APINewResponse(401, "Unauthorized user", gin.H{"error": "unauthorize user"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		claim, ok := token.Claims.(jwt.MapClaims)

		if !ok {
			errorResponse := helper.APINewResponse(401, "Unauthorized user", gin.H{"error": "unauthorize user"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		userID := int(claim["user_id"].(float64))

		// kita bisa pakai nanti
		c.Set("currentUser", userID)
		// -
	}

}

func AdminMiddleware(userRepository user.Repository) gin.HandlerFunc {
	return func(c *gin.Context) {
		userLogin := c.MustGet("currentUser").(string)

		user, err := userRepository.FindByID(userLogin)

		if err != nil {
			errorResponse := gin.H{"error": "error in internal middleware"}

			c.AbortWithStatusJSON(500, errorResponse)

			return
		}
		if user.Role != "admin" {
			errorResponse := gin.H{"error": "user login is not admin"}

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

	}
}
