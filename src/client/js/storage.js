class Storage {
    // constructor() {
    //     this.trips = []
    //     // this.trips = [{date: date, city: city}, {date: date, city: city}]
    // }

    getAppData() {
        return JSON.parse(localStorage.getItem('trips'))
        // this.trips = JSON.parse(localStorage.getItem('trips'))
        
        // return this.trips
    }

    // setAppData(city, state, country, tripdate) {
    //     const tripData = {
    //         city: city, 
    //         state: state, 
    //         country: country, 
    //         tripdate: tripdate
    //     }
    //     localStorage.setItem('tripData', JSON.stringify(tripData))
    //     // Need to append if new trip in addition to stored trip(s).
    // }

    setAppData(city, tripdate) {
        const tripData = {
            city: city,
            date: tripdate
        }
        console.log("tripData: ", tripData)
        localStorage.setItem('trips', JSON.stringify(tripData))
        // Need to append if new trip in addition to stored trip(s).
    }

    clearAppData() {
        localStorage.removeItem('trips')
    }
}

export const storage = new Storage();