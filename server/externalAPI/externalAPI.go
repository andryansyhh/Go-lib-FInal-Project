package externalAPI

import (
	"encoding/json"
	"golib/entity"
	"io/ioutil"
	"net/http"
)

func ExternalAPI() (entity.Data, error) {

	url := "https://newsapi.org/v2/top-headlines?language=en&pageSize=100&sortBy=publishedAt&category=technology&apiKey=e067289e827641599e90278cad01aefb"

	req, _ := http.NewRequest("GET", url, nil)

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	// fmt.Println(res)
	// fmt.Println(string(body))

	var datas entity.Data

	json.Unmarshal(body, &datas)

	return datas, nil
}
