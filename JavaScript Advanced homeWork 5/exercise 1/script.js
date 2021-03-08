$(document).ready(function () {
    

    let newArr = [];
    let name;
    async function getDetals() {
        let detals = await fetch(
          "https://restcountries.eu/rest/v2/capital/tallinn");
        let data = await detals.json();
        for(let code of data){
            let result = code.currencies[0].code;
            let currency = await fetch(
              `https://restcountries.eu/rest/v2/currency/${result}`);
            let res = await currency.json();
        for(let name of res){
            name = name.name;
            newArr.push(name);
            console.log(name);
            $("#header").append(`${name}<br>`)
        }
        }
        $("h2").append(`The number of countries is ${newArr.length}`);
        console.log(newArr.length)
    }

    $("#btn").click(function () {
        $("#header").html("");
        getDetals();
    })
})