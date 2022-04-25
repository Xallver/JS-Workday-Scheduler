$(document).ready(function() {
    // save button click listner
    $('.saveBtn').on('click', function(){

        //this gets textarea values from desc. class
        var value = $(this).siblings('description').val()
        
        //this gets id value from time-block which gets converted into a number
        var time = $(this).parent().attr('id');

        // this saves values in localStorage
        localStorage.setItem(time,value);
    });
    
})