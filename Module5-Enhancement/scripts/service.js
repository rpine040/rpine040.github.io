//JQuery starts listening to document
$(document).ready(function(){

    $("#phone").on("change", function(){
        if (!validatePhone("phone")){ // phone validation calls validatePhone function and uses an alert to display an error, and the required format for phone input
            alert("Wrong format for phone");
            $("#phone").val("(xxx)xxx-xxxx");
            $("#phone").addClass("error");
        } //adds error class for invalid input, removes error class otherwise
        else {
            $("#phone").removeClass("error");
        }
    });

    $( "#appointmentDate" ).datepicker( //calender provided by jQuery ThemeRoller Cupertino https://api.jqueryui.com/category/widgets/
        {
            dateFormat: setDateFormat,
            minDate: new Date('07/01/2021'),//set calender to July 2021
            maxDate: '+4M',
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

    $("#credit").on("mouseenter", function(){ //event handler for clicking on elements https://www.w3schools.com/jquery/jquery_events.asp
        $("#credit").addClass("showInput");
    });

    $("#credit").on("mouseleave", function(){
        $("#credit").removeClass("showInput");
    });

    $("#credit").tooltip({ // hover tooltip handler for credit card info provided by https://jqueryui.com/tooltip/
        classes: {
            "ui-tooltip": "highlight"
        }
    });

});

function setDentist() {
    var dentist = $( "#dentistSelect option:selected" ).val(); // set the dentist appointment info
    $(document).ready(function() {
        $("button").click(function() {
            $("#displayDentist").html(dentist);
        })
    })
}

function displayDentist() {
    var dentist = $( "#dentistSelect option:selected" ).val(); // display dentist for booking information
    $(document).ready(function() {
        $("button").click(function() {
            $("#displayDentist").html(dentist);
        })
    })
}




// jquery datepicker documentation: https://api.jqueryui.com/datepicker/
// excludes sundays, or 0 days, as well as specific input dates in the array unavailableDates
var unavailDates = ["07/18/2021","07/19/2021","07/20/2021","07/21/2021","07/22/2021","07/23/2021","07/24/2021"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    if (date.getDay() === 0) // Sunday is Day 0, disable all Sundays
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailDates.indexOf(string) === -1 ]
}

function setDate() {
    var get = $("#dateInput").datepicker("getDate"); //set date appointment information
    var date = $.datepicker.formatDate("MM-dd-yy", get); 
    $(document).ready(function() {
        $("button").click(function() {
            $("#displayAppointment").html(date);
        })
    })
}

function displayBooking() {
    var get = $("#dateInput").datepicker("getDate"); //display date for booking information
    var date = $.datepicker.formatDate("MM-dd-yy", get);
    $(document).ready(function() {
        $("button").click(function() {
            $("#displayBooking").html(date);
        })
    })
}

//this regex allows for the following inputs:
/*
    (123) 456-7890
    (123)456-7890
    123-456-7890
    123.456.7890
    1234567890
    +31636363634
    075-63546725
                    */
function validatePhone(phone) {
    var check = document.getElementById(phone).value;
    var filter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (filter.test(check)) {
        return true;
    }
    else {
        return false;
    }
}
