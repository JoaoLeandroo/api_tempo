
const key = '13bbfc0dcb2b2ed8e84db6ea3ae86caf'
const city = 'rio de janeiro'



fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br`)
.then((Response) => Response.json())
.then((json) => {
    console.log(json)
})
.catch((e) => console.log("A requisição deu erro " + e))