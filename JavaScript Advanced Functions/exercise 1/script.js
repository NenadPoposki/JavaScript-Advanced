$(document).ready(function () {
    const myButton = $("#myButton");
    const result = $("#result");

    let urlPlanet = "https://swapi.dev/api/planets/?page=1"


    function displayInfo(url) {
       $.ajax({
           url: url,
           success: (data) => {
               console.log("Success", data);
           },
           error: (err) => {
               console.log(err);
           }

       }) 
    }





    function displayInfo(planet) {
        if(planet != null){
            result.html("");
            result.append(`
            <div class="row different">
                <div class="col-md-3">Planet Name</div>
                <div class="col-md-2">Population</div>
                <div class="col-md-2">Climate</div>
                <div class="col-md-2">Gravity</div>
            </div>`);
            for (let info of planet) {
                result.append(`
            <div class="row">
                <div class="col-md-3">${info.name}</div>
                <div class="col-md-2">${info.population}</div>
                <div class="col-md-2">${info.climate}</div>
                <div class="col-md-2">${info.gravity}</div>
            </div>`);
        }
    }
    else {
        result.html(`<h2> id = "notification">Please wait</h2>`)
    }
}
myButton.click(function () {
    displayInfo(urlPlanet)
})

});