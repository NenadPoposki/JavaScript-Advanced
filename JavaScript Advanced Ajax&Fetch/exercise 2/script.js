// $(document).ready(function () {

//     let myTable = $("Table");
//     $("#callButton").click(function () {
        
    
//     $.ajax({
//         url: "https://api.openaq.org/v1/cities",
//         success: function (data) {
//             let jsObject = JSON.parse(data);
//             $("#h1").text(`Person is${data.name}`);
//             myTable.append(`<thead>`);
//             let myTableHead = (`thead`);
//             myTableHead.append(`<tr><th>Height</th></tr><tr><th>Weight</th></tr><tr><th>Eye Color</th></tr><tr><th>Hair Color</th></tr>`)
//             let tableBody = myTableHead$("tbody");
//             tableBody.append(`<tr><td>${data.height}</td></tr><tr><td>${data.mass}</td></tr><tr><td>${data.eye_color}</td></tr><tr><td>${data.hair_color}</td></tr>`)
            
//         },
//         error:function (err) {
//             console.log(err)
//         }
//         })
//     })
// })

let myTable = document.getElementById("myTable");
myTableHead = document.createElement("thead");
myTableBody = document.createElement("tbody");

document.getElementById("callButton").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function (response) {
        console.log(response);
        response.json().then(function (data) {
            console.log(data);
            myTableHead.innerHTML += "<tr><th>Id</th><th>Name</th><th>Username</th><th>Email</th><th>Adress</th><th>Geo</th><th>Phone</th><th>Website</th><th>Company</th></tr>";
            myTable.appendChild(myTableHead);
            myTableBody.innerHTML += `<tr><td>${data.id}</td><td>${data.name}</td><td>${data.username}</td><td>${data.email}</td><td>${data.address.street}<br>${data.address.suite}<br>${data.address.city}<br>${data.address.zipcode}</td><td>${data.address.geo.lat}<br>${data.address.geo.lng}</td><td>${data.phone}</td><td>${data.website}</td><td>${data.company.name}<br>${data.company.catchPhrase}<br>${data.company.bs}</td></tr>`;
            myTable.appendChild(myTableBody);
            
        }
        )
    })
        .catch(function (error) {
            console.log(error);
        
    })
})
