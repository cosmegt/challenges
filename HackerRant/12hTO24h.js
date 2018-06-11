function timeConversion(input) {
    var hours = parseInt(input.substring(0, input.indexOf(':')));
    var minutes = parseInt(input.substring(input.indexOf(':') + 1, input.lastIndexOf(':')));
    var seconds = parseInt(input.substring(input.lastIndexOf(':') + 1, input.lastIndexOf(':') + 3));
    var newHours;
    if(hours === 12) {
        newHours = 0;
    } else {
        newHours = hours;
    }
    var shift;
    if(input.toLowerCase().indexOf('pm') > -1) {
        shift = 12;
    } else {
        shift = 0;
    }
    var formatedHours = format((newHours + shift).toString());
    var formatedMinutes = format(minutes.toString());
    var formatedSeconds = format(seconds.toString());
     
    function format(numString) {
        if(numString.length === 1) {
            return "0" + numString;
        }
        return numString;
    }
    
    var newTime = formatedHours + ":" + formatedMinutes + ":" + formatedSeconds;
    //console.log(newTime)
    return newTime;
    
 
}
console.log(timeConversion("07:05:45PM"));