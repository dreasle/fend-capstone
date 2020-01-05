class UI {

    updateWeatherUI(weatherInfo) {
        console.log("weatherInfo: ", weatherInfo)
        document.getElementById('high').innerHTML = `Temp: ${weatherInfo.temp}`
        // document.getElementById('low').innerHTML = `Long: ${weatherInfo.low}`
        document.getElementById('summary').innerHTML = `Summary: ${weatherInfo.summary}`
    }

    updateImageUI(imageUrl) {
        console.log("imageUrl: ", imageUrl)
        document.getElementById('photo').innerHTML = `<img src="${imageUrl.url}">`
    }
}

export const ui = new UI();