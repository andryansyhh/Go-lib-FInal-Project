package handler

import (
	"golib/auth"
	"golib/helper"
	"golib/user"
	"strconv"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

func Middleware(userService user.Service, authService auth.Service) gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")

		if authHeader == "" || len(authHeader) == 0 {
			errorResponse := helper.APINewResponse(401, "Unauthorized user", gin.H{"error": "unauthorize user (no header)"})

			c.AbortWithStatusJSON(401, errorResponse)
			return
		}

		// eksekusi code untuk mengecek apakah token itu valid dari server kita atau tidak
		token, err := authService.ValidateToken(authHeader)

		if err != nil {
			errorResponse := helper.APINewResponse(401, "Unauthorized user", gin.H{"error": "unauthorize user (token unvalidated"})

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
		userLogin := c.MustGet("currentUser").(int)
		userID := strconv.Itoa(userLogin)
		user, err := userRepository.FindByID(userID)

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

func CorsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH, UPDATE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(200)
			return
		}

		c.Next()
	}
}
