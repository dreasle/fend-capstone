/**
 * Countdown Timer Library
 * Library for getting the countdown timer
 * 
 * @version 1.0.0
 * @author Andrea Lehman
 * 
 * 
 **/
// Countdown clock inspiration found at https://www.w3schools.com/howto/howto_js_countdown.asp

class Countdown {
    displayCountdown(tripDate) {
        // Set the date we're counting down to
        var countDownDate = new Date(tripDate).getTime();
        
        // Get today's date and time
        var now = new Date().getTime();
        console.log("date now: ", now.toString())
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        
        // Display the result in the element with id="countdown"
        document.getElementById("countdown").innerHTML = `Days until trip: ${days}`
        
        // Update text if countdown has finished.
        if (distance < 0) {
          document.getElementById("countdown").innerHTML = "Trip has passed";
        }

        return days    
    }
}

export const countdown = new Countdown();