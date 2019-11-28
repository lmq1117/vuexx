import request from "@/utils/request";

const BASE_URL = "http://localhost:8087/api/"

//测试一
request.post(BASE_URL + "sport")
    .then(response => {
        console.log(response.data.data[0].Content)
    })
    .catch(error => {
        console.log(error)
    })

// 测试二
request({
    url: BASE_URL + "tech",
    method: "post",
}).then(reponse => {
    console.log("post2", reponse.data.data)
}).catch(error => {
    console.log(error)
})