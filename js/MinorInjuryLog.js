function submitBtn() {
    let minorInjuryLogObj = {};

    minorInjuryLogObj = {
        "injury_date": document.getElementById("date").value,
        "injury_time": document.getElementById("time").value,
        "name_of_injured": document.getElementById("injury").value,
        "injury_location": document.getElementById("injury-location").value,
        "treatment": document.getElementById("treatment").value,
        "how_injury_occurred": document.getElementById("injury-occur").value,
        "facility_where_injury_occurred": document.getElementById("facility").value,
        "full_name_of_staff": document.getElementById("staff-name").value
    }

    insertMinorInjuryLog(minorInjuryLogObj);

}

function insertMinorInjuryLog(minorInjuryLogObj) {
    let URL = "http://127.0.0.1:3000/fvsra/minorInjuryLog"
    $.ajax({
        url : URL,
        contentType : 'application/json',
        type: 'POST',
        data : JSON.stringify( minorInjuryLogObj ),
        success : function( data ) {
            //let oStr = "<h2> Success </h2>" ;
            console.log(`Success`)
            console.log( data );
            alert("Log has been reported.")
            window.location.reload();
        },
        error : function( xhr, status, error ) {
            alert( "Error");
            console.log(`AJAX ERROR`)
            console.log( error );
        }
    })
}
