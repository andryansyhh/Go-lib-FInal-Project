package helper

type NewResponse struct {
	Code    int         `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

func APINewResponse(code int, msg string, data interface{}) NewResponse {
	var response = NewResponse{
		Code:    code,
		Message: msg,
		Data:    data,
	}

	return response
}
