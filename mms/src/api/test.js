import request from "@/utils/request";

request.post("http://localhost:8087/api/sport")
    .then(response => {
        console.log(response.data.data[0].Content)
    })
    .catch(error => {
        console.log(error)
    })

