$(document).ready(function() {
    // save button click listner
    $('.saveBtn').on('click', function(){

        //this gets textarea values from desc. class
        var value = $(this).siblings('.description').val()

        //this gets id value from time-block which gets converted into a number
        var time = $(this).parent().attr('id');

        // this saves values in localStorage
        localStorage.setItem(time, value);
    });

    //loops over time-blocks to check if current hr is before/equal to/after the time-block hr
    function hourTracker() {
        //get current hr, this var counts hrs in military time 0-23 so the ID for each block needs to be altered for
        var currentHour = moment().hours()

        //convert the time-block from "hr 9" to "9" & put that into a var(blockHour)
        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('hour-')[1])

            //if stmt (blockHour < currentHour) add .past class to the text area of time-block
            if (blockHour < currentHour) {
                $(this).children('textarea').addClass('past');
            }
            //else if (block === currentHour) remove .past class & add .present class to the text area of time-block
            else if (blockHour === currentHour) {
                $(this).children('textarea').removeClass('past');
                $(this).children('textarea').addClass('present')
            }
            //else (blockHour > currentHour) remove .past class & add .present/ .future class to the text area of .time-block
            else {
                $(this).children('textarea').removeClass('past');
                $(this).children('textarea').removeClass('present');
                $(this).children('textarea').addClass('future');
            }

        })
    }
    hourTracker();

    //Updates hourTracker() every second
    setInterval(hourTracker,1000);

    //loads saved data from localStorage
    $('.time-block').each( function (){
        var id = $(this).attr('id')
        $(this).children('textarea').val(localStorage.getItem(id))
    })

    // this displays current day in header of webpage
    $("#currentday").text(moment().format("dddd, MMMM Do"));

});