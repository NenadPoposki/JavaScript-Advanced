$(document).ready(function () {

    let myButton = $("#firstTen");
    let nextButton = $("#next");
    let prevButton = $("#prev");
    let myTable = $("#myTable");
    myTable.css("border", "1px solid black");
    let nextUrl = "";
    let prevUrl = "";
    nextButton.hide();
    prevButton.hide();

    let firstTen = url => {
        $.ajax({
            url: url,
            success: (result) => {
                console.log(result);
                myTable.append("<thead>");
                let myTableHeader = $("thead");
                myTableHeader.append(`<tr><th>Planet Name</th><th>Climate</th><th>Gravity</th><th>Populaltion</th></tr>`);
                let myTableBody = myTableHeader.after("<tbody>");
                myTableBody = $("tbody");
                for (i = 0; i <= 9; i++) {
                    myTableBody.append(`<tr><td>${result.results[i].name}</td><td>${result.results[i].climate}</td><td>${result.results[i].gravity}</td>td>${result.results[i].population}</td></tr>`);
                }
                nextUrl = result.next;
                prevUrl = result.previous;
            },
            error: (err) => {
                console.log(err);
            }
        });
    }

    myButton.click(() => {
        myTable.html("");
        firstTen("https://swapi.dev/api/planets/?page=2");
        nextButton.show();
        prevButton.hide();
    })

    nextButton.click(() => {
        myTable.html("");
        firstTen(nextUrl);
        prevButton.show();
    })

    prevButton.click(() => {
        myTable.html("");
        firstTen(prevUrl);
        nextButton.show();
    })

});

