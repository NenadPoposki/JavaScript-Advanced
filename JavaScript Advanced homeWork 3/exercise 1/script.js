function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}

let Products = [new Product("Esspresso","Coffee", false, 5), new Product("Nescafe","Coffee", false, 10), new Product("Black Tea","Tea", false, 8), new Product("iPhone","Phones", true, 100), new Product(" Samsung","Phones", true, 90), new Product(" Huawei","Phones", true, 80), new Product("LG","TV", true, 40), new Product("Sony","TV", true, 60), new Product("Lenovo","Laptop", false, 22), new Product("ASUS","Laptop", false, 19), new Product("iMac","Laptop", false, 30), new Product("HP","Laptop", false, 25), new Product("Spaghetti","Pasta", false, 15), new Product("Macaroni","Pasta", false, 15), new Product("Tallateli","Pasta", false, 15), new Product("Comedi","Movie", false, 5), new Product("Drama","Movie", false, 5), new Product("Action","Movie", false, 5), new Product("Airbus","Plane", false, 5555), new Product("Boing","Plane", false, 5555)];

function printProductsPriceOver20(product) {
    console.log(`Products with price over 20 is: ${product.name}  ${product.price}`);
}

let productPriceOver20 = Products.filter(product => product.price > 20);
productPriceOver20.forEach(printProductsPriceOver20);

let productWithDiscount = Products.filter(product => product.category === "Phones" && product.hasDiscount === true)
.map(product => product.name);
console.log(`Product with discount is: ${productWithDiscount} `);


function averageDiscountProducts(sum, product) {
    console.log("The sum of price on products with discount is: ")
    return sum += product
}
let AllProductsWithDiscount = Products.filter(product => product.hasDiscount === true)
let priceOfProductsWithDiscount = AllProductsWithDiscount.map(product => product.price).reduce(averageDiscountProducts, 0);
console.log(priceOfProductsWithDiscount);

let average = priceOfProductsWithDiscount / AllProductsWithDiscount.length;
console.log(`The average price is ${average}`);

let AllProducsWithNoDiscount = Products.filter(product => product.hasDiscount === false).map(product => `${product.name} ${ product.price}`)
console.log("Products without discount is: ")
console.log(AllProducsWithNoDiscount);

let vowels = AllProducsWithNoDiscount.filter(product => !product.hasDiscount).filter(product => { 
    let vowel = ("aeiouAEIOU");
    for(let i of vowel){
        if(product.name === i){
            return product;
        }
    }
}).map(product => `${product.name} ... ${product.price}`)
console.log(vowels)

function sortProductsByPrice(arr){
    let newArr = [];
    arr.forEach(x => newArr.push(x));
    return newArr;
}
console.log(sortProductsByPrice(Products))

let productsSort = sortProductsByPrice(Products);
productsSort.sort((product1, product2)=> product2.price - product1.price)
console.log(productsSort)