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
    // Set the date we're counting down to
    displayCountdown(tripDate) {
        // var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
        var countDownDate = new Date(tripDate).getTime();
        console.log('countdown');
        
        
        // Get today's date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result in the element with id="countdown"
        document.getElementById("countdown").innerHTML = `Days until trip: ${days}`
        //   document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        //   + minutes + "m " + seconds + "s ";
        
        // If the count down is finished, write some text
        if (distance < 0) {
          document.getElementById("countdown").innerHTML = "Trip has passed";
        }
    
    }
}

export const countdown = new Countdown();