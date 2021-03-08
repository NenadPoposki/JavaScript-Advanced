// Bonus zadaca
let countDown = number => {
    if (number === 0) {
        return;
    }
    console.log(number);
    return countDown(number - 1);
};
console.log(countDown(5)) 


// Treta zadaca

let myButton = document.getElementById("myButton");


let fName = ["Nenad", "Angela", "Zoran", "Nikola", "Marina"]; 
let lName = ["Poposki", "Trposka", "Pereski", "Nikoloski", "Marinoska"]; 

function getFullname(firstName, lastName){
    fullN = [];

        for (let i = 0; i < firstName.length; i++) {
            for(let j = 0; j < lastName.length; j++) {
                console.log(fullN = firstName[i] + " " + lastName[i]);
            }      
    }
    
}

myButton.addEventListener("click", function () {
    getFullname(fName, lName)
})
