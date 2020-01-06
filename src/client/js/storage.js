class Storage {
    getAppData() {
        return JSON.parse(localStorage.getItem('trips'))
    }

    setAppData(city, tripdate) {
        const tripData = {
            city: city,
            date: tripdate
        }
        console.log("tripData: ", tripData)
        localStorage.setItem('trips', JSON.stringify(tripData))
    }

    clearAppData() {
        localStorage.removeItem('trips')
    }
}

export const storage = new Storage();