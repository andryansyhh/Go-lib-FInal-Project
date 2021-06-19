package entity

type Data struct {
	TotalResults int        `json:"totalResults"`
	Articles     []Articles `json:"articles"`
}

type Articles struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Url         string `json:"url"`
	UrlToImage  string `json:"urlToImage"`
	PublishedAt string `json:"publishedAt"`
}

type Pagination struct {
	Limit  int    `json:"limit"`
	Page   int    `json:"page"`
	Sort   string `json:"sort"`
	Search string `json:"search"`
}
